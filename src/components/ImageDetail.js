
import React from 'react'
import {View, StyleSheet, Image, Dimensions} from 'react-native'


const ImageDetail = (props) => {
    return (
        <View>
            <Image style={styles.image} source={props.source}/>
        </View>
    );
}
Dimensions.get('window').width;
Dimensions.get('window').height;
const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
        justifyContent: 'center',
        alignSelf: 'center',
    },
});

export default ImageDetail
