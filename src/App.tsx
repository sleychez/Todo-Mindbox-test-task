import React from 'react';
import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';

const App: React.FC = () => {
  return (
    <>
      <Header/>
      <Todos/>
    </>
  );
}

export default App;
