import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './component/Nav'
import Hero from './component/Hero';

//import css
import './style.css'

function App(){
  return (
    <>
      <Nav/>
      <Hero/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))