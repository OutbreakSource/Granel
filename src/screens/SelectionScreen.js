import {ScrollView, View, Text, Image, StyleSheet, Dimensions} from "react-native";
import React from "react";

const SelectionScreen = ({navigation}) => {
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

    function getDay(dayCurr) {
        if (dayCurr === 0){
            return "Sunday"
        }
        else if (dayCurr === 1){
            return "Monday"
        }
        else if (dayCurr === 2){
            return "Tuesday"
        }
        else if (dayCurr === 3){
            return "Wednesday"
        }
        else if (dayCurr === 4){
            return "Thursday"
        }
        else if (dayCurr === 5){
            return "Friday"
        }
        else if (dayCurr === 6){
            return "Saturday"
        }
    }


    const createViews = () => {
        return routines.map((routine, routineIndex) => (
            <View style={styles.viewBlock} key={routineIndex}>
                    {
                        routine.map((plan, planIndex) => (
                            <View key={planIndex}>
                                <Text style={styles.textStyleDay}>
                                    {getDay(planIndex)}.
                                </Text>
                                <Text style={styles.textStyle}>
                                    {plan.replaceAll("/", " | ")}
                                </Text>
                            </View>
                        ))
                    }
            </View>

        ));
    };

    return (
        <ScrollView horizontal
                    pagingEnabled>
            {createViews()}
        </ScrollView>
    )

}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'Verdana',
        fontSize: 18,
        textDecorationStyle: "double",
        alignSelf: "center",
        textTransform: "uppercase",
        lineHeight: 30
    },
    textStyleDay: {
        fontFamily: 'Verdana',
        fontSize: 26,
        textDecorationStyle: "double",
        alignSelf: "center",
        textTransform: "uppercase",
        fontWeight: 'bold',
        lineHeight: 26,
        position: 'relative',

    },
    viewBlock: {
        backgroundColor: '#4fbded',
        borderRadius: 40,
        width: width,
        height: height * 0.750,
        paddingTop: height * 0.02,
        resizeMode: "contain",

    },

    slider: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }
});




export default SelectionScreen;
