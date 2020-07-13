# Context API

Esse projeto serve como estudo do Context API do react e react-native

## Instalacao dos pacotes

yarn add @react-navigation/native

yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

Apenas para o ios -
npx pod-install ios

## Dentro do App ou index

Importar no primeiro campo:

> import 'react-native-gesture-handler';

## Para a navegacao

yarn add @react-navigation/stack

# Context API

Toda vez que colocamos as informacoes dentro do context.provider, tudo que estiver dentro do provedor terá acesso as informacoes contidas nele.

- O contexto pode assumir algumas regras de negócio da aplicacao.

- Aqui é informado que o tipo do createContext é o AuthContextData e o seu parametro é os dados da interface definida

Exemplo:

> const AuthContext = createContext<AuthContextData>({} as AuthContextData);

A chamada a api não está sendo feita no componente, apenas no contexto, sendo assim movendo a regra de negócio para um local mais adequado, pois o mesmo pode ser compartilhado a outros compoenentes.

# Envio do token pelo axios

api.defaults.headers['Authorization'] = `Bearer ${response.token}`;
Automaticamente em toda requisicao de login é enviado para o headers um token com a tag Authorization
