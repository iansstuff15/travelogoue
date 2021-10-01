import React from 'react'
import { Link } from 'react-router-dom'

import './NavButton.scss'

const NavButton = ({name,link}) => (
 
        <Link to = {link} className="Link">{name}</Link>
    
)

export default NavButton