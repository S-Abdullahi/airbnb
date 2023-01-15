import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client'
import Nav from './component/Nav'
import Hero from './component/Hero';
import Card from './component/Card';
import Datas from './Data'

//import css
import './style.css'

function App(){
  
  return (
    <>
      <Nav/>
      <Hero/>
      <section className='products-con'>
          {Datas.map((data)=>{
            return <Card 
                  key = {data.id}
                  item = {data}
                  // img={data.coverImg}
                  // rating={data.stats.rating.toFixed(1)} reviewCount={data.stats.reviewCount} 
                  // location={data.location} 
                  // title={data.title} 
                  // price={data.price}
                  // openSpot={data.openSpots}
                  />
          })}
      </section>
    </>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)