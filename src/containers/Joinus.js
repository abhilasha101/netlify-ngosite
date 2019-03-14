import React ,{Component} from 'react';
import Header from './Header';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles= theme =>({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        backgroundColor: 'white'
      },

});


var sectionStyle = {
    overflowX: 'hidden',
    minWidth: "100%",
    height: "100vh",
    backgroundColor: '#1a237e',

    backgroundImage: 'linear-gradient(#1a237e,#303f9f,#3f51b5,#5c6bc0,#2196f3,#90caf9)'
  }

const div1 = {
  marginTop: '100px',
 
  minWidth: '60px',
  maxWidth: '350px',
  
  marginLeft: 50,
  paddingTop: 40,
  paddingBottom: 40,
  paddingLeft:60,
  paddingRight: 60, 
}

const section={
    height:"900px",
    width:"800px",

    marginLeft:100,

}
 

 class Joinus extends Component{
     constructor(props){
         super(props);
     }



     render(){
         return(
             <div>
                 <div>
                 <Header />
                 </div>
                 <div style={sectionStyle} >

                   
               
                <Grid container spacing={24} style={{paddingTop:50}}>
                    <Grid item xs={12} lg={6} sm={12} md={6}>
                      <div style={{padding:150}}>
                        <Typography variant="h4" style={{color:'white',fontWeight:800}}gutterBottom>
                          JOIN US
                        </Typography>
                        <Typography variant='subtitle1' style={{color:'white',fontWeight:100}}gutterBottom>
                           we will get back to you as soon as possible
                        </Typography>
                      </div>   
                    </Grid>
                    
                         
                    </Grid >
                    <Paper elevation={13} style={section}>
                       
                    <Grid item xs={12} lg={6}sm={12} md={6}>
                      <div >
                        <div  style={div1}>
                        <form >
                          <FormControl margin="normal"  required fullWidth>
                            <InputLabel htmlFor="name">name</InputLabel>
                            <Input 
                              id="email"
                              name="name"  
                              
                              autoFocus 
                              />
                          </FormControl>

                           <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input 
                              id="email" 
                              name="email" 
                              autoComplete="email" 
                              type="email" 
                        
                              autoFocus />
                          </FormControl>
                          <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="age">age</InputLabel>
                            <Input 
                              id="age" 
                              name="age" 
                              autoComplete="age" 
                              type="age" 
                        
                              autoFocus />
                          </FormControl>
                          <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="age">age</InputLabel>
                            <Input 
                              id="age" 
                              name="age" 
                              autoComplete="age" 
                              type="age" 
                        
                              autoFocus />
                          </FormControl>
                          <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="city">city</InputLabel>
                            <Input 
                              id="city" 
                              name="state" 
                              autoComplete="state" 
                              type="state" 
                        
                              autoFocus />
                          </FormControl>
                          <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="state">state</InputLabel>
                            <Input 
                              id="state" 
                              name="stae" 
                              autoComplete="state" 
                              type="state" 
                        
                              autoFocus />
                          </FormControl>
                          <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Address</InputLabel>
                            <Input 
                              id="email" 
                              name="email" 
                              autoComplete="email" 
                              type="email" 
                              
                              autoFocus />
                          </FormControl>
                          <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">ocuupation</InputLabel>
                            <Input 
                              id="email" 
                              name="email" 
                              autoComplete="email" 
                              type="email" 
                              
                              autoFocus />
                          </FormControl>
                          <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">contact number</InputLabel>
                            <Input 
                              id="email" 
                              name="email" 
                              autoComplete="email" 
                              type="email" 
                              
                              autoFocus />
                          </FormControl>
                          <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email"> have worked with any organisation previously?</InputLabel>
                            <Input 
                              id="email" 
                              name="email" 
                              autoComplete="email" 
                              type="email" 
                              
                              autoFocus />
                          </FormControl>
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={styles.submit}
                            
                          >
                            Submit
                          </Button>
                          
                          
                          
                          
                          </form>
                          </div>
                          </div>
                         
                         </Grid>
                         </Paper>
                     </div>

                     
                        
                 </div>
         )

      }
















    }
     export default Joinus;