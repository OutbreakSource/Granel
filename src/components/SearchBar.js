import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { Fontisto } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (<View style={styles.backgroundStyle}>
        <Fontisto name={'search'} style={styles.iconStyle}/>
        <TextInput style={styles.inputStyle}
                   placeholder={"Search"}
        value={term}
        autoCapitalize={'none'}
        autoCorrect={false}
                   onChangeText={onTermChange}
        onEndEditing={() => onTermSubmit()}/>
    </View>);
};


const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 15,
        flexDirection: "row"
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15

    }
});

export default SearchBar;
