import React, {Component} from 'react';
import firebase from 'firebase'

import fire from '../fire'
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
  backgroundColor: 'white',
  border: '0px solid #ff6550',
  borderRadius: '15px 15px 15px 15px',
  boxShadow: '4px 2px 16px 4px rgba(138,134,134,0.75)',
  minWidth: '60px',
  maxWidth: '350px',
  
  marginLeft: 50,
  paddingTop: 20,
  paddingBottom: 20,
  paddingLeft:50,
  paddingRight: 50, 
}

class Contactus extends Component{
    constructor(props){
        super(props);
        this.state= {
          name: "",
          email: "",
          query: "",

        }
    }
    handleChangeName = (e)=>{
        // console.log("name changing",e.target.value)
        let name = e.target.value
        this.setState({name})
    }
    handleChangeEmail = (e)=>{
        // console.log("email changing")
        let email = e.target.value
        this.setState({email})
    }
    handleChangeQuery = (e)=>{
        // console.log("query changing")
        let query = e.target.value
        this.setState({query})
    }


    handleClickSubmit = (e)=>{
      let name = this.state.name
      let email = this.state.email
      let query = this.state.query

      e.preventDefault()
      console.log("clicked")
      var db = fire.firestore();
      db.collection("users").add({
        name,
        email,
        query

    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    }


    render(){
        return(
             <section style={ sectionStyle }>
               <Header />
                <Grid container spacing={24} style={{paddingTop:50}}>
                    <Grid item xs={12} lg={6} sm={12} md={6}>
                      <div style={{padding:100}}>
                        <Typography variant="h4" style={{color:'white',fontWeight:800}}gutterBottom>
                          Contact Us
                        </Typography>
                        <Typography variant='subtitle1' style={{color:'white',fontWeight:100}}gutterBottom>
                          Submit your queries here and we will get back to you as soon as possible
                        </Typography>
                      </div>   
                    </Grid>
                    <Grid item xs={12} lg={6}sm={12} md={6}>
                      <div >
                        <div style={div1}>
                        <form onSubmit={e=>{this.handleClickSubmit(e)}} className={styles.form}>
                          <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="name">name</InputLabel>
                            <Input 
                              id="email"
                              name="name"  
                              onChange={e=>{this.handleChangeName(e)}}
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
                              onChange={e=>{this.handleChangeEmail(e)}}
                              autoFocus />
                          </FormControl>
                          <TextField
                            id="filled-multiline-static"
                            label="Query"
                            multiline
                            rows="5"
                            defaultValue=""
                            className={styles.textField}
                            margin="normal"
                            variant="outlined"
                            required={true}
                            onChange={e=>{this.handleChangeQuery(e)}}
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