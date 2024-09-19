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

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter(); //Initialize router

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      Alert.alert('Login Successful', `Welcome, ${username}!`);
      router.push('/loginSuccess');
    } else {
      Alert.alert('Login Failed', 'Invalid username or password.');
    }
  };

  const handleForgotPassword = () => {
    Alert.alert('Forgot Password', 'Reset password link has been sent.');
  };

  const handleSignUp = () => {
    router.push('/SignUpScreen');
  };

  return (
    <View style={styles.container}>
      {/* Login Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.subHeaderContainer}>
          <Text style={styles.subTitle}>Welcome</Text>
          <Text style={styles.subText}>
            Experience the power of{'\n'}Back-to-Back Excellence
          </Text>
        </View>
      </View>

      {/* Login Form Container */}
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

        {/* Forgot Password */}
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/*Sign Up*/}
      <View style={styles.signUpContainer}>
        <Text style={styles.subText}>
          Don't have an account?
          <Text style={styles.signUp} onPress={handleSignUp}>
            {' '}
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    backgroundColor: '#000000',
  },
  headerContainer: {
    paddingTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    position: 'absolute', // Position header at the top
    top: 0,
    width: '100%',
    backgroundColor: '#000000',
    paddingHorizontal: 20, // Padding on the sides
  },
  subHeaderContainer: {
    alignItems: 'center',
    width: '100%', // Full width
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD95A',
  },
  subTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 10,
  },
  subText: {
    color: '#FFFFFF',
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: '#232323', // Dark grey background for the container
    padding: 20,
    alignItems: 'center',
    width: Dimensions.get('window').width, // Container width to be 90% of viewport width
    marginBottom: 20, // Space below the form container
    marginTop: 100, // Space above the form container to avoid overlap with header
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 8,
    alignSelf: 'flex-start', // Align labels to the left
    width: '100%', // Full width to align with the inputs
    marginLeft: 55,
  },
  input: {
    width: '70%',
    height: 40, // Smaller input fields
    borderColor: '#FFD95A',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: '#000000',
    backgroundColor: '#FFD95A', // Grey background for the input fields
  },
  forgotPassword: {
    color: '#FFD95A',
    marginTop: 5,
    textDecorationLine: 'underline',
    alignSelf: 'flex-end', // Align "Forgot Password" to the right
    paddingLeft: 150,
  },
  signUp: {
    color: '#FFD95A',
    paddingTop: 5,
    textDecorationLine: 'underline',
  },
  signUpContainer: {
    paddingTop: 5,
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
