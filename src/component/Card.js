import React from 'react'

export default function Card({img,rating,reviewCount, country, title, price, openSpot}){

    

    return (
        <div  className='product'>
            <img src={require(`../images/${img}`)} className='product__image'/>
            <div className='product__detail'>
                <img src={require("../images/star1.png")} className="product__star"/>
                <span className='product__rating'>{rating}</span>
                <span className='product__quantity'>({reviewCount})</span>
                <div className='dot'></div>
                <span className='product__country'>{country}</span>
            </div>
            <p className='product__description'>{title}</p>
            <span className='product__price'>From ${price} / <span className='person'>person</span></span>
            <span className='label' style={{display: openSpot == 0 ? 'block' : 'none'}}>sold out</span>
        </div>
    )
}