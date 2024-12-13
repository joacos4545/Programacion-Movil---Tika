import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import PlantCard from '../components/PlantCard ';
import AddSpaceButton from '../components/AddSpaceButton';

const spaces = [
  { id: '1', name: 'Jardín', plants: 0 },
  { id: '2', name: 'Interior', plants: 0 },
  { id: '3', name: 'Balcón', plants: 0 },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Plantas</Text>
      <FlatList
        data={spaces}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PlantCard name={item.name} plants={item.plants} />
        )}
      />
      <AddSpaceButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
