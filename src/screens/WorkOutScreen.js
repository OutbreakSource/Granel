import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl, Image } from "react-native";

const WorkOutScreen = ({ navigation }) => {
    let groups = navigation.getParam('groups').split("/");
    let equipment = navigation.getParam('equipment');
    const [refreshKey] = useState(0);
    const [imageUrls, setImageUrls] = useState([]);




    if (groups[0].toLowerCase() === 'rest') {
        return (
            <View>
                <Text style={styles.textStyle}>Rest Up!</Text>
            </View>)
    }
    if (groups[0].toLowerCase() === 'Your Choice') {
        return (
            <View>
                <Text style={styles.textStyle}>Whatever you feel like!</Text>
            </View>)
    }



    const fetchImages = async () => {
        try {
            const newImageUrls = [];
            for (const group of groups) {
                let response = await fetch(`http://192.168.0.56:8888/randomImage?category=${equipment[Math.floor(Math.random() * equipment.length)]}&muscle=${group}&timestamp=${Date.now()}`);
                if (response.status === 500){
                    for(let i = 0; i < equipment.length; i++){
                        response = await fetch(`http://192.168.0.56:8888/randomImage?category=${equipment[i]}&muscle=${group}&timestamp=${Date.now()}`);
                        if (response.status === 200){
                            break;
                        }
                    }
                }
                newImageUrls.push(response.url);
            }
            setImageUrls(newImageUrls);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };


    const createViews = () => {
        return groups.map((group, index) => (
            <View style={styles.viewBlock} key={index}>
                <View>
                    <Text style={styles.textStyle}>{group}</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image
                        key={index}
                        source={{ uri: `${imageUrls[index]}&timestamp=${Date.now()}` }}
                        style={{ width: '98%', height: '100%', borderRadius: 10}}
                    />
                </View>
            </View>
        ));
    };

    const pullMe = async () => {
        await fetchImages();
    };

    useEffect(() => {
        fetchImages();
    }, []);

    return (
        <ScrollView
            key={refreshKey}
            refreshControl={
                <RefreshControl
                    refreshing={false}
                    onRefresh={pullMe}
                />
            }>
            <View>
                {createViews()}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'Verdana',
        fontSize: 50,
        textDecorationStyle: "double",
        alignSelf: "center",
        textTransform: "uppercase",
        fontWeight: 'bold'
    },
    viewBlock: {
        backgroundColor: '#de2525',
        borderRadius: 15,
        marginVertical: 15,
        padding: 25,
    },
    imageContainer: {
        alignSelf: 'center',
        //marginTop: 10,
        borderRadius: 100,
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default WorkOutScreen;