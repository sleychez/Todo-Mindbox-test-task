import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import Todos from './components/Todos/Todos';
import About from './components/About/About';

const App:React.FC = () => {
  return (
      <BrowserRouter>
        <Navbar />

        <Route exact path={'/'} component={Todos}/>
        <Route path={'/about'} component={About}/>

      </BrowserRouter>
  );
}

export default App;
