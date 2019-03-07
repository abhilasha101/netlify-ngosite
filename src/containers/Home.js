import React, {Component} from 'react';

import Tabs from './Layouts/Tabs'
import Gridlist from './Layouts/Gridlist';
import  Typography from '@material-ui/core/Typography'

import '../Style.css';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Header from './Header'
import { borders } from '@material-ui/system';
import Window from './Layouts/Window';
import img1 from './images/d1.jpg';
import img2 from './images/d2.jpg';
import img3 from './images/d3.jpg';
import Footer from './Footer';

import { unstable_Box as Box } from '@material-ui/core/Box';

const Styles={
    section1:{
        padding:"60px",
      
      justify:"center",
      textAlign:"center",
      
      
    },
    root:{
        backgroundColor:"#0d47a1",
        alignSelf:"center",
        color:"white"

    },
    container:{
        justify:"center",
        marginLeft:"100px"
    }
}

const inner = (
    <Box
      bgcolor="background.paper"
      m={1}
      borderColor="text.primary"
      style={{ width: '5rem', height: '5rem' }}
    />
  );




class Home extends Component{
    constructor(props){
        super(props);

    
    }

    render(){
        return(
            <div>
               
               
               
               
               
               <div className="bgimag">
              
                <Header />
              
               
               <div className="bgimag">
               
          
               </div>
               <div  >
                    <Grid  container spacing={24}  style={Styles.section1}>              
                   <Grid item xs={12}> <Typography variant="h4"> our major causes</Typography> </Grid>
                   </Grid> 
             </div>
             
                <div>
                <Grid container spacing={24}  style={Styles.container}>
                 <Grid item xs={4} style={{padding:0}}> <Window img={img1}/></Grid>
                 <Grid item xs={4} style={{padding:0}}> <Window img={img2}/></Grid>
                 <Grid item xs={4} style={{padding:0}}> <Window img={img3}/></Grid>
                
                

                </Grid>
                </div>

               <Footer />
            </div>
            </div>
            
        )
    }
}

export default Home