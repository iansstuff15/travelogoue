import React from 'react';

import Navigation from '../../components/Navigation/Navigation';
import NavButton from '../../components/NavigationButton/NavButton';
import Title from '../../components/title/title';
import './admin.css'

const Admin = () => (
    <>
      
        <div className="content">
       

         <Title title="WELCOME" subtitle="ADMIN!"/>
         <span className="buttons-container">
        <NavButton name= "NAVIGATE TO" subname="NAMES" link= "./admin-names" url= "https://cdn-icons-png.flaticon.com/512/1828/1828486.png" alt="names logo"/>
        <NavButton name= "NAVIGATE TO" subname="PRICE" link= "./admin-price" url= "https://cdn-icons-png.flaticon.com/512/1/1437.png" alt="price logo"/>
        <NavButton name= "NAVIGATE TO" subname="COUNTRIES" link= "./admin-countries" url= "https://cdn-icons-png.flaticon.com/512/2947/2947674.png" alt="countries logo"/>
        </span>
        </div>
    </>
)

export default Admin