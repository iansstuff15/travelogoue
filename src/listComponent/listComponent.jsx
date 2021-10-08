import React from 'react';

import './listComponent.css';
import moonPic from '../../assets/moon.svg';
import bedPic from '../../assets/double-bed.svg';
import planePic from '../../assets/X-1.svg';
import utensilPic from '../../assets/mono-krecipes.svg';
import pinpointPic from '../../assets/MapMarker.svg';


const ListComponent = ({name, country, price, original_price, alt, url}) => {

    return(

        <>
                <div className="individualList">
                    <img className="picture" src={url} alt={alt}/>
                    <div className = "summaryResort">
                        <h1 >{name}</h1>
                        <p> {country}</p>
                        <div className = "availability">
                            <div className = "availability-left">
                                <div className="availabilityComponent">
                                    <img className = "iconImages" src={bedPic} alt={bedPic}/>
                                    <p>One apartment bedroom</p>
                                </div>
                                <div className="availabilityComponent">
                                    <img className = "iconImages" src={planePic} alt={planePic}/>
                                    <p>Glasglow</p>
                                </div>
                                <div className="availabilityComponent">
                                    <img className = "iconImages" src={moonPic} alt={moonPic}/>
                                    <p>Thu 11 Aug 2022 9 nights</p>
                                </div>

                            </div>

                            <div className = "availability-right">
                                <div className="availabilityComponent">
                                    <img className = "iconImages" src={utensilPic} alt={utensilPic}/>
                                    <p>self catering</p>
                                </div>
                                <div className="availabilityComponent">
                                    <img className = "iconImages" style={{transform: "scaleX(-1)"}} src={planePic} alt={utensilPic}/>
                                    <p>Fartherdom</p>
                                </div>
                                <div className="availabilityComponent">
                                    <img className = "iconImages" src={pinpointPic} alt={pinpointPic}/>
                                    <p>0.8 km from nearest beach</p>
                                </div>

                            </div>

                        </div>
                        <div className ="labelBookPriceButton">
                            <p style={{color: "white", borderRadius: "10px", fontSize: "10px",padding: "10px", background: "green", height:"20px"}}>book now for guranteed offer!</p>
                            <div className = "priceLabel">
                                <p style={{fontSize:"28px", marginBottom: "-10px"}}>{price}</p>
                                <p style ={{alignSelf:"flex-end", fontSize:"10px"}}>from {original_price}</p>
                            </div>
                            <input type="button" className="bookButton" value="BOOK HERE"/>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default ListComponent