import React, { useState } from 'react';
import {View, Text, StyleSheet, ScrollView} from "react-native";
import CurrentBodyGroup from "../components/CurrentBodyGroups";
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from "react-native-vector-icons/MaterialIcons"


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

    const [selectedItems, setSelectedItems] = useState(["Barbell", "Body Only", "Cable", "Dumbbell", "Kettlebells", "Machine"]);

    const items = [
        {
            name: 'Equipment',
            id: 0,
            children: [
                { id: 'Barbell', name: 'Barbell' },
                { id: 'Body Only', name: 'Body Only' },
                { id: 'Cable', name: 'Cable' },
                { id: 'Dumbbell', name: 'Dumbbell' },
                { id: 'Kettlebells', name: 'Kettlebells' },
                { id: 'Machine', name: 'Machine' }
            ],
        },
    ];

    const onSelectedItemsChange = (selectedItems) => {
        setSelectedItems(selectedItems);
    };

    console.log(navigation)


    return (
        <View style={{backgroundColor: '#ffffff'}}>
            <ScrollView>
                <SectionedMultiSelect
                    IconRenderer={Icon}
                    items={items}
                    uniqueKey="id"
                    subKey="children"
                    selectText="Equipment"
                    onSelectedItemsChange={onSelectedItemsChange}
                    selectedItems={selectedItems}
                    hideSearch={true}
                    expandDropDowns={true}
                    styles={{

                        container: {
                            flex: 1,
                            padding: 8,
                            maxHeight: 500,
                            marginTop:'50%'
                        },
                        item: {
                            borderBottomWidth: 1,
                            borderBottomColor: '#80bcff',
                            padding: 8
                        },
                        subItem: {
                            backgroundColor: '#e3e3e3',
                            paddingVertical: 10,
                            paddingHorizontal: 20,
                            padding: 8
                        },
                        selectedItem: {
                            backgroundColor: '#568ee1',
                            color: '000000'
                        },
                        subItemText: {
                            color: '#000000',
                            fontSize: 30,
                        },
                        separator: {
                            height: 1,
                            backgroundColor: '#00e4ff',
                        },
                        selectToggle: {
                            padding: 8,
                        },
                        button: {
                            backgroundColor: '#568ee1',
                        },
                        confirmText: {
                            color: 'black',
                            padding: 8
                        },
                        scrollView: {
                            maxHeight: 600
                        },
                        selectToggleText: {
                            fontSize: 30,
                            flex: 1,
                            justifyContent: "center"
                        },

                    }}

                />
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
