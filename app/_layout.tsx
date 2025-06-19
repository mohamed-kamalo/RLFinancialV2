// RLFinancialV2/app/_layout.tsx
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router'; // Removi 'Redirect' se não estiver usando
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import React from 'react'; // Mantive apenas React para clareza, pois useState/useEffect estão no AuthContext

import { View, Text } from 'react-native'; // Importe View e Text, pois estão sendo usados no `if (!loaded || isLoading)`

import { useColorScheme } from '@/hooks/useColorScheme';
import { AuthProvider, useAuth } from '../src/contexts/AuthContext';

function RootLayoutContent() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const { isAuthenticated, isLoading } = useAuth();

  if (!loaded || isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#354F46' }}>
        <Text style={{ color: 'white', fontSize: 20 }}>Carregando RL Financial...</Text>
      </View>
    );
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {isAuthenticated ? (
          <Stack.Screen name="(tabs)" options={{ headerShown: false, title: '' }} />
          // Certifique-se que title: '' está aqui!
        ) : (
          <Stack.Screen name="(auth)" options={{ headerShown: false, title: '' }} />
          // Certifique-se que title: '' está aqui!
        )}
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutContent />
    </AuthProvider>
  );
}
