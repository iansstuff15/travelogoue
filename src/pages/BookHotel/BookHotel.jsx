import React from 'react'
import { useLocation } from 'react-router-dom';
import './BookHotel.css'
import buildPic from '../../assets/Building.png';
import { useState,useEffect } from 'react';
import Image from '../../components/image/image';
import moonPic from '../../assets/moon.svg';
import bedPic from '../../assets/double-bed.svg';
import planePic from '../../assets/X-1.svg';
import utensilPic from '../../assets/mono-krecipes.svg';
import pinpointPic from '../../assets/MapMarker.svg';
import Reviewcomponent from '../../components/review/review';

const BookHotel = () => {
    const location = useLocation();
    const title = location.state.name;
    const price = location.state.price;
    const country = location.state.country;
    const original_price = location.state.original_price;
    const [imageURL, setImageURL]=useState(null)
    console.log(title);
    var axios = require("axios").default;

    useEffect(() => {
        var options = {
            method: 'GET',
            url: 'https://bing-image-search1.p.rapidapi.com/images/search',
            params: {q: title, count: '5'},
            headers: {
                'x-rapidapi-host': 'bing-image-search1.p.rapidapi.com',
                'x-rapidapi-key': 'cdda818cc5msh24cc3fee399d71bp16842djsnb1009062983d'
            }
            };

        axios.request(options).then( async function (response) {
            return response.data.value;
         }).catch(function (error) {
            console.error(error);
        }).then(
             data => {
                console.log(data)
                setImageURL(data)
             }
         )

    }, [axios, title])

    return(
    <>
        <div><img style = {{width: "100%", height: "30em"}} src = {buildPic} alt = "buildpic"/></div>
        <div className="holidayContainer">
            <div style = {{marginLeft: "10em"}}>
                <h1 style={{fontSize: "10em"}}>{title}</h1>
                <p style={{fontSize: "3em", color: "darkgrey"}}>{country}</p>
            </div>
            <div style={{alignSelf:"center", marginTop: "3em"}}>
                <div style ={{width: "30em"}}>
                    Rooms are bright and spacious and include private balconies

                    Enjoy a great location close to the pristines sandy beaches

                    0.8 km from nearest beach
                </div>
                <div className = "availability1">
                        <div className = "availability-left1">
                            <div className="availabilityComponent1">
                                <img className = "iconImages" src={bedPic} alt={bedPic}/>
                                <p>One apartment bedroom</p>
                            </div>
                            <div className="availabilityComponent1">
                                <img className = "iconImages" src={planePic} alt={planePic}/>
                                <p>Glasglow</p>
                            </div>
                                <div className="availabilityComponent1">
                                    <img className = "iconImages" src={moonPic} alt={moonPic}/>
                                    <p>Thu 11 Aug 2022 9 nights</p>
                            </div>

                        </div>

                        <div className = "availability-right1">
                            <div className="availabilityComponent1">
                                    <img className = "iconImages" src={utensilPic} alt={utensilPic}/>
                                    <p>self catering</p>
                            </div>
                            <div className="availabilityComponent1">
                                    <img className = "iconImages" style={{transform: "scaleX(-1)"}} src={planePic} alt={utensilPic}/>
                                    <p>Fartherdom</p>
                            </div>
                            <div className="availabilityComponent1">
                                <img className = "iconImages" src={pinpointPic} alt={pinpointPic}/>
                                    <p>0.8 km from nearest beach</p>
                            </div>

                        </div>

                </div>
            </div>
            <div className ="labelBookPriceButton1">
                            <p style={{color: "white", borderRadius: "10px", fontSize: "10px",padding: "10px", background: "green", height:"30px", alignSelf: "center"}}>book now for guranteed offer!</p>
                            <div style={{display: "flex", flexDirection: "row", columnGap: "2em"}}>
                                <div className = "priceLabel1">
                                    <p style={{fontSize:"48px", marginBottom: "-10px"}}>{price}</p>
                                    <p style ={{alignSelf:"flex-end", fontSize:"32px"}}>from {original_price}</p>
                                </div>
                                <input type="button" className="bookButton1" value="BOOK HERE"/>
                            </div>
                </div>

        </div>
        <div className = "rowPictures">
                {imageURL ? <Image data = {imageURL}/> : null}
        </div>

        <div className = "beachDescription">
            <div className = "LabelUB">
                <h2 style={{color: "#e79a4a"}}> UNWIND BY THE BEACH</h2>
                <h1 style={{color: "#ec7d0a"}}>BEACH AS A FAMILY</h1>
            </div>
            <div className="descUB">
                <div style={{display: "flex", flexDirection: "column",rowGap: "2em"}}>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod rutrum risus. Pellentesque non ullamcorper dui, 
                        sed lacinia elit. Curabitur rhoncus augue nunc, eu convallis velit fermentum vel. Vivamus non velit varius, tristique 
                        diam et, aliquam purus. Cras aliquam libero nec massa sollicitudin, quis pretium odio euismod. Cras blandit tristique nunc. 
                        Quisque nec mi magna. Cras dignissim metus sit amet justo hendrerit consequat. Vivamus vehicula, eros eu auctor dictum, 
                        libero nibh euismod magna, ut ornare risus augue nec erat.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod rutrum risus. Pellentesque non ullamcorper dui, sed lacinia 
                        elit. Curabitur rhoncus augue nunc, eu convallis velit fermentum vel. Vivamus non velit varius, tristique diam et, aliquam purus. 
                        Cras aliquam libero nec massa sollicitudin, quis pretium odio euismod. Cras blandit tristique nunc. Quisque nec mi magna. Cras 
                        dignissim metus sit amet justo hendrerit consequat. Vivamus vehicula, eros eu auctor dictum, libero nibh euismod magna, ut ornare 
                        risus augue nec erat.
                    </p>
                </div>

            </div>
        </div>

        <div className = "reviewSection">
            <div className = "reviewTitle">
                <h1 style={{fontSize: "3em"}}>REVIEWS</h1>
                <h4 style={{color: "black"}}>Tripadvisor</h4>
            </div>
            <div className="reviewList">
                <Reviewcomponent title="Relaxing" date="12 December 2021" user = "baloyski1" />
                <Reviewcomponent title="Comfortable" date="14 January 2021" user = "jenepary520" />
                <Reviewcomponent title="Amazing" date="22 March 2021" user = "userMyhappy42" />
            </div>
        </div>

    </>
    )
}

export default BookHotel;