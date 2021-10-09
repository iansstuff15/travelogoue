import React from 'react'
import Title from '../../components/title/title'

import './BookFlights.css'

import TextField from '@mui/material/TextField';
import QuestionHeader from '../../components/question-header/question-header';
const BookFlightsTwo = () => (
    <>
 <div className="half">
    <div className="content">
        <Title title="BOOK" subtitle="FLIGHTS"/>
       
        <div>
        <QuestionHeader Title="ARE YOU SOLOR OR" Subtitle="WITH COMPANY?"/>
        </div>
        <div >
        <TextField type="text" required color="warning" placeholder="who's coming?" style={{margin:"20px 20px 20px 0px"}}/>
        <TextField type="text" required color="warning" placeholder="are you with someone who requires special assistance?" style={{margin:"20px 20px 20px 0px"}} />
       
        <TextField type="text" required color="warning" placeholder="how many is coming?" style={{margin:"20px 20px 20px 0px"}}/>
        <TextField type="text" required color="warning" placeholder="what assistance do they require?" style={{margin:"20px 20px 20px 0px"}}/>
        </div>
    
    </div>
    <div>
        <img src={"https://afar-production.imgix.net/uploads/images/afar_post_headers/images/KVDiNpSrDG/original_shutterstock_143885179.jpg"} alt = "photo" className="image"/>
    </div>
    </div>
    </>
)




export default BookFlightsTwo