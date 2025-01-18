import React, { useState } from 'react';
import {View, Text, StyleSheet, ScrollView} from "react-native";
import CurrentBodyGroup from "../components/CurrentBodyGroups";
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from "react-native-vector-icons/MaterialIcons"
import EquipmentSelect from "../components/EquipmentSelect";


const MainScreen = ({navigation}) => {

    let myDate = new Date();
    let dayCurr = myDate.getDay()

    let stringDay = ""
    if (dayCurr === 0){
        stringDay = "Sunday"
    }
    else if (dayCurr === 1){
        stringDay = "Monday"
    }
    else if (dayCurr === 2){
        stringDay = "Tuesday"
    }
    else if (dayCurr === 3){
        stringDay = "Wednesday"
    }
    else if (dayCurr === 4){
        stringDay = "Thursday"
    }
    else if (dayCurr === 5){
        stringDay = "Friday"
    }
    else if (dayCurr === 6){
        stringDay = "Saturday"
    }




    const [selectedItems, setSelectedItems] =
        useState(["Barbell", "Body Only", "Cable", "Dumbbell", "Kettlebells", "Machine"]);

    return (
        <View style={{backgroundColor: '#ffffff'}}>
            <ScrollView>
                <EquipmentSelect
                    navigation={navigation}
                    selectedItems={selectedItems}
                    setSelectedItems={setSelectedItems}/>

                <View style={{paddingTop: 25}}>
                    <CurrentBodyGroup theme={styles.mainStyle} currentDay={myDate.getDay()}
                                      navigation={navigation} equipment={selectedItems} id={0}/>
                    <CurrentBodyGroup theme={styles.backgroundStyle} currentDay={myDate.getDay()}
                                      navigation={navigation} equipment={selectedItems} id={1}/>
                    <CurrentBodyGroup theme={styles.backgroundStyle} currentDay={myDate.getDay()}
                                      navigation={navigation} equipment={selectedItems} id={2}/>
                    <CurrentBodyGroup theme={styles.backgroundStyle} currentDay={myDate.getDay()}
                                      navigation={navigation} equipment={selectedItems} id={3}/>
                    <CurrentBodyGroup theme={styles.backgroundStyle} currentDay={myDate.getDay()}
                                      navigation={navigation} equipment={selectedItems} id={4}/>
                </View>
            </ScrollView>
            <View style={styles.backgroundStyle}>
                <Text style={styles.textStyle}>{stringDay}</Text>
            </View>
        </View>

    )
}

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
