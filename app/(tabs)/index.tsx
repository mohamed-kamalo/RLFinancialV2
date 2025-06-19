// RLFinancialV2/app/(tabs)/index.tsx
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { theme } from '../../src/styles/theme'; // Importe seu tema

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.darkGreen} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Visão Geral</Text>
          <Text style={styles.subtitle}>Bem-vindo ao seu controle financeiro!</Text>

          {/* Card de Saldo Atual */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Saldo Atual</Text>
            <Text style={styles.balance}>R$ 5.240,00</Text>
          </View>

          {/* Card de Despesas do Mês */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Despesas do Mês</Text>
            <Text style={styles.expense}>- R$ 1.500,00</Text>
          </View>

          {/* Card de Receitas do Mês */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Receitas do Mês</Text>
            <Text style={styles.income}>+ R$ 2.000,00</Text>
          </View>

          {/* Gráfico Placeholder */}
          <View style={[styles.card, styles.chartPlaceholder]}>
            <Text style={styles.cardTitle}>Gráfico de Gastos (em breve!)</Text>
            <Text style={styles.chartText}>Aqui teremos um gráfico interativo de suas despesas.</Text>
          </View>

          {/* Botão de Adicionar Transação Rápida */}
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+ Adicionar Nova Transação</Text>
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
    paddingBottom: theme.spacing.xLarge, // Para dar um respiro no final
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
  card: {
    width: '90%',
    backgroundColor: theme.colors.tertiary, // Um verde mais claro para os cards
    borderRadius: 12,
    padding: theme.spacing.large,
    marginBottom: theme.spacing.medium,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: theme.fontSizes.large,
    color: theme.colors.textLight,
    marginBottom: theme.spacing.small,
    fontWeight: 'bold',
  },
  balance: {
    fontSize: theme.fontSizes.xLarge,
    color: theme.colors.primary, // Verde vibrante para saldo positivo
    fontWeight: 'bold',
  },
  expense: {
    fontSize: theme.fontSizes.xLarge,
    color: theme.colors.redAlert, // Vermelho para despesas
    fontWeight: 'bold',
  },
  income: {
    fontSize: theme.fontSizes.xLarge,
    color: theme.colors.primary, // Verde para receitas
    fontWeight: 'bold',
  },
  chartPlaceholder: {
    height: 200, // Altura para o placeholder do gráfico
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartText: {
    color: theme.colors.textMedium,
    fontSize: theme.fontSizes.small,
    marginTop: theme.spacing.small,
  },
  addButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.medium,
    paddingHorizontal: theme.spacing.large,
    borderRadius: 25,
    marginTop: theme.spacing.large,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  addButtonText: {
    color: 'white',
    fontSize: theme.fontSizes.large,
    fontWeight: 'bold',
  },
});
