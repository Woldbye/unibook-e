import * as React from 'react';
import './App.css';
import theme from './Theme';
import Fonts from './components/Fonts';
import { ChakraProvider } from "@chakra-ui/react";
import UnibookRouter from './components/UnibookRouter';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts /> 
      <UnibookRouter />
    </ChakraProvider>
  );
}

export default App;
