// src/screens/FormScreen.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, StatusBar } from 'react-native';

export default function FormScreen({ navigation }) {
  // Use useState to manage each input field's value
  const [studentId, setStudentId] = useState('');
  const [fullName, setFullName] = useState('');
  const [course, setCourse] = useState('');
  const [yearLevel, setYearLevel] = useState('');
  const [dateRegistered, setDateRegistered] = useState('');

  const handleSubmit = () => {
    // Pass the state values as parameters to the 'Confirmation' screen
    navigation.navigate('Confirmation', {
      studentId: studentId,
      fullName: fullName,
      course: course,
      yearLevel: yearLevel,
      dateRegistered: dateRegistered,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='student_id'
        value={studentId}
        onChangeText={setStudentId}
      />
      <TextInput
        style={styles.input}
        placeholder='full_name'
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder='course'
        value={course}
        onChangeText={setCourse}
      />
      <TextInput
        style={styles.input}
        placeholder='year_level'
        value={yearLevel}
        onChangeText={setYearLevel}
      />
      <TextInput
        style={styles.input}
        placeholder='date_registered'
        value={dateRegistered}
        onChangeText={setDateRegistered}
      />
      <Button title='Submit' onPress={handleSubmit} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: "50%",
    height: 50,
    borderColor: "gray", // Corrected invalid color code
    borderWidth: 1, // Added borderWidth for visibility
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#f0f0f0", // Changed background for better contrast
  },
});