import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function loginSuccess() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.successText}>Login Successful!</Text>
      <Button title="Go Back" onPress={() => router.push('/')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  successText: {
    color: '#FFD95A',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
