import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BottomNav = () => {
  const [index, setIndex] = React.useState(1); // Mis Plantas como pantalla inicial
  const [routes] = React.useState([
    { key: 'home', title: 'Inicio', icon: 'home' },
    { key: 'plants', title: 'Mis Plantas', icon: 'leaf' },
    { key: 'irrigation', title: 'Riego', icon: 'watering-can-outline' }, // Corregido
    { key: 'humidity', title: 'Humedad', icon: 'water-percent' },
  ]);
  

  const renderScene = BottomNavigation.SceneMap({
    home: () => <View style={styles.scene} />,
    plants: () => <View style={styles.scene} />,
    irrigation: () => <View style={styles.scene} />,
    humidity: () => <View style={styles.scene} />,
  });

  return (
    <View style={styles.container}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={styles.navBar}
        labeled
      />
      <View style={styles.floatingButtonContainer}>
        <View style={styles.floatingButton}>
          <MaterialCommunityIcons name="plus" size={28} color="#fff" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', // Necesario para el posicionamiento absoluto del botón flotante
  },
  navBar: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  floatingButtonContainer: {
    position: 'absolute',
    bottom: 35, // Ajusta para colocar el botón sobre la barra de navegación
    alignSelf: 'center',
    zIndex: 10, // Asegura que el botón esté por encima de otros elementos
  },
  floatingButton: {
    backgroundColor: '#4CAF50',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BottomNav;
