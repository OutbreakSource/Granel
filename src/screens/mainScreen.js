import React, { useState } from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity} from "react-native";
import CurrentBodyGroup from "../components/CurrentBodyGroup";
import EquipmentSelect from "../components/EquipmentSelect";


const MainScreen = ({ navigation, route }) => {
    const { width, height } = Dimensions.get('window');

    const selectedRoutineIndex = route?.params?.selectedRoutineIndex ?? 0;

    let myDate = new Date();
    const dayCurr = myDate.getDay();
    const stringDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayCurr];

    const [selectedItems, setSelectedItems] = useState([
        "Barbell", "Body Only", "Cable", "Dumbbell", "Kettlebells", "Machine"
    ]);

    return (
        <View style={{ backgroundColor: '#ffffff' }}>
            <ScrollView>
                <EquipmentSelect
                    navigation={navigation}
                    selectedItems={selectedItems}
                    setSelectedItems={setSelectedItems}
                />

                <TouchableOpacity
                    style={styles.backgroundStyle}
                    onPress={() => navigation.navigate("SELECT")}
                >
                    <Text style={styles.textStyle}>SELECT</Text>
                </TouchableOpacity>


                <View style={{ paddingTop: width * 0.05, paddingBottom: width * 0.15 }}>
                    <CurrentBodyGroup
                        theme={styles.mainStyle}
                        currentDay={dayCurr}
                        navigation={navigation}
                        equipment={selectedItems}
                        id={selectedRoutineIndex}
                    />
                </View>
            </ScrollView>

            <View style={styles.backgroundStyle}>
                <Text style={styles.textStyle}>{stringDay}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#84afff',
        height: 100,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 15,
        flexDirection: "row",
        justifyContent: "center"
    }, mainStyle: {
        backgroundColor: '#2967fd',
        height: 100,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 15,
        flexDirection: "row",
        justifyContent: "center"
    },
    textStyle: {
        marginVertical: 10,
        color: 'black',
        fontSize: 20,
        alignSelf: "center",
        fontWeight: 'bold'
    },

})

export default MainScreen;
