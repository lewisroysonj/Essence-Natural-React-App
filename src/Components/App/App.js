import React from 'react';
import './App.css';
import Header from '../Header/header';
import Main from '../Main/Main';

export default class App extends React.Component {
  render() {
    
    return (
      <div className='app'>
        <Header />
        <Main />

      </div>
    ) 
  }
}




