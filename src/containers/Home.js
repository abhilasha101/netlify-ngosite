import React, {Component} from 'react';
import  Particle from './Layouts/Particle';
import Appbar from './Layouts/Appbar'
import Tabs from './Layouts/Tabs'
import Gridlist from './Layouts/Gridlist';
import  Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red';
import '../Style.css';
import Grid from './Layouts/Grid';
import Button from '@material-ui/core/Button';
import Header from './Header'

const Styles={
    section1:{
      color:"white",
      justify:"center",
      textAlign:"center",
      
    },
    root:{
        backgroundColor:"#0d47a1",
        alignSelf:"center",
        color:"white"

    }
}




class Home extends Component{
    constructor(props){
        super(props);

    
    }

    render(){
        return(
            <div>
                <Header />
              
               
               <div className="bgimag">
               
          
               </div>
               

               <Tabs />
            </div>
        )
    }
}

export default Home