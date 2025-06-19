// RLFinancialV2/app/(tabs)/gastos.tsx (Este é o arquivo renomeado!)
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { theme } from '../../src/styles/theme';

export default function GastosScreen() { // O nome da função também pode ser renomeado para GastosScreen
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.darkGreen} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Minhas Transações</Text>
          <Text style={styles.subtitle}>Visualize e gerencie seus gastos e receitas.</Text>

          <View style={styles.transactionListPlaceholder}>
            <Text style={styles.listText}>Lista de Transações (em breve!)</Text>
            <Text style={styles.listTextSub}>Aqui aparecerão seus lançamentos detalhados.</Text>
            <Text style={styles.noTransactionsText}>Nenhuma transação registrada ainda.</Text>
          </View>

          <TouchableOpacity style={styles.fab}>
            <Text style={styles.fabText}>+</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.darkGreen,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: theme.spacing.xLarge,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.darkGreen,
  },
  title: {
    fontSize: theme.fontSizes.xxLarge,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginTop: theme.spacing.large,
    marginBottom: theme.spacing.small,
  },
  subtitle: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.textLight,
    marginBottom: theme.spacing.xLarge,
    textAlign: 'center',
  },
  transactionListPlaceholder: {
    width: '90%',
    backgroundColor: theme.colors.tertiary,
    borderRadius: 12,
    padding: theme.spacing.large,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 300,
    marginBottom: theme.spacing.medium,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  listText: {
    color: theme.colors.textLight,
    fontSize: theme.fontSizes.large,
    fontWeight: 'bold',
    marginBottom: theme.spacing.small,
  },
  listTextSub: {
    color: theme.colors.textMedium,
    fontSize: theme.fontSizes.medium,
    marginBottom: theme.spacing.medium,
  },
  noTransactionsText: {
    color: theme.colors.redAlert,
    fontSize: theme.fontSizes.small,
  },
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: theme.spacing.large,
    bottom: theme.spacing.large,
    backgroundColor: theme.colors.primary,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  fabText: {
    fontSize: theme.fontSizes.xxLarge,
    color: 'white',
    fontWeight: 'bold',
    lineHeight: 30,
  },
});
