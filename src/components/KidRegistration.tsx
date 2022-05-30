import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function KidRegistration({ onAuthorized } :any) {

    return (
      <View style={styles.container}>
        <Text>Создайте аккаунт ребенка</Text>
        <Button title='Создать' onPress={onAuthorized} />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });