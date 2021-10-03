import React from 'react';

import './customButton.css'

const CustomButton = ({Text}) => (
    <>
    <input type="submit" className="Button" value={Text}/>

    </>
)

export default  CustomButton