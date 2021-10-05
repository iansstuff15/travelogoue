import React from 'react';

import './customButton.css'

const CustomButton = ({Text, Type, gonextStep}) => {
    if(Type === "submit"){
        return(
            <>
                <input type={Type} className="Button" value={Text}/>
            </>
        )
    }else{
        return(
            <>
                <input type={Type} className="Button" value={Text} onClick = {(e) => gonextStep(e)}/>
            </>
        )
    }
}

export default  CustomButton