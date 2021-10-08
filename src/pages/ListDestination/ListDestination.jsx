import React from 'react';
//import {useLocation} from 'react-router-dom';

import './ListDestination.css';
import Title from '../../components/title/title';
import '../../components/customButton/customButton';
import ResortList from '../../components/listComponent/listComponent';
import sResortpic from '../../assets/spanish_resort.jpeg';
import bVillapic from '../../assets/britain_villa.jpeg';
import jSpapic from '../../assets/japan_spa.jpeg';
import buildPic from '../../assets/Building.png';
const ListDestination = () => {
    //const location = useLocation();
    //{location.state.update}
    return(

        <>
        <div className ="listContainer">
            <Title title ="MATCHES" subtitle ="FOUND"/>
            <div className = "filterTab">
                <p style={{fontSize: "72px", color: "#FF6600"}}>Filters</p>
                <p className ="filterCustom">Boards</p>
                <p className ="filterCustom">Ratings</p>
                <p className ="filterCustom">Type</p>
                <p className ="filterCustom">Price</p>
            </div>
            <div className ="listResort">
                <ResortList url = {buildPic} alt = {buildPic} name = "Manila Hotel" country = "Philippines" price = "$400" original_price ="$800"/>
                <ResortList url = {sResortpic} alt = {sResortpic} name = "Spanish Resort" country = "Spain" price = "$500" original_price ="$1000"/>
                <ResortList url = {bVillapic} alt = {bVillapic} name = "Britain Villia" country = "UAE" price = "$800" original_price ="$1200"/>
                <ResortList url = {jSpapic} alt = {jSpapic} name = "Japan Spa" country = "Japan" price = "$500" original_price ="$900"/>
            </div>
        </div>
        </>
    )
}
export default ListDestination