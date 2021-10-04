import React from 'react';

import Title from '../../components/title/title';
import buildPic from '../../assets/Building.png';
import TextF from '../../components/booking/TextFieldCus';
import CustomButton from '../../components/customButton/customButton';
import './BookDestination.css';
const BookingDestination = () => (
    <>
    <div className = "travelForm">
        <Title title="GO OUT" subtitle="ON HOLIDAY"/>  
        <div className = "subtravelForm">
            
            <form>
            <p style={{fontSize: "24px"}}>Where exactly do you</p>
            <p style={{fontSize: "72px", marginBottom: "20px"}}>Wanna go?</p>
            <TextF name = "Where are you going?"/>
            <TextF name = "Where are you gonna come from?"/>
            <p style={{fontSize: "24px",marginTop: "25px"}}>What schedule do you</p>
            <p style={{fontSize: "72px" , marginBottom: "20px"}}>Wanna prefer?</p>
            <TextF name = "Is it a one way trip?"/>
            <TextF name = "Whn are you going?"/>
            
                <div style={{marginTop: "20px", marginLeft: "450px"}}>
                    <CustomButton Text = "Continue"/>
                </div>
            </form>        
            
        </div>
    </div>

    <img className="pic" src={buildPic} alt ="buildPic" />

    
   
    </>
)
export default BookingDestination