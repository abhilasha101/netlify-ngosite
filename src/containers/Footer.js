import React ,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import color from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import '../Style.css';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';



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




class Footer extends Component{
    constructor(props){
        super(props);
       this.state= {
         email:"",
         
         
         
        }
 }


 handleChangeEmail=(e)=>{
     let email=e.target.value
     this.setState({email})

 }

 handleClickButton=(e)=>{
     let email=this.state.email
 }

    render(){
        return(
          <div>  
            
           <div>
                 <Grid container spacing={24} style={Styles.section1} > 
                 <Grid item xs={4} style={Styles.section2} > <h3 style={{marginBottom:"10px"}}>About us</h3> 
                  <p style={Styles.section3}>Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills</p> </Grid>
                 
                 
                 
                 <Grid item xs={4} style={Styles.section2}>
                  <h3> Newsletter </h3>
                  <div>
                      <form onSubmit={e=>{this.handleClickButton(e)}} >
                      <FormControl margin="normal" required fullWidth>
                       <InputLabel htmlFor="email">Email address </InputLabel>
                       <Input style={Styles.section3}
                       id="email" 
                       name="email" 
                       autoComplete="email" 
                       type="email" 
                      
                       onChange={e=>{this.handleChangeEmail(e)}}

                      
                       autoFocus  />
                       </FormControl>
                        <Button
                       
                       
                       variant="contained"
                       color="primary" > Subscribe</Button>
                      
                      </form>
                  </div>
                  
                 </Grid>
                 
                 
                 
                 
                 
                 
                 <Grid item xs={4}></Grid>
                 
                 
                 
                  </Grid>
                </div>
            </div>               
        )
    }










}
export default Footer