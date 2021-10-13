import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Title from '../../components/title/title';
import './admin.css'

const Admin = () => {
    const history = useHistory();
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    onsubmit = () =>
    {
        if(login === "hello" && password === "world"){
            history.push('/admin-names');
        }

    }
    return( 
        <>
        
            <div className="content">
        
            <Title title="WELCOME" subtitle="ADMIN!"/>
            <form onsubmit={onsubmit}>
            <input id = "id" type ="text" className="input" placeholder="Login here" onChange={(e)=>setLogin(e.target.value)}/>
            <input id = "name" type ="text" className="input" placeholder="Password here" onChange={(e)=>setPassword(e.target.value)}/>
            <input type ="submit" className="submit" value="Login"/>
            </form>
            </div>
        </>
    )
}

export default Admin