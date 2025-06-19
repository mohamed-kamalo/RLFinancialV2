// RLFinancialV2/app/(auth)/login.tsx
import React, { useState } from 'react'; // Adicione useState para os inputs
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native'; // Importe Alert para mensagens
import { useRouter } from 'expo-router'; // <--- IMPORTE useRouter AQUI!
import { useAuth } from '../../src/contexts/AuthContext'; // <--- IMPORTE useAuth AQUI!
import { theme } from '../../src/styles/theme';

export default function LoginScreen() {
  const router = useRouter(); // <--- INICIALIZE O HOOK DO ROUTER
  const { login } = useAuth(); // <--- OBTENHA A FUNÇÃO login DO NOSSO CONTEXTO

  const [username, setUsername] = useState(''); // Estado para o input de usuário
  const [password, setPassword] = useState(''); // Estado para o input de senha
  const [loading, setLoading] = useState(false); // Para desabilitar o botão enquanto loga

  // Função que será chamada ao pressionar o botão "Entrar"
  const handleLogin = async () => {
    setLoading(true); // Ativa o estado de loading
    try {
      const success = await login(username, password); // Chama a função de login do contexto
      if (success) {
        // O AuthContext já deve ter mudado o isAuthenticated para true.
        // O Expo Router, no app/_layout.tsx, deve reagir a isso.
        // Para garantir, podemos usar router.replace para "empurrar" a navegação.
        router.replace('/(tabs)'); // <--- NAVEGA PARA O GRUPO DE ABAS!
      } else {
        Alert.alert('Erro de Login', 'Usuário ou senha incorretos.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login.');
      console.error(error);
    } finally {
      setLoading(false); // Desativa o estado de loading
    }
  };

  // Função para o botão "Cadastrar" (apenas um placeholder por enquanto)
  const handleRegister = () => {
    Alert.alert('Cadastro', 'Funcionalidade de Cadastro em desenvolvimento!');
    // Futuramente: router.push('/(auth)/register');
  };

  // Função para o botão "Entrar com Google" (apenas um placeholder por enquanto)
  const handleGoogleLogin = () => {
    Alert.alert('Google Login', 'Integração com Google em desenvolvimento!');
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.darkGreen, // Cor de fundo do tema
      paddingHorizontal: theme.spacing.large,
    },
    logoPlaceholder: {
      fontSize: theme.fontSizes.xxLarge,
      fontWeight: 'bold',
      color: theme.colors.primary,
      marginBottom: theme.spacing.medium,
    },
    welcomeText: {
      fontSize: theme.fontSizes.large,
      color: theme.colors.textLight,
      marginBottom: theme.spacing.xLarge,
    },
    input: {
      width: '100%',
      height: 50,
      backgroundColor: theme.colors.almostBlack, // Fundo mais escuro para o input
      borderRadius: 8,
      paddingHorizontal: theme.spacing.medium,
      marginBottom: theme.spacing.medium,
      color: theme.colors.textLight,
      fontSize: theme.fontSizes.medium,
      borderWidth: 1,
      borderColor: theme.colors.tertiary, // Uma borda sutil
    },
    buttonPrimary: {
      width: '100%',
      height: 50,
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: theme.spacing.medium,
    },
    buttonSecondary: {
      width: '100%',
      height: 50,
      backgroundColor: theme.colors.secondary, // Um verde diferente
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: theme.spacing.medium,
    },
    buttonGoogle: {
      width: '100%',
      height: 50,
      backgroundColor: '#4285F4', // Cor do Google
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: theme.spacing.medium,
    },
    buttonText: {
      color: 'white',
      fontSize: theme.fontSizes.large,
      fontWeight: 'bold',
    },
    // Adicione outros estilos se você tiver mais componentes que os utilizem
  });
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.almostBlack} />
      <Text style={styles.logoPlaceholder}>RL FINANCIAL</Text>
      <Text style={styles.welcomeText}>Bem-vindo de volta!</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário ou E-mail"
        placeholderTextColor={theme.colors.textMedium}
        keyboardType="email-address"
        autoCapitalize="none"
        value={username}
        onChangeText={setUsername} // <--- ATUALIZE O ESTADO DO USERNAME
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor={theme.colors.textMedium}
        secureTextEntry
        value={password}
        onChangeText={setPassword} // <--- ATUALIZE O ESTADO DA SENHA
      />

      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={handleLogin} // <--- CHAME A FUNÇÃO DE LOGIN AQUI!
        disabled={loading} // <--- DESABILITA ENQUANTO ESTÁ LOGANDO
      >
        <Text style={styles.buttonText}>{loading ? 'Entrando...' : 'Entrar'}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={handleRegister}
        disabled={loading}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonGoogle}
        onPress={handleGoogleLogin}
        disabled={loading}
      >
        <Text style={styles.buttonText}>Entrar com Google</Text>
      </TouchableOpacity>
    </View>
  );
}
