
import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'


const ImageDetail = (props) => {
    return (
        <View>
            <Image style={styles.image} source={props.source}/>
        </View>
    );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
        width: windowWidth, // 60% of the screen width
        height: windowHeight * .50, // 5% of the screen height
        justifyContent: 'center',
        alignSelf: 'center',
    },
});

export default ImageDetail
