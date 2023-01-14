import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './component/Nav'

//import css
import './style.css'

function App(){
  return (
    <>
      <Nav/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))