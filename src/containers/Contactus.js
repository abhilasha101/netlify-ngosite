import React, {Component} from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { blue } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
},
  submit: {
  marginTop: theme.spacing.unit * 3,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    background: 'white'
  },
});

var sectionStyle = {
    overflow:'hidden',
    width: "100%",
    height: "100vh",
    backgroundColor: '#1a237e',

    backgroundImage: 'linear-gradient(#1a237e,#303f9f,#3f51b5,#5c6bc0,#2196f3,#90caf9)'
  }

const div1 = {
  marginTop: '100px',
  backgroundColor: 'white',
  border: '0px solid #ff6550',
  borderRadius: '15px 15px 15px 15px',
  boxShadow: '4px 4px 16px 0px rgba(41,43,145,0.75)',
  width: '45%',
  marginLeft: 50,
  paddingTop: 20,
  paddingBottom: 20,
  paddingLeft:50,
  paddingRight: 50, 
}

class Contactus extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
             <section style={ sectionStyle }>
                <Grid container spacing={24}>
                    <Grid item xs={6}>
                      <div style={{padding:100}}>
                        <Typography variant="h4" style={{color:'white',fontWeight:800}}gutterBottom>
                          Contact Us
                        </Typography>
                        <Typography variant='subtitle1' style={{color:'white',fontWeight:100}}gutterBottom>
                          Submit your queries here and we will get back to you as soon as possible
                        </Typography>
                      </div>   
                    </Grid>
                    <Grid item xs={6}>
                      <div >
                        <div style={div1}>
                        <form className={styles.form}>
                          <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="name">name</InputLabel>
                            <Input id="email" name="name"  autoFocus />
                          </FormControl>
                          <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input id="email" name="email" autoComplete="email" autoFocus />
                          </FormControl>
                          <TextField
                            id="filled-multiline-static"
                            label="Query"
                            multiline
                            rows="4"
                            defaultValue=""
                            className={styles.textField}
                            margin="normal"
                            variant="filled"
                          />
                          
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
                </Grid>
            </section>
        )
    }
}

export default Contactus