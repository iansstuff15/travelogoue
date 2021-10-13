import React, {useState, useEffect} from 'react';
import './admin-names.css';
import api from './axiosAPI';
import Title from '../../components/title/title';

const AdminNames = () => {
    const [list, setList] = useState([]);
    const [data, setData] = useState({id:"" , name:"", country:"", url:"", price:"", original_price:""});


    const addList = async () => {
        const response = await api.post("/Resort", data)
        setList([...list, response.data])
    }

    const deleteResort = async(id)=>{
        await api.delete('/Resort/'+[id])
        const newList = list.filter(list => list.id !== id)
        setList(newList);
    }

    const updateList = async (id) => {

        const response = await api.put('/Resort/'+[id], data)
        setList(list.map(resort => {
                return resort.id === id ? {...response.data} : resort;
            }
        ))
    }

    const settingData = prop => (e) =>{
        e.preventDefault();
        if(prop === 'id')
            setData({...data, [prop]: parseInt(e.target.value)})
        else{
            setData({...data, [prop]: e.target.value})
        }
    }

    useEffect(()=>{
        
        const retrieveList = async () => {
            const response = await api.get("/Resort");
            return response.data;
        };

        const getList = async () =>{
            const allList = await retrieveList();
            if(allList) setList(allList);
        }

        getList();
    }, []);

    console.log(data)
    return(
        <>
            <div>
                <div className="content">
                

                <Title title="WELCOME TO" subtitle="/ADMIN DATABASE FOR FLIGHTS"/>
                <span className="buttons-container">
                    
                    <table border = "1">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Country</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Original Price</th>
                            </tr>
                        </thead>
                        <tbody>
                    {list.map(resort => {
                        return (
                            <tr key = {resort.id}>
                                <td>{resort.id}</td>
                                <td>{resort.name}</td>
                                <td>{resort.country}</td>
                                <td><img style ={{width: "20px", height: "20opx"}} src = {resort.url} alt = "error"/></td>
                                <td>{resort.price}</td>
                                <td>{resort.original_price}</td>
                                <td><button style={{width: "60px", height:"20px"}}id = {resort.id} onClick={() => deleteResort(resort.id)}>Delete</button></td>
                            </tr>

                        )
                    })}
                        </tbody>
                    </table>
                </span>
                </div>
                
                </div>
                <div className="function-container">
                <div className="functions"> 
                    <form>
                    <h1>ENTER DATA DATA</h1>
                    <input id = "id" type ="text" className="input" placeholder="ID data here" onChange={settingData('id')}/>
                    <input id = "name" type ="text" className="input" placeholder="Name data here" onChange={settingData('name')}/>
                    <input id = "country" type ="text" className="input" placeholder="Country data here" onChange={settingData('country')}/>
                    <input id = "url" type ="text" className="input" placeholder="URL data here" onChange={settingData('url')}/>
                    <input id = "price" type ="text" className="input" placeholder="Price data here" onChange={settingData('price')}/>
                    <input id = "orig_price" type ="text" className="input" placeholder="Original price data here" onChange={settingData('original_price')}/>
                    <div>
                    <input style ={{marginLeft: "1%", marginRight: "5%"}}type ="submit" className="submit" value="ADD" onClick={addList}/>
                    <input type ="submit" className="submit" value="UPDATE" onClick={()=>updateList(data.id)}/>
                    </div>
                    </form>
                </div>

            </div>
        </> 
    )
}

export default AdminNames