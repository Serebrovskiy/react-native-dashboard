import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MainStack from './src/navigate';
import KidRegistration from './src/components/KidRegistration';
import { globalStyle } from './src/styles/globalStyle'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';


const fonts = () => Font.loadAsync({
  'EuclidCircularA-Bold': require("./assets/fonts/Gilroy-Bold.ttf"),
  'GrtskPeta-Medium': require("./assets/fonts/KDT-Medium.otf"),

});

export default function App() { 
  const [userAuthorized, setUserAuthorized] = useState(true);
  const [font, setFont] = useState(false);

  const onAuthorized = () => {
    setUserAuthorized(true);
  }

  if(font){
    return (
      userAuthorized ? <MainStack /> : <KidRegistration onAuthorized={onAuthorized} />
    );
  }else{
    return (
      <AppLoading startAsync={fonts} onFinish={()=>setFont(true)} onError={console.warn} />
    );
  } 

}
