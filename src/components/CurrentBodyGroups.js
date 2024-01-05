import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';



const CurrentBodyGroup = ({navigation, id, theme, currentDay, equipment}) => {

    let routines = [["Rest",
        "Chest/Lats/Lower Back/Middle Back/Shoulders/Triceps/Biceps/Forearms",
        "Chest/Lats/Lower Back/Middle Back/Shoulders/Triceps/Biceps/Forearms/Calves/Glutes/Hamstrings/Quadriceps/Abdominals",
        "Calves/Glutes/Hamstrings/Quadriceps/Abdominals",
        "Chest/Lats/Lower Back/Middle Back/Shoulders/Triceps/Biceps/Forearms/Calves/Glutes/Hamstrings/Quadriceps/Abdominals",
        "Chest/Lats/Lower Back/Middle Back/Shoulders/Triceps/Biceps/Forearms/Calves/Glutes/Hamstrings/Quadriceps/Abdominals",
        "Your Choice"
    ],["Rest",
        "Quadriceps/Glutes/Abdominals",
        "Lats/Chest",
        "Calves/Glutes/Hamstrings/Quadriceps/Core",
        "Lower back/Middle back/Triceps",
        "Shoulders",
        "Chest/Biceps/Abdominals"
    ],["Calves/Glutes/Hamstrings/Quadriceps",
        "Chest",
        "Biceps",
        "Legs",
        "Triceps",
        "Shoulders",
        "Lower back/Middle back"
    ],["Rest",
        "Chest",
        "Biceps/Triceps",
        "Legs",
        "Lower back/Middle back",
        "Shoulders",
        "Rest"
    ],["Rest",
        "Lower back/Middle back/Triceps",
        "Chest/Biceps/Abdominals",
        "Calves/Glutes/Hamstrings/Quadriceps/Shoulder",
        "Lower back/Middle back/Lats/Triceps",
        "Shoulders/Chest/Biceps",
        "Rest"
    ]]


    return (

            <View>
                <Text style={styles.planText}>Plan #{id + 1}:</Text>
                <TouchableOpacity style={theme} onPress={() =>
                    navigation.navigate("Work", {groups: routines[id][currentDay], equipment: equipment})}>
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
