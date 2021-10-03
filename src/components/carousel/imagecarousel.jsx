import React from 'react'

import data from './data'
import { Carousel } from 'react-carousel-minimal';




const ImageCarousel = () => {
    
      const captionStyle = {
        fontSize: '5em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }

    return(
    <div>
         <Carousel
            data={data}
            time={10000}
            width="100%"
            height="500px"
            captionStyle={captionStyle}
           
          
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
          
            style={{
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
    </div>
)
}
export default ImageCarousel