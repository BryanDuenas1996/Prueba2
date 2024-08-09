import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export function Screen1() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://significado.com/contenido/imp/apps.jpg' }} 
        style={styles.image}
        resizeMode="cover"      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,  
    height: 200,
  },
});