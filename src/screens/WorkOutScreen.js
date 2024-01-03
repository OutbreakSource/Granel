import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, RefreshControl, Image} from "react-native";



const WorkOutScreen = ({navigation}) => {

    let groups = navigation.getParam('groups').split("/")
    if(groups[0].toLowerCase() === 'rest'){
        return (
            <View>
                <Text style={styles.textStyle}>lol</Text>
            </View>)
    }

    const createViews = () => {
        const views = [];
        for (let i = 0; i < groups.length; i++) {
            views.push(
                <View style={styles.viewBlock} key={i}>
                    <View>
                        <Text style={styles.textStyle}>{groups[i]}</Text>
                    </View>
                    <View style={styles.imageContainer}>

                        {/*<ImageDetail source={mapGroup.get(groups[i].toLowerCase())[getRandomIntInclusive(1, 2)]} style={{ width: 600, height: 500 }} />*/}

                        <Image
                            key={1}
                            source={{ uri: `http://192.168.0.56:8888/randomImage?category=Barbell&muscle=${groups[i]}` }}
                            style={{ width: 200, height: 200 }}
                        />

                    </View>
                </View>
            );
        }
        return views;
    }

    const [refresh, setRefresh] = useState(false)
    const [refreshKey, setRefreshKey] = useState(0);


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
                <View>{createViews()}</View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50,
        textDecorationStyle: "solid",
        alignSelf: "center",
        marginVertical: 10
    },
    viewBlock: {
        backgroundColor: '#FF4A4A',
        borderRadius: 5,
        marginVertical: 15,
        padding: 10
    },
    imageContainer: {
        alignSelf: 'center',
        marginTop: 10,
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default WorkOutScreen;
