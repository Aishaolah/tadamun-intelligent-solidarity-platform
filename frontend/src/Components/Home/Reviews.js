'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Reviews(){

    const review=[
        {
            msg:"Tadamun helped our neighborhood raise funds quickly and transparently — updates were clear and reliable.",
            name:"Amina B.",
            from:"Algiers, Algeria"
        },
        {
            msg:"The platform is simple to use and made it easy for donors to support local families in need.",
            name:"Rachid L.",
            from:"Oran, Algeria"
        },
        {
            msg:"Campaign management and communication were excellent — supporters received timely progress reports.",
            name:"Noura H.",
            from:"Constantine, Algeria"
        },
        {
            msg:"A trustworthy place to share a story and get help for urgent family needs.",
            name:"Karim S.",
            from:"Annaba, Algeria"
        }
    ]

    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    };

    return (

        <div className='w-3/4 m-auto'>
        <div className='mt-20'>
        <Slider {...settings}>
        {review.map((d)=>(
            <div className='w-3/4 m-auto text-center flex flex-col items-center gap-4 mb-20'>
                <h1 className='text-7xl'>"</h1>
                <div>
                    <p>{d.msg}</p>
                    <h3>{d.name}</h3>
                    <h4>{d.from}</h4>
                </div>
            </div>
        ))}
        </Slider>
        </div>
        </div>

    )
}

export default Reviews