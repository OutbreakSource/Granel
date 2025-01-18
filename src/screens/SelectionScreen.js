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
                <View>
                    {
                        routine.map((plan, planIndex) => (
                            <View>
                                <Text>
                                    {getDay(planIndex)}.
                                </Text>
                                <Text style={styles.textStyle} key={planIndex}>
                                    {plan}
                                </Text>
                            </View>
                        ))
                    }
                </View>
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
        fontSize: 20,
        textDecorationStyle: "double",
        alignSelf: "center",
        textTransform: "uppercase",
        lineHeight: 30
    },
    viewBlock: {
        backgroundColor: '#4fbded',
        borderRadius: 40,
        justifyContent: 'space-between',
        width: width,
        height: height * 0.80,
        paddingTop: height * 0.05,

    },

    slider: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }
});




export default SelectionScreen;
