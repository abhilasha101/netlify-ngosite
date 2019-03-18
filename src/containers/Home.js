import React, {Component} from 'react';


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
import Cards from "./Layouts/Cards";


import { unstable_Box as Box } from '@material-ui/core/Box';
import Divhover from './Layouts/Divhover';
import Reach from './Reach'

const Styles={
    section1:{
        padding:"100px",
      
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
    },
    section2:{
        color:"grey",

        marginBottom:"10px",
        marginTop:"10px"
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
               
          
               </div>
               <div>
                   <Divhover />
                   </div>
               <div  >
                    <Grid  container spacing={24}  style={Styles.section1}>              
                   <Grid item xs={12}> <Typography variant="h4"> our major causes</Typography>
                   <p> hif hdhu jishui hduhruh uiiffiuvguif uiihsduih

                   </p>
                    </Grid>
                   
                   </Grid> 
               </div>
              
                <div>
                    <Grid container spacing={24}> 
                    <Grid item xs={12} lg={4} sm={12} md={4} align="center" style={{marginBottom:30}}> <Window  img={img1}/> </Grid>
                    <Grid item xs={12} lg={4} sm={12} md={4}  align="center"> <Window  img={img2}/> </Grid>
                    <Grid item xs={12} lg={4} sm={12} md={4}  align="center"> <Window  img={img3}/> </Grid>
                    </Grid>
                </div>
                <div  >
                    <Grid container spacing={24} align="center"> 
                    <Grid xs item={12} style={{padding:100}}> <h1 style={{marginTop:50}}> Support a Campaign or A fundraiser</h1>
                     <p style={Styles.section2}> The French Revolution constituted for the conscience of the dominant aristocratic class a </p>
                      <p style={Styles.section2}> fall from innocence the natural chain of events. </p>

                     </Grid>

                    </Grid>


                    <Grid container spacing={24} style={{marginTop:100}}>
                    <Grid item xs={12} lg={6} sm={12} md={6} align="right"> <Cards /> </Grid>
                    <Grid item xs={12} lg={6} sm={12} md={6} align="left"> <Cards /> </Grid>
                    </Grid>

                     <Grid container spacing={24}>
                    <Grid item xs={12} lg={6} sm={12} md={6} align="right"> <Cards /> </Grid>
                    <Grid item xs={12} lg={6} sm={12} md={6}  align="left"> <Cards /> </Grid>
                    </Grid>
                    
                    <Grid container spacing={24}  style={{marginBottom:100}}>
                    <Grid item xs={12}  lg={6} sm={12} md={6}align="right" > <Cards /> </Grid>
                    <Grid item xs={12} lg={6} sm={12} md={6} align="left"> <Cards /> </Grid>
                    </Grid>
                    

                </div>
               
               <div>
                   <Reach />
               <Footer />
               </div>
            </div>
            
            
        )
    }
}

export default Home