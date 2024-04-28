import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl, Image } from "react-native";

const WorkOutScreen = ({ navigation }) => {
    let groups = navigation.getParam('groups').split("/");
    let equipmentlist = navigation.getParam('equipment');
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

            let equipment = "";
            const newImageUrls = [];
            for (const group of groups) {
                console.log(group)
                let response = await fetch(`http://192.168.0.56:8888/randomImage?category=${equipmentlist[Math.floor(Math.random() * equipmentlist.length)]}&muscle=${group}&timestamp=${Date.now()}`);

                let failureCount = 0;
                console.log(equipmentlist.length)
                if (response.status === 500){
                    for(let i = 0; i < equipmentlist.length; i++){
                        response = await fetch(`http://192.168.0.56:8888/randomImage?category=${equipmentlist[i]}&muscle=${group}&timestamp=${Date.now()}`);
                        if (response.status === 200){
                            break;
                        }
                    }
                    console.log("oopsiedaisy")
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
                        //ource={{ uri: `${imageUrls[index]}&timestamp=${Date.now() === null ? '' : Date.now()}` }}
                        source={{ uri: `${imageUrls[index]}&timestamp=${Date.now()}` }}
                        style={{ width: '98%', height: '100%' }}
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
        fontSize: 50,
        textDecorationStyle: "solid",
        alignSelf: "center",
        marginVertical: 10,
    },
    viewBlock: {
        backgroundColor: '#568ee1',
        borderRadius: 5,
        marginVertical: 15,
        padding: 10,
    },
    imageContainer: {
        alignSelf: 'center',
        marginTop: 10,
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default WorkOutScreen;