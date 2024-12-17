import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import WeatherWidget from '../components/WeatherWidget';
import PlantCard from '../components/PlantCard';
import AddSpaceButton from '../components/AddSpaceButton';
import BottomNav from '../components/BottomNavigation';

const spaces = [
  { id: '1', name: 'Jardín', plants: 2 },
  { id: '2', name: 'Interior', plants: 0 },
  { id: '3', name: 'Balcón', plants: 0 },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <WeatherWidget />
      <SearchBar />
      <View style={styles.list}>
        {spaces.map((space) => (
          <PlantCard key={space.id} name={space.name} plants={space.plants} onPress={function (): void {
            throw new Error('Function not implemented.');
          } } />
        ))}
      </View>
      <AddSpaceButton />
      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#F5F5F5',
  },
  list: {
    marginVertical: 10,
  },
});

export default HomeScreen;
