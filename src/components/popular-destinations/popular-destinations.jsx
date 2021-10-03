import React from 'react'

import './popular-destinations.css'

import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const PopularDestinations = () => (
    <>
        <div>
            <Card>
                <CardMedia
                component="img"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                San Francisco   
                 </Typography> 
                </CardContent>
            </Card>
        </div>
    </>
)

export default PopularDestinations