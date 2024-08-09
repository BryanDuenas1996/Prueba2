import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Botones } from '../Components/Botones';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../Navegacion/NavigatorStack'; 

export function ScreenBotones() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Botones title="Screen1" onPress={() => navigation.navigate('Screen1')} />
      <Botones title="Screen2" onPress={() => navigation.navigate('Screen2')} />
      <Botones title="ScreenMayor" onPress={() => navigation.navigate('ScreenMayor')} />
      <Botones title="ScreenMenor" onPress={() => navigation.navigate('ScreenMenor')} />      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4F46E5',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});