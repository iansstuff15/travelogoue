import React from 'react';
import {useLocation} from 'react-router-dom';

import './ListDestination.css';



const ListDestination = () => {
    const location = useLocation();


    return(

        <>
        <div style={{padding: "200px"}}> {location.state.update}</div>
        </>
    )
}
export default ListDestination