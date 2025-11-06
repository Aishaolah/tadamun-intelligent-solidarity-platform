'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Reviews(){

    const review=[
        {
            msg:"For someone that is not very 'techy' like me, Donately made my job easy. It is extremely user and donor friendly.",
            name:"Sarah J.",
            from:"New York, USA"
        },
        {
            msg:"For someone that is not very 'techy' like me, Donately made my job easy. It is extremely user and donor friendly.",
            name:"Sarah J.",
            from:"New York, USA"
        },
        {
            msg:"For someone that is not very 'techy' like me, Donately made my job easy. It is extremely user and donor friendly.",
            name:"Sarah J.",
            from:"New York, USA"
        },
        {
            msg:"For someone that is not very 'techy' like me, Donately made my job easy. It is extremely user and donor friendly.",
            name:"Sarah J.",
            from:"New York, USA"
        },
        {
            msg:"For someone that is not very 'techy' like me, Donately made my job easy. It is extremely user and donor friendly.",
            name:"Sarah J.",
            from:"New York, USA"
        },
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