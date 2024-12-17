import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Card, Text, Button, Avatar, List } from 'react-native-paper';

const PlantDetails = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Encabezado con imagen y botones */}
      <View style={styles.header}>
        {/* Imagen */}
        <Avatar.Image
          size={120}
          source={{ uri: 'https://via.placeholder.com/120' }}
          style={styles.image}
        />
        {/* Botones de Necesidades */}
        <View style={styles.needsContainer}>
          <Button
            mode="outlined"
            icon="leaf"
            style={[styles.needButton, styles.greenButton]}
            labelStyle={styles.buttonLabel}
          >
            Tipo de planta
          </Button>
          <Button
            mode="outlined"
            icon="heart"
            style={[styles.needButton, styles.greenButton]}
            labelStyle={styles.buttonLabel}
          >
            Cuidado
          </Button>
          <Button
            mode="outlined"
            icon="water"
            style={[styles.needButton, styles.blueButton]}
            labelStyle={styles.buttonLabel}
          >
            Agua
          </Button>
          <Button
            mode="outlined"
            icon="weather-sunny"
            style={[styles.needButton, styles.orangeButton]}
            labelStyle={styles.buttonLabel}
          >
            Sol
          </Button>
        </View>
      </View>

      {/* Resumen de la planta */}
      <Card style={styles.summaryCard}>
        <Card.Content>
          <Text style={styles.sectionTitle}>Resumen de la planta</Text>
          <Text style={styles.description}>Descripción breve sobre la planta...</Text>
        </Card.Content>
      </Card>

      {/* Información General */}
      <View style={styles.infoContainer}>
        {infoRow('Fecha de plantación', 'DD/MM/AAAA', true)}
        {infoRow('Tipo de maceta', 'Tamaño de la maceta', false)}
        {infoRow('Tipo de suelo', 'Tipo de tierra', true)}
        {infoRow('Frecuencia de riego', 'Frecuencia de riego', false)}
        {infoRow('Toxicidad', 'No tóxico/Tóxico', true)}
        {infoRow('Tamaño maduro', '99-99 metros de altura', false)}
        {infoRow('Exposición al sol', 'Exposición', true)}
      </View>

      {/* Lista Expandible */}
      <List.Section style={styles.listContainer}>
        {expandableSection('Como crecer', 'sprout', 'Instrucciones para el crecimiento...')}
        {expandableSection('Luz', 'white-balance-sunny', 'Requisitos de luz para la planta...')}
        {expandableSection('Suelo', 'shovel', 'Tipo de suelo recomendado...')}
        {expandableSection('Agua', 'water', 'Frecuencia y cantidad de riego...')}
        {expandableSection('Temperatura y Humedad', 'thermometer', 'Rango ideal de temperatura y humedad...')}
        {expandableSection('Macetas y Trasplante', 'flower', 'Instrucciones para trasplante...')}
        {expandableSection('Propagación', 'leaf', 'Métodos de propagación...')}
        {expandableSection('Plagas y enfermedades', 'bug', 'Problemas comunes y soluciones...')}
      </List.Section>
    </ScrollView>
  );
};

// Componente para filas de información con estilo alternado
const infoRow = (label: string, value: string, isHighlighted: boolean) => (
  <View
    style={[
      styles.infoRow,
      isHighlighted && styles.highlightedRow, // Aplica fondo verde claro
    ]}
  >
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

// Componente para secciones expandibles
const expandableSection = (title: string, icon: string, content: string) => (
  <List.Accordion
    title={title}
    left={() => <List.Icon icon={icon} />}
    style={styles.accordion}
  >
    <Text style={styles.description}>{content}</Text>
  </List.Accordion>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 2,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  image: {
    backgroundColor: '#E0E0E0',
    marginRight: 15,
  },
  needsContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  needButton: {
    marginVertical: 5,
    borderWidth: 1.5,
    borderRadius: 10,
  },
  greenButton: {
    borderColor: '#4CAF50',
    backgroundColor: '#E8F5E9',
  },
  blueButton: {
    borderColor: '#2196F3',
    backgroundColor: '#E3F2FD',
  },
  orangeButton: {
    borderColor: '#FFB74D',
    backgroundColor: '#FFF3E0',
  },
  buttonLabel: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#555',
  },
  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    elevation: 1,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#616161',
  },
  infoContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 5,
    marginBottom: 15,
    elevation: 1,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  highlightedRow: {
    backgroundColor: '#E8F5E9', // Fondo verde claro
  },
  label: {
    fontWeight: 'bold',
    color: '#424242',
  },
  value: {
    color: '#616161',
  },
  listContainer: {
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    elevation: 1,
  },
  accordion: {
    backgroundColor: '#FAFAFA',
    marginBottom: 5,
    borderRadius: 10,
  },
});

export default PlantDetails;
