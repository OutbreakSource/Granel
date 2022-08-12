import React, {useState, version} from 'react';
import {View, Text, StyleSheet, ScrollView, Button, TouchableOpacity, Image, RefreshControl} from "react-native";
import ImageDetail from "../components/ImageDetail";
import * as All from '../../assets/assets';
import {Screen} from "react-native-screens";


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let intToString = Math.floor(Math.random() * (max - min + 1) + min)
    return intToString.toString(); //The maximum is inclusive and the minimum is inclusive
}

const mapGroup = new Map();
mapGroup.set('triceps', [All.triceps[1]])
mapGroup.set('chest', [All.chest[1]])


const WorkOutScreen = ({navigation}) => {


    let groups = navigation.getParam('groups').split("/")
    const view = [];
    for (let i = 0; i < groups.length; i++) {



        let test = mapGroup.get(groups[i].toLowerCase())[getRandomIntInclusive(1,2)]
        let test2 = mapGroup.get(groups[i].toLowerCase())[0]
        console.log(test2)
        view.push(
            <View style={styles.viewBlock}>
                <View>
                    <Text style={styles.textStyle}>{groups[i]}</Text>
                </View>
                <View>
                    <ImageDetail source={mapGroup.get(groups[i].toLowerCase())[0]} style={{width: 500, height: 500}}/>
                </View>
            </View>
        )
    }

    const [refresh, setRefresh] = useState(false)

    const pullMe = () => {
        setRefresh(true)
        setTimeout(() => {
            setRefresh(false)
        }, 50)
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refresh}
                    onRefresh={() => pullMe()}
                />}>
            <View>
                <View>{view}</View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50,
        textDecorationStyle: "solid",
        justifyContent: 'center',
        flexDirection: 'column',
        alignSelf: "center"

    },
    viewBlock: {
        backgroundColor: '#FF4A4A',
        height: 75,
        borderRadius: 5,
        marginVertical: 15,
        flexDirection: "row",
        justifyContent: "center"
    }, backgroundStyle: {
        backgroundColor: '#bebebe',
        height: 100,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 15,
        flexDirection: "row",
        justifyContent: "center"
    },
})
export default WorkOutScreen;
