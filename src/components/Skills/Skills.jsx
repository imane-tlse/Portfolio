import React from 'react'
import html from '../../images/html-5.png';
import css from '../../images/css-3.png';
import js from '../../images/js.png';
import py from '../../images/python.png';
import c from '../../images/c-removebg-preview.png';
import reactjs from '../../images/reactjs-removebg-preview.png';
import dj from '../../images/dj-removebg-preview.png';
import kivy from '../../images/kivy-removebg-preview.png';
import php from '../../images/php.png';
import r from '../../images/r-removebg-preview.png';
import figma from '../../images/figma.png';
import './skills.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed:500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className='skill-container' id="skills">
        <div className="skill-wrapper">
            <Slider {...settings}>
                {data.map((d)=>(
                    <div className="item-wrapper">
                        <img src={d} alt="skill"/>
                    </div>
                ))}
            </Slider>
        </div>      
    </div>
  )
}

const data = [html,css,js, py, c, reactjs, dj, kivy, php, r, figma]

export default Skills
