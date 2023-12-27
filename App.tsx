import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import React from 'react';
import theme from './src/theme';
import { RoutesIndex } from './src/routes';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })
  if (!fontsLoaded) {
    return (
      <Loading />
    )
  }
  return (
    <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#F5F5F5"    
        />
        <RoutesIndex />
    </ThemeProvider>
  );
}
