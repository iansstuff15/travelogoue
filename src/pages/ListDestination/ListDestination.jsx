import React,{useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import './ListDestination.css';
import Title from '../../components/title/title';
import '../../components/customButton/customButton';
import ResortList from '../../components/listComponent/listComponent';

const ListDestination = () => {
    const location = useLocation();
    const [number,setNumber] = useState(0);
    const searchLocationdata = location.state.tolocation;
    const [listResorts, setResorts] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:3001/Resort', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          })
        .then(res => res.json())
        .then(data=>{
            setResorts(data);
          
        })
    }, [])

    useEffect(()=>{
        setResorts(listResorts)
        console.log(listResorts)

    }, [listResorts])

    const retrieveList = () => {

        listResorts.map(resort=>(searchLocationdata===resort.country ?  setNumber(prev=>prev+1): null))
        return(
            
                listResorts.map(resort => {
                if(number>1) return searchLocationdata===resort.country ? <ResortList key = {resort.id} url = {resort.url} alt = {resort.url} name = {resort.name} country = {resort.country} price = {resort.price} original_price = {resort.original_price}/> : null;
                if(number===0) return <ResortList key = {resort.id} url = {resort.url} alt = {resort.url} name = {resort.name} country = {resort.country} price = {resort.price} original_price = {resort.original_price}/>
                return null;
                })
            
        )
        
    }
    
    return(
        <>
        <div className="viewport">
            <div className ="listContainer">
                <Title title ="MATCHES" subtitle ="FOUND"/>
                <div className = "filterTab">
                    <p style={{fontSize: "72px", color: "#FF6600"}}>Filters</p>
                    <p className ="filterCustom">Boards</p>
                    <p className ="filterCustom">Ratings</p>
                    <p className ="filterCustom">Type</p>
                    <p className ="filterCustom">Price</p>
                </div>

                <div className ="listResort">
                    {retrieveList()}
                </div>
            </div>
        </div>
        </>
    )
}
export default ListDestination
