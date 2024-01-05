import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl, Image } from "react-native";

const WorkOutScreen = ({ navigation }) => {
    let groups = navigation.getParam('groups').split("/");
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

    const [refreshKey, setRefreshKey] = useState(0);
    const [imageUrls, setImageUrls] = useState([]);

    const fetchImages = async () => {
        try {
            const newImageUrls = await Promise.all(
                groups.map(async (group) => {
                    const response = await fetch(`http://192.168.0.56:8888/randomImage?category=Barbell&muscle=${group}&timestamp=${Date.now()}`);
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }

                    const imageUrl = response.url;
                    return imageUrl;
                })
            );

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
                        style={{ width: 200, height: 200 }}
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
        backgroundColor: '#FF4A4A',
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
