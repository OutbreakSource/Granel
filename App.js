import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import MainScreen from "./src/screens/mainScreen";
import WorkOutScreen from "./src/screens/WorkOutScreen";

const navigator = createStackNavigator({
    Main: MainScreen,
    Work: WorkOutScreen
},{
    initialRouteName: 'Main',
    defaultNavigationOptions: {
        title: "Workout Routine"
    },
});

export default createAppContainer(navigator);
