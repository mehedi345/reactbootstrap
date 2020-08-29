import React from 'react';
import './App.css';

import Card from './components/News/News';
import Header from './components/Header/Header';
import Headline from './components/Headline/Headline';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Headline></Headline>
      <Card></Card>
    </div>
  );
}

export default App;
