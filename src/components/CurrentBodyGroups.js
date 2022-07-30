import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import CurrentBodyGroupData from "./CurrentBodyGroupData";
import {NavigationActions as navigation} from "react-navigation";


const CurrentBodyGroup = ({navigation, id, theme, currentDay}) => {

    let routines = [["Rest",
        "Upper Body/Cardio",
        "Total Body/Abs",
        "Lower Body/Cardio",
        "Total Body/Abs",
        "Total Body",
        "Your Choice"
    ],["Rest",
        "Quads/Glutes/Core",
        "Lats/Chest",
        "Calves/Hams/Core",
        "Low back/Mid back/Triceps",
        "Shoulders/Traps/Neck",
        "Chest/Biceps/Core"
    ],["Legs",
        "Chest",
        "Biceps",
        "Legs",
        "Triceps",
        "Shoulders",
        "Back"
    ],["Rest",
        "Chest",
        "Bicep/Triceps",
        "Legs",
        "Back",
        "Shoulders",
        "Rest"
    ],["Rest",
        "Back/Triceps",
        "Chest/Biceps/Abs",
        "Legs/Shoulder",
        "Back/Triceps",
        "Shoulders/Chest/Bicep",
        "Rest"
    ]]


    return (
        <View>
            <Text style={styles.planText}>Plan #{id + 1}:</Text>

            <TouchableOpacity style={theme} onPress={() =>
                navigation.navigate("Work", {groups: routines[id][currentDay]})}>
                <Text style={styles.textStyle}>{routines[id][currentDay]}</Text>
            </TouchableOpacity>
        </View>


    );
};

const styles = StyleSheet.create({
    textStyle: {
        color: 'white',
        fontSize: 40,
        alignSelf: "center",
        fontStyle: 'italic'
    },
    planText: {
        color: 'black',
        fontSize: 20
    }
})

export default CurrentBodyGroup;
