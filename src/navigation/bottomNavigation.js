
import React from 'react';
import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/home/home';

// import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
// import Feather from 'react-native-vector-icons/dist/Feather';
// import Fontisto from 'react-native-vector-icons/dist/Fontisto';

function BottomNavigation() {

    // const Tab = createBottomTabNavigator();
    return (
        <View style={{
            flex: 1,
            backgroundColor: "#FED718",
            paddingHorizontal: 15,
            color: "#000"
        }}>
            <Text style={{ fontSize: 10, color: "#000" }}>Hello</Text>
            {/* <NavigationContainer independent={true}>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={Home} />
                </Tab.Navigator>
            </NavigationContainer> */}
        </View>
    );
}

export default BottomNavigation;
