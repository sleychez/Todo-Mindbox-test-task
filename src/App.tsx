import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import Todos from './components/Todos/Todos';

const App:React.FC = () => {
  return (
      <BrowserRouter>
        <Navbar/>
        <Route exact path={'/'} component={Todos}/>
      </BrowserRouter>
  );
}

export default App;
