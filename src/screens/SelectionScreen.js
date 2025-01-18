import {ScrollView, View, Text, Image, StyleSheet, Dimensions, TouchableOpacity} from "react-native";
import React from "react";
import {RadioButtonCheckedOutlined} from "@mui/icons-material";

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

            <View styles={{spacing: 50}} key={routineIndex}>
                <View style={styles.viewBlock} key={routineIndex}>
                    <TouchableOpacity>
                    </TouchableOpacity>
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

            <TouchableOpacity key={"test"}>
                <View style={styles.viewBlockSelect}>
                        <Text style={styles.textStyleDay}>
                            SELECT PLAN
                        </Text>
                </View>
            </TouchableOpacity>

    </View>
        ));

    };

    return (
        <ScrollView horizontal
                    pagingEnabled
                    contentContainerStyle={styles.scrollViewContainer}
                    showsHorizontalScrollIndicator={false}>
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
        position: 'relative',
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
        backgroundColor: '#84afff',
        borderRadius: 40,
        width: width,
        height: height * 0.750,
        paddingTop: height * 0.02,
        resizeMode: "contain",
        marginBottom: 20,
        paddingHorizontal: 10,

    },

    viewBlockSelect: {
        backgroundColor: '#de2525',
        width: width * .7,
        height: height * 0.10,
        alignSelf: "center",
        justifyContent: "center",
        textTransform: "uppercase",
        paddingHorizontal: 50,
        borderRadius: 100
    },

    scrollViewContainer: {
    },
    scrollViewChild: {
        width: width, // Add spacing between pages; adjust dimension
    },
});




export default SelectionScreen;
