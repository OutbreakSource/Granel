import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView, RefreshControl, Image, ActivityIndicator } from "react-native";

const WorkOutScreen = ({ route, navigation }) => {
    const { groups = '', equipment = '' } = route.params || {};
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //console.log("Groups:", groups);
    //console.log("Equipment:", equipment);
    //let groups = navigation.getParam('groups').split("/");
    //let equipment = navigation.getParam('equipment');
    //let groups = navigation.navigate('Work', { paramName: "groups"})


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
        setLoading(true)
        try {
            const newImageUrls = [];
            for (const group of groups) {

                let response = await fetch(`http://192.168.0.14:3000/randomImage?category=${equipment[Math.floor(Math.random() * equipment.length)]}&muscle=${group}&timestamp=${Date.now()}`);

                if (response.status === 500){
                    for(let i = 0; i < equipment.length; i++){
                        response = await fetch(`http://192.168.0.14:3000/randomImage?category=${equipment[i]}&muscle=${group}&timestamp=${Date.now()}`);
                        if (response.status === 200){
                            break;
                        }
                    }
                }
                newImageUrls.push(response.url);
            }
            setImageUrls(newImageUrls);
            setLoading(false)

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
                            style={{ width: '100%', height: '100%', borderRadius: 25, resizeMode: "contain"}}
                        />
                    </View>
                </View>

        ));
    };

    const pullMe = async () => {
        await fetchImages();
    };

    useEffect(  () => {
        fetchImages();
    }, []);

    return (
        <View>
            {loading ? (
                <View style={{paddingTop: 15}}>
                    <ActivityIndicator size="large" color="#de2525" />
                </View>
                )
            :
                <ScrollView
                        key={refreshKey}
                        refreshControl={
                            <RefreshControl
                                refreshing={false}
                                onRefresh={pullMe}
                            />
                        }>
                    <ScrollView horizontal
                                pagingEnabled
                                showsHorizontalScrollIndicator={false}>
                        {createViews()}
                    </ScrollView>
                    </ScrollView>}
        </View>

    );
}
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'Verdana',
        fontSize: 50,
        textDecorationStyle: "double",
        alignSelf: "center",
        textTransform: "uppercase",
        fontWeight: 'bold',
    },
    viewBlock: {
        backgroundColor: '#de2525',
        borderRadius: 15,
        justifyContent: 'space-between',
        width: width,

    },
    imageContainer: {
        alignSelf: 'center',
        //marginTop: 10,
        borderRadius: 100,
        height: height * 0.80,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slider: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',


    }
});

export default WorkOutScreen;