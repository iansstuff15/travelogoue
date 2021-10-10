import React from 'react'

import './flights.css'

import Inclusions from '../../components/inclusions/inclusions'
import EssentialInfo from '../../components/essential information/essential-info'
import FlightCard from '../../components/flight-card/flight-card'

const Flights = () => (
    <>
    <div className="flights-container">
    <div style={{alignContent:"center"}}>
    <FlightCard goingTo="Manila" goingFrom="New York" departure="01-01-2022" arrival="01-04-2022"/>
    </div>

    <Inclusions/>
    <EssentialInfo/>
    </div>
    </>
)

export default Flights