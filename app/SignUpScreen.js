import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router'; 

export default function SignUpScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPass, setReEnterPass] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');

  const router = useRouter(); //Initialize router

  // Helper functions to validate email and phone number
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNum) => {
    const phoneRegex = /^[0-9]{10}$/; // Only 10 digits for typical phone numbers
    return phoneRegex.test(phoneNum);
  };

  const handleSignUp = () => {
    // Validate Username
    if (username.trim() === '') {
      Alert.alert('Sign Up Failed', 'Username is required.');
      return;
    }

    // Validate Password and Re-Entered Password
    if (password.length < 6) {
      Alert.alert('Sign Up Failed', 'Password must be at least 6 characters long.');
      return;
    }

    if (password !== reEnterPass) {
      Alert.alert('Sign Up Failed', 'Passwords do not match.');
      return;
    }

    // Validate Email
    if (!validateEmail(email)) {
      Alert.alert('Sign Up Failed', 'Please enter a valid email address.');
      return;
    }

    // Validate Phone Number
    if (!validatePhoneNumber(phoneNum)) {
      Alert.alert('Sign Up Failed', 'Please enter a valid 10-digit phone number.');
      return;
    }

    // If all validations pass
    //Alert.alert('Sign Up Successful', `Welcome, ${username}!`);
    router.push('/');
  };

  return (
    <View style={styles.container}>
      {/* Sign Up Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Sign up</Text>
        <View style={styles.subHeaderContainer}>
          <Text style={styles.subText}>
            Please fill the following fields.
          </Text>
        </View>
      </View>

      {/* SignUp Form Container */}
      <View style={styles.formContainer}>
        <Image
          source={require('../assets/Logo-White.png')} //use Logo
          style={styles.image}
        />

        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        
        <Text style={styles.label}>Re-Enter Password</Text>
        <TextInput
          style={styles.input}
          value={reEnterPass}
          onChangeText={setReEnterPass}
          secureTextEntry={true}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phoneNum}
          onChangeText={setPhoneNum}
          keyboardType="numeric" // Ensure only numeric input
        />
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
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
  headerContainer: {
    paddingTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: '#000000',
    paddingHorizontal: 20,
  },
  subHeaderContainer: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD95A',
    paddingTop: 10,
  },
  subText: {
    color: '#FFFFFF',
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: '#232323',
    padding: 20,
    alignItems: 'center',
    width: Dimensions.get('window').width,
    marginBottom: 20,
    marginTop: 75,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 12,
    marginBottom: 8,
    alignSelf: 'flex-start',
    width: '100%',
    marginLeft: 55,
  },
  input: {
    width: '70%',
    height: 40,
    borderColor: '#FFD95A',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: '#000000',
    backgroundColor: '#FFD95A',
  },
  button: {
    backgroundColor: '#FFD95A',
    paddingVertical: 10,
    paddingHorizontal: 70,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
