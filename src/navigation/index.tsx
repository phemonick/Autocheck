import * as React from 'react';
import {Colour} from '../components/styles';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';


interface TabBarIconProps {
  focused: boolean;
  horizontal: boolean;
  tintColor: string;
}

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Autocheck" component={Home} 
          options={{
            title: "Autocheck",
            headerStyle: {
              backgroundColor: Colour.checkBlue,
            },
            headerTintColor: Colour.white,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
