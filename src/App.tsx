import React from 'react';
import Header from './components/Header/Header';
import {BrowserRouter} from "react-router-dom";
import Todos from './components/Todos/Todos';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Todos/>
    </BrowserRouter>
  );
}

export default App;
