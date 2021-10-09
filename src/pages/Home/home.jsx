import React from 'react'
import ImageCarousel from '../../components/carousel/imagecarousel';

import './home.css'

import NavButton from '../../components/NavigationButton/NavButton';
import Title from '../../components/title/title';

import PopularDestinations from '../../components/popular-destinations/popular-destinations';

import umbrella from '../../assets/sun-umbrella.svg'
import plane from '../../assets/plane.svg'
import BookHotel from '../BookHotel/BookHotel';


const Home = () => (
    <>
       
       
       <ImageCarousel/>
       
       <div className = "content">
            <span className="cta">
          
            <NavButton link = "/Destinations" name="BOOK" subname="FLIGHTS" alt = "Holiday logo" url={plane} />
            <NavButton link = "/Destinations" name="GO OUT ON" subname="HOLIDAYS" alt = "Holiday logo" url={umbrella} />

            </span>
           <Title title="OUR MOST" subtitle="POPULAR DESTINATIONS"/>
           <PopularDestinations/>
       </div>
    </>
)

export default Home;