import React, {useState, version} from 'react';
import {View, Text, StyleSheet, ScrollView, Button, TouchableOpacity, Image} from "react-native";
import ImageDetail from "../components/ImageDetail";


const WorkOutScreen = ({navigation}) => {

    let groups = navigation.getParam('groups').split("/")




        const view = [];

        for (let i = 0; i < groups.length; i++) {
            view.push(
                <View style={styles.viewBlock}>
                    <View>
                        <Text style={styles.textStyle}>{groups[i]}</Text>
                    </View>
                    <View>
                        <ImageDetail group={groups[i]}
                                     image={require('../../assets/dumbbell/chest/1.png')}/>
                    </View>
                </View>

            )
        }



        return (
            <View>
                <TouchableOpacity style={styles.backgroundStyle} onPress={() =>
                console.log("shuffle")}>
                    <Text style={styles.textStyle}>Shuffle</Text>
                </TouchableOpacity>
                <View>{view}</View>
            </View>
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
    },backgroundStyle: {
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
