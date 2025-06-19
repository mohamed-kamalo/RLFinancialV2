# RL Financial App

Um aplicativo de controle financeiro pessoal construído com React Native e Expo.

## Visão Geral do Projeto

Este projeto visa criar uma ferramenta intuitiva para que os usuários possam gerenciar suas finanças, registrar gastos e receitas, e ter uma visão clara de sua saúde financeira.

## Status Atual (Semana 1)

✅ Configuração do ambiente de desenvolvimento React Native/Expo.
✅ Estrutura básica do projeto e navegação entre telas (`expo-router`).
✅ Tela de login com autenticação básica (usuário: `test`, senha: `123`).
✅ Navegação condicional baseada no estado de autenticação.
✅ Barra de abas (footer) funcional com ícones e nomes corretos.
⚠️ Cabeçalho nas telas principais (Home/Gastos) persiste, mas está vazio. (Problema será investigado futuramente).
⏳ Funcionalidade de Cadastro (próximo passo: integração com Firebase).

## Tecnologias Utilizadas

* **React Native**: Framework para construção de aplicativos móveis nativos.
* **Expo**: Conjunto de ferramentas para desenvolver, construir e implantar apps React Native.
* **Expo Router**: Roteamento baseado em arquivos para Expo.
* **@expo/vector-icons**: Ícones personalizáveis.
* **@react-navigation/bottom-tabs**: Componentes para navegação por abas.
* **MaterialCommunityIcons**: Coleção de ícones.
* **Firebase Authentication** (Futuramente): Para gerenciamento de usuários (cadastro, login).

## Como Configurar e Executar

Siga estes passos para configurar e rodar o projeto localmente:

### Pré-requisitos

* Node.js (LTS recomendado)
* npm (gerenciador de pacotes do Node.js)
* Expo Go app no seu dispositivo móvel (Android ou iOS)
* Conta no Firebase (para as próximas etapas de autenticação)

### Instalação

1.  **Clone o repositório:**
    ```bash
    # Se você já tem o projeto localmente, pule esta etapa.
    # Caso contrário, substitua [SEU_REPOSITORIO] pelo link do seu Git.
    # git clone [SEU_REPOSITORIO]
    # cd RLFinancialV2
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```

### Executando o Aplicativo

1.  **Inicie o servidor de desenvolvimento do Expo:**
    ```bash
    npm start
    ```
2.  **Abra o app:**
    * Escaneie o QR code exibido no terminal ou na janela do navegador com o aplicativo Expo Go no seu celular.
    * Ou use as opções fornecidas para abrir em um emulador Android/iOS.

## Próximos Passos

* Implementação da funcionalidade completa de cadastro com Firebase Authentication.
* Desenvolvimento das telas Home (`index.tsx`) e Gastos (`gastos.tsx`) com dados reais ou mockados.
* Implementação de funcionalidades de adicionar/editar/excluir transações.

## Contribuição

Contribuições são bem-vindas! Por favor, siga as boas práticas de Git (fork, branch, commit, pull request).

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE). Veja o arquivo `LICENSE` para mais detalhes.
