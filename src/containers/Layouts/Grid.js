import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Window from '../Layouts/Window';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    fontSize:"medium",
    
    color: theme.palette.text.secondary,
    height:100,
  },
  fix:{
      fontWeight: 900,
      padding:0,
  },
  button: {
    margin: theme.spacing.unit,
    backgroundColor:"#0d47a1",
    verticalAlign:'middle',
    alignItems :'center',
    
  },
  input: {
    display: 'none',
  },
  grid:{
    backgroundColor:"#eceff1",
     marginTop:"20px",
    marginBottom:"20px",


  },
  section:{
    marginTop:"20px",
    marginBottom:"20px",

  }
});



function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
        <Grid container spacing={24} className={classes.section}>
            <Grid item xs={1} style={{padding:0}}> </Grid>
            <Grid item xs={4} style={{padding:0}}>
               <Typography className={classes.paper} style={{textAlign:"center"}}>What we do</Typography>
            </Grid>
            <Grid item xs={6} style={{padding:0}}>
                <div className={classes.paper}>
                    <Typography variant="inherit" className={classes.fix}  >
                         We develop youth leadership by facilitating social development and professional internships.</Typography>
                              <br></br>
                     <Typography  > We proudly count a Nobel Peace Prize laureate and numerous world, 
                         business and NGO leaders amongst our one million strong alumni community. 
                         To date, we've delivered over 480,000 internship and volunteering experiences, 
                          and it's all been led by young leaders who believe in making the world a better place.</Typography></div>
            </Grid>
            <Grid item xs={1} style={{padding:0}}> </Grid>
        </Grid>

      <Grid container spacing={24} className={classes.grid}>
          <Grid item xs={1} style={{padding:0}}> </Grid>
          <Grid item xs={4} style={{padding:0}}>
              <Typography  className={classes.paper} style={{textAlign:"center"}} > For students </Typography>
                 <Button variant="contained" color="primary" className={classes.button}>
                    Primary
                 </Button>
          </ Grid>
          <Grid item xs={6} style={{padding:0}}> 
              <Typography className={classes.paper}> Are you a student looking for a volunteer internship for this semester break?
                <br></br>
                Are you a young, proactive undergrad who has skills in IT, design, management etc, looking to develop more in a short term internship?
                <br></br>
                Are you a recent graduate with experience in a particular field, looking to intern abroad?
                 <br></br>
                If you are one of the above, sign up today and start surfing through thousands of opportunities available in more than 25+ countries for Indians.</Typography>
          </Grid>
        <Grid item xs={1} style={{padding:0}}> </Grid>
      </Grid>
      

      <Grid container spacing={24}>
        <Grid item xs={2}>   </Grid>
        <Grid item xs={3}>  <Window /> </Grid>
        <Grid item xs={3}>  <Window /></Grid>
        <Grid item xs={3}>  <Window /> </Grid>
        <Grid item xs={1}>   </Grid>
        
        </Grid>

        <Grid container spacing={24}>
        <Grid item xs={2}>   </Grid>
        <Grid item xs={8}> <img src={require('../images/test1.jpg')} /></Grid>
        
        <Grid item xs={2}>   </Grid>
        
        </Grid>


          <Grid container spacing={24} className={classes.grid}>
          <Grid item xs={1} style={{padding:0}}> </Grid>
          <Grid item xs={4} style={{padding:0}}>
              <Typography  className={classes.paper} style={{textAlign:"center"}} > For organisations </Typography>
                 <Button variant="contained" color="primary" className={classes.button}>
                    Find out more
                 </Button>
          </ Grid>
          <Grid item xs={6} style={{padding:0}}> 
              <Typography className={classes.paper}> We can help connect you with some of the brightest and most ambitious young minds from around the world. 
              Our interns come equipped with skills and expertise to help companies grow and reach out to new markets.
               We know what a task it can be to find the right talent. 
              Finding interns who have a global mindset to bring new ideas to the table and also have a growth mindset can be tough.
               Let us do that for you. Click here to know how we are helping companies like Tata Consultancy Services since last 10 years in India.</Typography>
          </Grid>
        <Grid item xs={1} style={{padding:0}}> </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs={2}>   </Grid>
        <Grid item xs={8}> <img src={require('../images/test2.jpg')} /></Grid>
        
        <Grid item xs={2}>   </Grid>
        
        </Grid>
      
      
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);