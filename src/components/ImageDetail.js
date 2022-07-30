
import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'


const ImageDetail = (props) => {
    return <View>
        <Image style={styles.image} source={props.image}/>
    </View>
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
        height: 100,
        width: 200,
        justifyContent: 'center',
        flexDirection: 'column',
        alignSelf: "center"
    }

})

export default ImageDetail
