import React from 'react'

import axios from 'axios';
import './BookHotel.css'

import Carousel from 'react-carousel-minimal/dist/components/Carousel';

import { useState,useEffect } from 'react';
import Image from '../../components/image/image';
const BookHotel = ({place}) => {
    
    const [imageURL, setImageURL]=useState(null)

    

    var axios = require("axios").default;

    var options = {
    method: 'GET',
    url: 'https://bing-image-search1.p.rapidapi.com/images/search',
    params: {q: {place}, count: '10'},
    headers: {
        'x-rapidapi-host': 'bing-image-search1.p.rapidapi.com',
        'x-rapidapi-key': 'cdda818cc5msh24cc3fee399d71bp16842djsnb1009062983d'
    }
    };


    useEffect(() => {
        axios.request(options).then( async function (response) {
            return response.data.value;
         }).catch(function (error) {
            console.error(error);
        }).then(
             data => {
           
                 setImageURL(data)
               
             
             }
         )
    }, [])
    console.log("from state")
    console.log(imageURL)

    return(
    <>
        <div>
           {imageURL ? <Image data = {imageURL}/> : null}
        </div>
    </>
)}
export default BookHotel