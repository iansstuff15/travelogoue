import React from 'react';

import './admin-price.css'

import NavButton from '../../components/NavigationButton/NavButton'
import Title from '../../components/title/title'

const AdminPrice = () => (
    <>
        <div>
        <div className="content">
        

        <Title title="WELCOME TO" subtitle="/PRICE"/>
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
            <h1>ADD DATA</h1>
            <input type ="text" className="input" placeholder="enter data here"/>
            <input type ="submit" className="submit"/>
            </form>
        </div>
        <div className="functions"> 
            <form>
            <h1>DELETE DATA</h1>
            <input type ="text" className="input" placeholder="enter data here"/>
            <input type ="submit" className="submit"/>
            </form>
        </div>
        <div className="functions"> 
            <form>
            <h1>UPDATE DATA</h1>
            <input type ="text" className="input" placeholder="enter data here"/>
            <label>TO</label>
            <input type ="text" className="input" placeholder="enter data here"/>
            <input type ="submit" className="submit"/>
            </form>
        </div>

        <div className="functions">
            <button className="show-all">SHOW ALL</button>
        </div>
        </div>
    </> 
)

export default AdminPrice