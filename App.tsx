import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NavigatorStack } from './src/Navegacion/NavigatorStack';

export default function App() {
  return (
    <NavigationContainer>
      <NavigatorStack></NavigatorStack>
    </NavigationContainer>    
  );
}


