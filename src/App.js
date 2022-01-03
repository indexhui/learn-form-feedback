import React from 'react';
import {
  ChakraProvider,
  Flex,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import FormBox from './components/FormBox';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex bg="gray.100" minH="100vh" align="center" justify="center">
        <FormBox />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
