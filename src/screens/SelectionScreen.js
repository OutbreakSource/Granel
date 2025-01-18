import {ScrollView, View, Text, StyleSheet, Dimensions, TouchableOpacity} from "react-native";
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
            <View style={styles.scrollViewChild} key={routineIndex}>
                <View style={styles.viewBlock}>
                    {routine.map((plan, planIndex) => (
                        <View key={planIndex}>
                            <Text style={styles.textStyleDay}>{getDay(planIndex)}.</Text>
                            <Text style={styles.textStyle}>{plan.replaceAll("/", " | ")}</Text>
                        </View>
                    ))}
                </View>

                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate("GRANEL", { selectedRoutineIndex: routineIndex })
                    }
                >
                    <View style={styles.viewBlockSelect}>
                        <Text style={styles.textStyleDay}>SELECT PLAN</Text>
                    </View>
                </TouchableOpacity>
            </View>
        ));
    };




    return (
        <ScrollView
            horizontal
            pagingEnabled
            contentContainerStyle={styles.scrollViewContainer}
            showsHorizontalScrollIndicator={false}
        >
            {createViews()}
        </ScrollView>
    );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    scrollViewContainer: {
        alignItems: 'center', // Ensure children are centered
    },
    scrollViewChild: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewBlock: {
        backgroundColor: '#84afff',
        borderRadius: 40,
        width: width * 0.95,
        height: height * 0.75,
        paddingTop: height * 0.02,
        paddingHorizontal: 10,
        justifyContent: 'center',
        marginBottom: 10
    },
    viewBlockSelect: {
        backgroundColor: '#de2525',
        width: width * 0.7,
        height: height * 0.09,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 100,
    },
    textStyle: {
        fontFamily: 'Verdana',
        fontSize: 18,
        alignSelf: 'center',
        textTransform: 'uppercase',
        lineHeight: 30,
    },
    textStyleDay: {
        fontFamily: 'Verdana',
        fontSize: 26,
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase',
        lineHeight: 26,
    },
});




export default SelectionScreen;
