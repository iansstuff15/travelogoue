import React from 'react'
import { Link } from 'react-router-dom'

import './Navigation.css'


const Navigation = ({name,link}) => (
   
        <div className="Link">
            <Link to = {link} >{name}</Link>
        </div>
  
)

export default Navigation