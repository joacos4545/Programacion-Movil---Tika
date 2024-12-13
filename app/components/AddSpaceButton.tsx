import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const AddSpaceButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Añadir espacio</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AddSpaceButton;
