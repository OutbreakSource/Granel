import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// Import your screens/components
import MainScreen from './src/screens/mainScreen';
import WorkOutScreen from './src/screens/WorkOutScreen';
import SelectionScreen from "./src/screens/SelectionScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="GRANEL" id={"stack"}>
                    <Stack.Screen name="GRANEL" component={MainScreen}/>
                    <Stack.Screen name="CONSTRIUR" component={WorkOutScreen}/>
                    <Stack.Screen name="SELECT" component={SelectionScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}