import React from 'react'

export default function Card(props){
    let badgeText
    if(props.item.openSpots === 0){
        badgeText = 'SOLD OUT'
    } else if(props.item.location === 'Online'){
        badgeText = 'ONLINE'
    }

    return (
        <div  className='product'>
            <img src={require(`../images/${props.item.coverImg}`)} className='product__image'/>
            <div className='product__detail'>
                <img src={require("../images/star1.png")} className="product__star"/>
                <span className='product__rating'>{props.item.stats.rating}</span>
                <span className='product__quantity'>({props.item.stats.reviewCount})</span>
                <div className='dot'></div>
                <span className='product__country'>{props.item.location}</span>
            </div>
            <p className='product__description'>{props.item.title}</p>
            <span className='product__price'>From ${props.item.price} / <span className='person'>person</span></span>
            {badgeText && <span className='label'>{badgeText}</span>}
            
        </div>
    )
}