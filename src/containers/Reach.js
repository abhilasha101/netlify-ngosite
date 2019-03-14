import React ,{Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const Styles={
    section1:{
        backgroundColor:"#000a12",
        color:"white",
        padding:"100px"
    },

    section2:{
        align:"center",
        
        fontFamily:"default",
        fontSize:"smaller",

        marginLeft:"20px",
      
    } ,

    section3:{
        color:"grey",
    },
   
    section4:{
        backgroundColor:"#3f51b5",
        padding:"100px",
        color:"white",
        textAlign:"center",

    },

    section5:{
        backgroundColor:"#000a12",
        color:"white",

        paddingLeft:"30px",
        paddingRight:"30px",

        marginTop:"30px",
        marginRight:"10px"

    }
}

 class Reach extends Component{
     constructor(props){
         super(props);
     }


    render(){
        return(
        <div>  
            <Grid container spacing ={24}>
            <Grid item xs={12} style={Styles.section4}> <h1> Expierence How your Donation Can Reach </h1>
            <p style={Styles.section3}> he French Revolution constituted for the conscience of the dominant aristocratic class a fall from innocence, and upturning of the natural chain of events that resounded.</p>
             <div className="links"><Button variant="contained" style={Styles.section5}> make donation </Button> 
             <Button variant="contained" style={Styles.section5}> create fundraising  </Button> </div> </Grid>
             
             </Grid>
             </div>
        )
    }
} 
export default Reach;
 