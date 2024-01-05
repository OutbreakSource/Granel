
import React from 'react'
import {View, StyleSheet, Image, Dimensions} from 'react-native'


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
        width: windowWidth * .80,
        height: windowHeight * .80,
        justifyContent: 'center',
        alignSelf: 'center',
    },
});

export default ImageDetail
