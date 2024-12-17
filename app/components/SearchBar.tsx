import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { IconButton } from 'react-native-paper';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <IconButton icon="magnify" size={24} />
      <TextInput placeholder="Buscar..." style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 40,
    elevation: 2,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});


export default SearchBar;
