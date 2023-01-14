import React from 'react'

export default function Hero(){
    return (
        <>
            <div className='hero__image-con'>
                <div className='hero__inner-image-con one'>
                    <img src={require("../images/image28.png")} alt='hero image'/>
                </div>
                <div className='hero__inner-image-con two'>
                    <img src={require("../images/image30.png")} alt='hero image'/>
                    <img src={require("../images/image26.png")} alt='hero image'/>
                </div>
                <div className='hero__inner-image-con three'>
                    <img src={require("../images/image27.png")} alt='hero image'/>
                    <img src={require("../images/image29.png")} alt='hero image'/>
                </div>
                <div className='hero__inner-image-con four'>
                    <img src={require("../images/image22.png")} alt='hero image'/>
                    <img src={require("../images/image23.png")} alt='hero image'/>
                </div>
                <div className='hero__inner-image-con five'>
                    <img src={require("../images/image25.png")} alt='hero image'/>
                    <img src={require("../images/image24.png")} alt='hero image'/>
                </div>
            </div>

            <h1 className='hero__title'>Online Experiences</h1>
            <p className='hero__description'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
        </>
    )
}