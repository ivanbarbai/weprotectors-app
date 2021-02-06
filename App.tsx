import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { ThemeProvider } from "styled-components/native";
import { lightTheme } from './src/styles/theme';

//screens
import LandingScreen from './src/screens/LandingScreen/LandingScreen'

export default function App() {
  return (

    <ThemeProvider theme={lightTheme}>
      <LandingScreen />
    </ThemeProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
