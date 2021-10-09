import React from 'react'
import { Link } from 'react-router-dom'



import './NavButton.css'

const NavButton = ({name,subname,link,url,alt}) => (
        <>
        <div className="container">    
                <Link to = {link} className="hello">
                        <div className="name">
                        <p>
                        {name}
                        </p>
                        <p className="subname">
                        {subname}
                        </p>
                       
                        </div>
                        <img src ={url} alt={alt} className="logo"/>
                </Link>
               
        </div>
        </>
)

export default NavButton