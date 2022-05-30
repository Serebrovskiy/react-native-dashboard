import React, { useEffect } from 'react';
import { Button, StyleSheet, View} from 'react-native';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function ContainerWebView({ navigation, route }: any) {

  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
  }
  async function changeScreenOrientationPORTRAIT() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }
  useEffect(()=>{
    changeScreenOrientation();
    return ()=>{
      changeScreenOrientationPORTRAIT();
    }
  },[])

  return (
      <WebView 
       style={styles.container}
       allowsInlineMediaPlayback
       source={{ uri: `https://parent.kidverse.ru/link-for-course?lessonId=${route.params.lessonId}&hashEmail=U2FsdGVkX1-Dn!0UDu1qWzXVRWu1!cbQZPR8RyN6cYNXrASABPrzcLWKYTBG!RvW` }}
     /> 
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
});