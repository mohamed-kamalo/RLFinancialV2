// src/styles/theme.ts

export const colors = {
  primary: '#23CF93',         // Verde vibrante - para destaque, botões
  secondary: '#37A47E',       // Verde intermediário - para links, bordas
  tertiary: '#3D7A64',        // Verde mais escuro - para fundos de seções ou bordas
  darkGreen: '#354F46',       // Verde escuro profundo - fundo principal do app
  almostBlack: '#2B3330',     // Quase preto - fundo mais escuro, pode ser para elementos específicos

  textLight: '#f0f0f0',       // Texto claro em fundo escuro
  textMedium: '#c0c0c0',      // Texto médio para informações secundárias
  redAlert: '#FF4D4D',        // Vermelho para mensagens de erro, destaque negativo
};

// Aqui vamos definir tamanhos de espaçamento, que são ótimos para consistência
export const spacing = {
  tiny: 4,
  small: 8,
  medium: 16,
  large: 24,
  xLarge: 32,
  xxLarge: 48,
};

// E também tamanhos de fontes, para manter a consistência da tipografia
export const fontSizes = {
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

// Por enquanto, vamos deixar a fonte padrão do sistema.
// Adicionar Raleway é um passo um pouco mais adiante, que envolve
// baixar o arquivo da fonte e configurá-lo no Expo. Mas já deixamos o placeholder!
export const fonts = {
  regular: 'System', // Placeholder: será 'Raleway-Regular' quando configurado
  medium: 'System',  // Placeholder: será 'Raleway-Medium'
  bold: 'System',    // Placeholder: será 'Raleway-Bold'
};


// Exporta um objeto tema completo para facilitar a importação
export const theme = {
  colors,
  spacing,
  fontSizes,
  fonts,
};
