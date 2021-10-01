import React from 'react'
import ImageCarousel from '../../components/carousel/imagecarousel';



import NavButton from '../../components/NavigationButton/NavButton';
import Title from '../../components/title/title';

const Home = () => (
    <>
       
       
       <ImageCarousel/>
        <NavButton link = "/Destinations" name="GO OUT ON HOLIDAYS"/>
        <Title title="OUR MOST" subtitle ="POPULAR DESTINATIONs"/>
    </>
)

export default Home;