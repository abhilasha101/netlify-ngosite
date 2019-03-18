import React, {Component} from 'react';
import Header from './Header';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import img6 from "./images/about1.jpg"
import { fontFamily } from '@material-ui/system/typography';
import Footer from "./Footer";
import Paper from "@material-ui/core/Paper"

const Styles={
    section:{
        height:"500px",
        width:"1600px",
        padding:"50px",
        marginTop:250,
        marginBottom:100,
        marginLeft:30
    },
    image :{
        height:900,
        width:1900

    },
    para:{
        fontSize:30,
        align:"center",
        marginLeft:"20",
        fontFamily:"Palatino",

        

    },

    
 div1 : {
    marginTop: '250px',
    marginBottom:"100px",
   
    minWidth: '60px',
    maxWidth: '900px',
  
  
    backgroundColor: 'white',
    border: '0px solid #ff6550',
    borderRadius: '15px 15px 15px 15px',
    boxShadow: '4px 2px 16px 4px rgba(138,134,134,0.75)',
    
    
    
    marginLeft: 50,
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft:60,
    paddingRight: 60, 
  }
}


class Aboutus extends Component{
    constructor(props){
        super(props);

    }



    render(){
        return(
            <div>
                <Header />
                <div>
                     <Grid container spacing={24} >
                    <Grid item xs={12}  lg={6} sm={12} md={6}>  
                     
                    
                     <div style={Styles.div1}>
                     <h1  style={{padding:30}}> About Us </h1>
                     
                    
                     
                     <p style={Styles.para}> Lorem Ipsum is simply dummy text of the printing and typesetting
                         industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type specimen
                           book. It has survived not only five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                             the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
                             with desktop publishing software like Aldus PageMaker including versions of Lorem
                              Ipsum </p>
                     </div>
                     </Grid>
                     </Grid>
                      

                    </div>
                    <div>
                        <Footer />
                        </div>
                   
               </div>
        )
    }
}

export default Aboutus;
