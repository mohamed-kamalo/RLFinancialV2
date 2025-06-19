// RLFinancialV2/app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

// Importamos nossos ícones do MaterialCommunityIcons
import { MaterialCommunityIcons } from '@expo/vector-icons';
// Importamos nosso tema personalizado!
import { theme } from '../../src/styles/theme';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textMedium,
        // *** IMPORTANTE PARA O CABEÇALHO ***
        headerShown: false, // Mantenha isso para tentar esconder o cabeçalho
        title: '', // Mantenha isso para garantir que o texto do cabeçalho seja vazio
        // **********************************
        tabBarStyle: {
          backgroundColor: theme.colors.almostBlack,
          borderTopWidth: 0,
          height: Platform.OS === 'ios' ? 90 : 60,
        },
        tabBarLabelStyle: {
            fontSize: theme.fontSizes.small,
            marginBottom: Platform.OS === 'ios' ? -5 : 0,
        },
      }}
    >
      <Tabs.Screen
        name="index" // Corresponde a app/(tabs)/index.tsx
        options={{
          // *** CABEÇALHO E ABAS INDIVIDUAIS ***
          headerShown: false,    // Mantenha para ser explícito nesta tela
          title: '',             // Mantenha para garantir que o texto do cabeçalho seja vazio (se ele aparecer)
          tabBarLabel: 'Home',   // <--- CORREÇÃO AQUI: Define o texto do botão da aba!
          // ***********************************
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-account" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="gastos" // Corresponde a app/(tabs)/gastos.tsx
        options={{
          // *** CABEÇALHO E ABAS INDIVIDUAIS ***
          headerShown: false,    // Mantenha para ser explícito nesta tela
          title: '',             // Mantenha para garantir que o texto do cabeçalho seja vazio (se ele aparecer)
          tabBarLabel: 'Gastos', // <--- CORREÇÃO AQUI: Define o texto do botão da aba!
          // ***********************************
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="currency-usd" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
