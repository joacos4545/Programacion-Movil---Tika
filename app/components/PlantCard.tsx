import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';

interface PlantCardProps {
  name: string;
  plants: number;
  onPress: () => void; // Prop para manejar el evento onPress
}

const PlantCard: React.FC<PlantCardProps> = ({ name, plants, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={require('../assets/placeholder.png')} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.plants}>{plants} Plantas</Text>
      </View>
      <Button mode="contained" style={styles.button} labelStyle={styles.label}>
        Añadir planta
      </Button>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  plants: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    borderRadius: 20,
    backgroundColor: '#4CAF50',
    paddingHorizontal: 15,
    height: 40,
    justifyContent: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default PlantCard;
