import axios from 'axios';
import React from 'react';


class receipt extends React.Component {
    constructor(props) {
      super(props)
        this.state = {
          data: []
                }
        }
        componentDidMount(){
          axios.get('http://localhost/db/listreceipt.php').then(res => 
          {
          
          this.setState({data: res.data});
             }); 
          
          }  
  }

export default receipt;
