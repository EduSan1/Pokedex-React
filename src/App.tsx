import React from 'react';
import Body from './components/Body';
import Header from './components/Header';
import './styles/App.css';

function App() {
  
  return (
    <div className="App">
      <div className="header">
         <Header/>
      </div>
      <div className="body">
          <Body/>
      </div>
    </div>
  );
}

export default App;
