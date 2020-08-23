import React, { useState, useEffect } from 'react';
import './Slider.scss';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import ImgComp from './ImgComp';

function Slider() {
    let sliderArr = [
        <ImgComp src='https://source.unsplash.com/1600x900/?nature' />,
        <ImgComp src='https://source.unsplash.com/1600x900/?water' />,
        <ImgComp src='https://source.unsplash.com/1600x900/?night' />,
        <ImgComp src='https://source.unsplash.com/1600x900/?city' />,
        <ImgComp src='https://source.unsplash.com/1600x900/?music' />,
    ];
    const [x, setX] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (x > -100 * (sliderArr.length - 1)) {
                setX((prevX) => prevX - 100);
            }

            if (x === -100 * (sliderArr.length - 1)) {
                setX(0);
            }
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [x, sliderArr.length]);

    const goLeft = (): void => {
        console.log('goLeft: ', x);
        x === 0
            ? setX(-100 * (sliderArr.length - 1))
            : setX((prevX) => prevX + 100);
    };

    const goRight = (): void => {
        console.log('goRight: ', x);
        x === -100 * (sliderArr.length - 1)
            ? setX(0)
            : setX((prevX) => prevX - 100);
    };

    return (
        <>
            <div className='slider'>
                {sliderArr.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className='slide'
                            style={{ transform: `translateX(${x}%)` }}>
                            {item}
                        </div>
                    );
                })}
                <BsArrowLeft id='goLeft' onClick={goLeft} />
                <BsArrowRight id='goRight' onClick={goRight} />
            </div>
        </>
    );
}

export default Slider;
