import React from 'react';
import Main from './components/Main';
import ContainerWebView from './components/ContainerWebView';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
    return (
      <NavigationContainer> 
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Main}
            options={
              {
                title: 'Вернуться',
                headerStyle: { backgroundColor: '#fff', height: 0 },
                headerTitleStyle: { fontWeight: '400', color: '#fff' },
              }
            }
          />
          <Stack.Screen
            name="ContainerWebView"
            component={ContainerWebView}
            options={{title: 'Видео урок'}}
          />
        </Stack.Navigator>
      </NavigationContainer> 
    )
}