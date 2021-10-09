import React from 'react'

import './image.css'


const Image = ({data}) => (
    <>
    <div className = "rowPictures">
        {data.map((data)=>(
                <div key = {data.ImageId}>
                    <img className = "imageRow" src={`${data.thumbnailUrl}`} alt={`${data.ImageId}`}/>
                </div>
                )
            )
        }

    </div>
    </>
)

export default Image