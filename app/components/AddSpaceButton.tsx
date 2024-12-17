import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const AddSpaceButton = () => {
  return (
    <Button
      mode="contained"
      onPress={() => console.log('Añadir espacio')}
      style={styles.button}
      labelStyle={styles.label}
    >
      Añadir espacio
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 50, 
    alignSelf: 'center', 
    width: '90%', 
    height: 30, 
    justifyContent: 'center', 
  },
  label: {
    color: '#FFFFFF', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddSpaceButton;
