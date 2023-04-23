import * as React from 'react';
import './App.css';
import theme from './Theme';
import Fonts from './components/Fonts';
import { ChakraProvider } from "@chakra-ui/react";
import Frontpage from './pages/Frontpage';

function App() {
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/`)
      .then(res => res.text())
      .then(message => setMessage(message));
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Fonts /> 
      <Frontpage></Frontpage>
    </ChakraProvider>
  );
}

export default App;
