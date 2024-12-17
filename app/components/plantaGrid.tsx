import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Text, Button, Avatar, Modal, Portal, Provider, TextInput } from 'react-native-paper';

interface Plant {
  id: number;
  name: string;
}

const PlantGrid = () => {
  const [plants, setPlants] = useState<Plant[]>([
    { id: 1, name: 'Nombre de planta' },
    { id: 2, name: 'Nombre de planta' },
    { id: 3, name: 'Nombre de planta' },
  ]);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);
  const [newPlantName, setNewPlantName] = useState('');

  // Funciones para controlar modales
  const openEditModal = (plant: Plant) => {
    setSelectedPlant(plant);
    setNewPlantName(plant.name);
    setVisibleEdit(true);
  };

  const openDeleteModal = (plant: Plant) => {
    setSelectedPlant(plant);
    setVisibleDelete(true);
  };

  const closeModals = () => {
    setVisibleEdit(false);
    setVisibleDelete(false);
    setVisibleAdd(false);
    setSelectedPlant(null);
    setNewPlantName('');
  };

  // Función para editar una planta
  const editPlant = () => {
    if (selectedPlant) {
      setPlants((prevPlants) =>
        prevPlants.map((plant) =>
          plant.id === selectedPlant.id ? { ...plant, name: newPlantName } : plant
        )
      );
    }
    closeModals();
  };

  // Función para eliminar una planta
  const deletePlant = () => {
    if (selectedPlant) {
      setPlants((prevPlants) => prevPlants.filter((plant) => plant.id !== selectedPlant.id));
    }
    closeModals();
  };

  // Función para agregar una planta
  const addPlant = () => {
    if (newPlantName.trim()) {
      const newPlant: Plant = { id: Date.now(), name: newPlantName };
      setPlants((prevPlants) => [...prevPlants, newPlant]);
    }
    closeModals();
  };

  return (
    <Provider>
      <ScrollView style={styles.container}>
        <Text style={styles.headerTitle}>Jardín</Text>

        <View style={styles.grid}>
          {/* Tarjeta para Añadir Planta */}
          <TouchableOpacity style={styles.addCard} onPress={() => setVisibleAdd(true)}>
            <Avatar.Icon size={80} icon="plus" color="white" style={styles.addIcon} />
            <Text style={styles.addText}>Añadir planta</Text>
          </TouchableOpacity>

          {/* Tarjetas de Plantas */}
          {plants.map((plant) => (
            <Card key={plant.id} style={styles.plantCard} elevation={2}>
              <View style={styles.cardContent}>
                <Avatar.Image
                  size={60}
                  source={{ uri: 'https://via.placeholder.com/120' }}
                  style={styles.plantImage}
                />
                <Text style={styles.plantName}>{plant.name}</Text>
                <View style={styles.iconContainer}>
                  <TouchableOpacity>
                    <Avatar.Icon size={30} icon="water" style={styles.actionIcon} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Avatar.Icon size={30} icon="sprout" style={styles.actionIcon} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => openEditModal(plant)}>
                    <Avatar.Icon size={30} icon="pencil" style={styles.actionIcon} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => openDeleteModal(plant)}>
                    <Avatar.Icon size={30} icon="trash-can" style={styles.actionIcon} />
                  </TouchableOpacity>
                </View>
              </View>
            </Card>
          ))}
        </View>

        {/* Modal para Añadir Planta */}
        <Portal>
          <Modal visible={visibleAdd} onDismiss={closeModals} contentContainerStyle={styles.modal}>
            <Text style={styles.modalTitle}>Añadir Planta</Text>
            <TextInput
              label="Nombre de la planta"
              value={newPlantName}
              onChangeText={setNewPlantName}
              mode="outlined"
              style={styles.input}
            />
            <Button mode="contained" style={styles.addButton} onPress={addPlant}>
              Añadir
            </Button>
          </Modal>
        </Portal>

        {/* Modal para Editar Planta */}
        <Portal>
          <Modal visible={visibleEdit} onDismiss={closeModals} contentContainerStyle={styles.modal}>
            <Text style={styles.modalTitle}>Editar Planta</Text>
            <TextInput
              label="Nombre de la planta"
              value={newPlantName}
              onChangeText={setNewPlantName}
              mode="outlined"
              style={styles.input}
            />
            <Button mode="contained" style={styles.editButton} onPress={editPlant}>
              Guardar cambios
            </Button>
          </Modal>
        </Portal>

        {/* Modal para Confirmar Eliminación */}
        <Portal>
          <Modal visible={visibleDelete} onDismiss={closeModals} contentContainerStyle={styles.modal}>
            <Text style={styles.confirmText}>
              ¿Estás seguro que quieres eliminar "{selectedPlant?.name}"?
            </Text>
            <Button mode="contained" color="red" style={styles.deleteButton} onPress={deletePlant}>
              Eliminar planta
            </Button>
            <Button mode="contained" color="green" style={styles.cancelButton} onPress={closeModals}>
              Cancelar
            </Button>
          </Modal>
        </Portal>
      </ScrollView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#388E3C', textAlign: 'center' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' },
  addCard: { alignItems: 'center', justifyContent: 'center', backgroundColor: '#E8F5E9', borderRadius: 10, width: '45%', padding: 20, marginBottom: 15 },
  addIcon: { backgroundColor: '#4CAF50' },
  addText: { marginTop: 10, fontWeight: 'bold', color: '#4CAF50' },
  plantCard: { backgroundColor: '#FFFFFF', borderRadius: 10, width: '45%', marginBottom: 15 },
  cardContent: { alignItems: 'center', padding: 10 },
  plantImage: { marginBottom: 10 },
  plantName: { fontWeight: 'bold', color: '#424242', marginBottom: 10 },
  iconContainer: { flexDirection: 'row', justifyContent: 'space-around', width: '100%' },
  actionIcon: { backgroundColor: '#E8F5E9' },
  modal: { backgroundColor: 'white', padding: 20, margin: 20, borderRadius: 10 },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  input: { marginBottom: 10 },
  addButton: { backgroundColor: '#4CAF50' },
  editButton: { backgroundColor: '#1976D2' },
  deleteButton: { marginBottom: 10 },
  cancelButton: {},
  confirmText: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
});

export default PlantGrid;
