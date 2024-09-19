import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

export default function WeightInputScreen() {
  const [weightLbs, setWeightLbs] = useState('');

  const handleSubmit = () => {
    if (weightLbs) {
      const weight = weightLbs + "lbs";
      alert(`Weight submitted: ${weight}`);
    } else {
      alert('Please enter your Weight.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>What's Your Weight? </Text>
      </View>

      {/* Height Input Form */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Or enter Weight in pounds (lbs):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={weightLbs}
          onChangeText={setWeightLbs}
          placeholder="e.g., 170"
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // Ensure spacing between items (top, center, bottom)
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 20,
  },
  headerContainer: {
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD95A',
    textAlign: 'center',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 8,
    alignSelf: 'flex-start', // Align labels to the left
    width: '100%', // Full width to align with the inputs
    marginLeft: 40,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#FFD95A',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: '#000000',
    backgroundColor: '#FFD95A',
  },
  button: {
    backgroundColor: '#FFD95A',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 5,
    marginBottom: 30,
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
