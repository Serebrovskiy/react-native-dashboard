import React from 'react';
import * as Device from 'expo-device';
import { StyleSheet, Text, View, Button } from 'react-native';

import * as SecureStore from 'expo-secure-store';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';


export default function DeviceInfo({ navigation }: { navigation: any } ) {

  useEffect(() => {
    async function uuidInit() {
    console.log('start')
    let uuid = uuidv4();
    console.log('uuid 1', uuid)
    let fetchUUID = await SecureStore.getItemAsync('secure_deviceid');
    //if user has already signed up prior
    if (fetchUUID) {
      uuid = fetchUUID
    }
    uuid = uuid.replace(/\\/g, '').replace(/"/g, '');

    await SecureStore.setItemAsync('secure_deviceid', JSON.stringify(uuid));
    console.log('uuid 2', uuid);
   };
    uuidInit();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Устройство          <Text style={styles.text}>{Device.brand}</Text></Text>
      {/* <Text style={styles.title}>Модель                   <Text style={styles.text}>{Device.modelName}</Text></Text> */}
      <Text style={styles.title}>ОC                              <Text style={styles.text}>{Device.osName}  {Device.osVersion}</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 40
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 22,
    lineHeight: 40,
    fontWeight: 'normal',
  },
});
