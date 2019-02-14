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
               <Appbar />
               <div>
               
               </div>
               
               <div className="bgimag">
               <Typography variant="display2" style={Styles.section1}  >
            GIVE A HELPING HAND TO THOSE WHO NEED IT 
          </Typography>
          <Button  style={Styles.root}variant="contained" size="large">DONATE </Button>
               </div>
               <Grid />

               <Tabs />
            </div>
        )
    }
}

export default Home