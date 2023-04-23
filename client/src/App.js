import * as React from 'react';
import './App.css';
import theme from './Theme';
import Fonts from './components/Fonts';
import { ChakraProvider } from "@chakra-ui/react";
import Home from './pages/Home';
import NoPage from './pages/NoPage';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from './components/TopBar';
import Book from './pages/Book';
import Lokaler from './pages/Lokaler';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts /> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopBar boxWidth='100vw'/>}>
            <Route index element={<Home/>}/>
            <Route path="lokaler" element={<Lokaler/>}/>
            <Route path="book" element={<Book/>}/>  
            <Route path="*" element={<NoPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
