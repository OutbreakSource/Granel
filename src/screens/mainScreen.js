import React, {useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import CurrentBodyGroup from "../components/CurrentBodyGroup";
import EquipmentSelect from "../components/EquipmentSelect";

const MainScreen = ({navigation, route}) => {
    const {width, height} = Dimensions.get('window');

    const selectedRoutineIndex = route?.params?.selectedRoutineIndex ?? 0;

    let myDate = new Date();
    const dayCurr = myDate.getDay();
    const stringDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayCurr];

    const [selectedItems, setSelectedItems] = useState([
        "Barbell", "Body Only", "Cable", "Dumbbell", "Kettlebells", "Machine"
    ]);

    return (
        <View style={{backgroundColor: '#FBFBFB', height: '100%'}}>
            <ScrollView>
                <EquipmentSelect
                    navigation={navigation}
                    selectedItems={selectedItems}
                    setSelectedItems={setSelectedItems}
                />

                <TouchableOpacity
                    style={styles.backgroundStyleSelect}
                    onPress={() => navigation.navigate("SELECT")}
                >
                    <Text style={styles.textStyle}>Select Plan</Text>
                </TouchableOpacity>


                <View style={{paddingTop: width * 0.05, paddingBottom: width * 0.15}}>
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
        backgroundColor: '#E8F9FF',
        height: 100,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 15,
        flexDirection: "row",
        justifyContent: "center"
    }, mainStyle: {
        backgroundColor: '#C5BAFF',
        height: 100,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 15,
        flexDirection: "row",
        justifyContent: "center"
    },
    backgroundStyleSelect: {
        backgroundColor: '#C4D9FF',
        height: 50,
        borderRadius: 100,
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
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    iconStyle: {
        fontSize: 40, // Adjust the size of the icon
        color: '#0072b1', // LinkedIn's blue color
        marginRight: 10,
    },
    iconText: {
        fontSize: 18,
        color: '#0072b1', // Match the icon's color
    },

})

export default MainScreen;
