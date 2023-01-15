import React from 'react'

export default function Hero(){
    return (
        <section>
            <div className='hero__image-con'>
                <img src={require('../images/Group77.png')} alt='hero group image' className='hero__image'/>

            </div>
            <h1 className='hero__title'>Online Experiences</h1>
            <p className='hero__description'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
            
        </section>
    )
}