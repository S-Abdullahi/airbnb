import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './component/Nav'
import Hero from './component/Hero';
import Card from './component/Card';

//import css
import './style.css'

function App(){
  return (
    <>
      <Nav/>
      <Hero/>
      <section className='products-con'>
          <Card/>
      </section>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))