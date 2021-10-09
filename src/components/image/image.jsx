import React from 'react'

import './image.css'

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const Image = ({data}) => (
    <>
    <div className="container">
     
        {data.map((data)=>(
            <div>
              
                {console.log(data)}
               
                <img src={`${data.thumbnailUrl}`} alt="place-image"/>
            </div>
            ))}
  
        
    
    </div>
    </>
)

export default Image