import React from 'react'

export default function (){
    return (
        <div  className='product'>
            <img src={require("../images/image12.png")} className='product__image'/>
            <div className='product__detail'>
                <img src={require("../images/star1.png")} className="product__star"/>
                <span className='product__rating'>5.0</span>
                <span className='product__quantity'>(6)</span>
                <div className='dot'></div>
                <span className='product__country'>USA</span>
            </div>
            <p className='product__description'>Life lessons with Katie Zaferes</p>
            <span className='product__price'>From $136 / <span className='person'>person</span></span>
            <span className='label'>sold out</span>
        </div>
    )
}