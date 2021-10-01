import React from 'react'

import Navigation from '../Navigation/Navigation'

import './Header.scss'

const Header = () => (
    <>
    <div className="Header" >
        <Navigation name = "Destinations" link = "/destinations" className="Link"/>
        <Navigation name = "Deals" link = "/deals" className="Link"/>
        <Navigation name = "Manage Bookings" link = "/bookings" className="Link"/>
        <Navigation name = "Profile" link = "/profile" className="Link"/>

    </div>
    </>
)

export default Header