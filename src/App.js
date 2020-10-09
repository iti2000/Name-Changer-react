import React from 'react';
import './App.css';
import Heading from './components/Heading';
import Name from './components/Name';
import Surname from './components/Surname';
import { MyContextProvider } from './context/MyContext';


function App() {
  return (
    <div className="App">
      <MyContextProvider>
      <Heading/>
      <Name/>
      <br/>
      <br/>
      <Surname/>
      </MyContextProvider>
    </div>
  );
}

export default App;
