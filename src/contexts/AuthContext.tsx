// RLFinancialV2/src/contexts/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean; // <--- ADICIONE ESTA LINHA!
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Já existe

  useEffect(() => {
    const checkAuthStatus = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsAuthenticated(false); // Mude para `true` para testar o login no app
      setIsLoading(false);
    };
    checkAuthStatus();
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (username === 'test' && password === '123') {
      setIsAuthenticated(true);
      setIsLoading(false);
      return true;
    }
    setIsAuthenticated(false);
    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#354F46' }}>
        <ActivityIndicator size="large" color="#23CF93" />
        <Text style={{ color: 'white', fontSize: 24, marginTop: 16 }}>Carregando RL Financial...</Text>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}> {/* <--- ADICIONE isLoading AQUI TAMBÉM! */}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
