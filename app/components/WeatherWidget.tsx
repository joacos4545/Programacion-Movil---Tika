import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const WeatherWidget = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.temp}>36°C</Text>
      <Text style={styles.range}>36°C - 8°C</Text>
      <MaterialCommunityIcons name="weather-cloudy" size={24} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  temp: {
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 5,
  },
  range: {
    fontSize: 14,
    color: '#666',
    marginRight: 5,
  },
});


export default WeatherWidget;
