// RLFinancialV2/app/(auth)/_layout.tsx
import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false, title: '' }} />
      // Certifique-se que title: '' está aqui!
      {/* Adicione outras telas de autenticação aqui, se tiver, com headerShown: false */}
    </Stack>
  );
}
