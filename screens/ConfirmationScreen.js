// src/screens/ConfirmationScreen.js
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function ConfirmationScreen({ navigation }) {
  const route = useRoute();
  const { studentId, fullName, course, yearLevel, dateRegistered } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmation Details</Text>
      <Text style={styles.text}>Student ID: {studentId}</Text>
      <Text style={styles.text}>Full Name: {fullName}</Text>
      <Text style={styles.text}>Course: {course}</Text>
      <Text style={styles.text}>Year Level: {yearLevel}</Text>
      <Text style={styles.text}>Date Registered: {dateRegistered}</Text>
      
      <Button title='Go Back' onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});