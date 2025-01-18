import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView, RefreshControl,
    Image, ActivityIndicator } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const WorkOutScreen = ({ route, navigation }) => {
    const { groups = '', equipment = '' } = route.params || {};
    const [loading, setLoading] = useState(true);



    const [refreshKey] = useState(0);
    const [imageUrls, setImageUrls] = useState([]);
    const scrollRef = useRef(null);
    const [savedXPosition, setSavedXPosition] = useState(null);




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
        const getSavedPosition = async () => {
            try {
                const value = await AsyncStorage.getItem('SCROLL_X_POSITION');
                console.log(value/width);
                if (value !== null) {
                    setSavedXPosition(parseInt((value/width), 10));
                }
            } catch (error) {
                console.error('Error getting scroll position:', error);
            }
        };

        await getSavedPosition();
    };




    useEffect(  () => {
        fetchImages();

    }, []);


    const handleScroll = async (event) => {
        const positionX = event.nativeEvent.contentOffset.x;
        console.log(positionX / width);
        try {
            await AsyncStorage.setItem('SCROLL_X_POSITION', (positionX/width).toString());
        } catch (error) {
            console.error('Error saving scroll position:', error);
        }
    };

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
                                showsHorizontalScrollIndicator={false}
                                onMomentumScrollEnd={handleScroll}
                                ref={scrollRef}
                                >

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