import React from 'react';

import './flight-card.css'

const FlightCard = ({goingTo, goingFrom, departure, arrival}) => (
    <>
        <div className="flight-container">
            <div style={{fontSize:"1.9em"}}>{goingTo} to {goingFrom}</div>
          
            <div className="gray-container">
                DEPARTURE 
                <div>{departure}</div>
                </div>
            <div className="gray-container">ARRIVAL 
            <div>
            {arrival}
            </div>
           </div>
            <div className="price" onClick={{}}>
                BOOK $10
            </div>
        </div>
    </>
)

export default FlightCard