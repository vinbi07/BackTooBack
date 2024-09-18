import React from "react";
import { SafeAreaView } from "react-native";
import LoginScreen from "./components/LoginScreen"; // Import the LoginScreen component
import HeightInputScreen from "./components/HeightInputScreen";
import WeightInputScreen from "./components/WeightInputScreen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LoginScreen />
      {/*<HeightInputScreen />*/}
      {/*<WeightInputScreen />*/}
    </SafeAreaView>
  );
}
