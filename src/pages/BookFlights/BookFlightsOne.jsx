import React from 'react'
import Title from '../../components/title/title'

import './BookFlights.css'

import TextField from '@mui/material/TextField';
import QuestionHeader from '../../components/question-header/question-header';

const BookFlightsOne = () => (
    <>
    <div className="half">
    <div className="content">
        <Title title="BOOK" subtitle="FLIGHTS"/>
       
        <div>
        <QuestionHeader Title="WHERE EXACTLY WHERE DO YOU" Subtitle="WANNA GO?"/>
        </div>
        <div >
        <TextField type="text" required color="warning" placeholder="where are you going" style={{margin:"20px 20px 20px 0px"}}/>
        <TextField type="text" required color="warning" placeholder="where are gonna come from" style={{margin:"20px 20px 20px 0px"}} />
        <div>
        <QuestionHeader Title="WHAT SCHEDULE" Subtitle="DO YOU PREFER?"/>
        </div>
        <TextField type="text" required color="warning" placeholder="is it a one way trip?" style={{margin:"20px 20px 20px 0px"}}/>
        <TextField type="text" required color="warning" placeholder="when are you going" style={{margin:"20px 20px 20px 0px"}}/>
        </div>
        
    </div>
    <div>
        <img src={"https://afar-production.imgix.net/uploads/images/afar_post_headers/images/KVDiNpSrDG/original_shutterstock_143885179.jpg"} alt = "photo" className="image"/>
    </div>
    </div>
    </>
)




export default BookFlightsOne