import React from 'react';

import './admin-countries.css'

import Title from '../../components/title/title';
import NavButton from '../../components/NavigationButton/NavButton';
import Navigation from '../../components/Navigation/Navigation';
const AdminCountries = () => (
    <>
        <div>
        <div className="content">
        

        <Title title="WELCOME TO" subtitle="/COUNTRIES"/>
        <span className="buttons-container">
        <NavButton name= "NAVIGATE TO" subname="NAMES" link= "./admin-names" url= "https://cdn-icons-png.flaticon.com/512/1828/1828486.png" alt="names logo"/>
        <NavButton name= "NAVIGATE TO" subname="PRICE" link= "./admin-price" url= "https://cdn-icons-png.flaticon.com/512/1/1437.png" alt="price logo"/>
        <NavButton name= "NAVIGATE TO" subname="COUNTRIES" link= "./admin-countries" url= "https://cdn-icons-png.flaticon.com/512/2947/2947674.png" alt="countries logo"/>
        </span>
        </div>
           
        </div>
        <div className="function-container">
        <div className="functions"> 
            <form>
            <h1>ENTER DATA DATA</h1>
            <input type ="text" className="input" placeholder="ID data here"/>
            <input type ="text" className="input" placeholder="Name data here"/>
            <input type ="text" className="input" placeholder="Country data here"/>
            <input type ="text" className="input" placeholder="URL data here"/>
            <input type ="text" className="input" placeholder="Price data here"/>
            <input type ="text" className="input" placeholder="Original price data here"/>
            <div>
            <input type ="submit" className="submit" value="ADD"/>
            <input type ="submit" className="submit" value="UPDATE"/>

            <button className="show-all">SHOW ALL</button>
            </div>
            </form>
        </div>
        </div>
    </> 
)

export default AdminCountries