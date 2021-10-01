import React from 'react'
import { Link } from 'react-router-dom'

import './Navigation.scss'


const Navigation = ({name,link}) => (
   
        <div className="Text" >
            <Link to = {link}>{name}</Link>
        </div>
  
)

export default Navigation