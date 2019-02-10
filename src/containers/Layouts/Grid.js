import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:100,
  },
  fix:{
      fontWeight: 900,
      padding:0,
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={4} style={{padding:0}}>
          <Paper className={classes.paper}>What we do</Paper>
        </Grid>
        <Grid item xs={8} style={{padding:0}}>
          <Paper className={classes.paper}><Typography variant="inherit" className={classes.fix}>
           We develop youth leadership by facilitating social development and professional internships.</Typography>
            <br></br>
        <Typography >     We proudly count a Nobel Peace Prize laureate and numerous world, 
                business and NGO leaders amongst our one million strong alumni community. 
               To date, we've delivered over 480,000 internship and volunteering experiences, 
             and it's all been led by young leaders who believe in making the world a better place.</Typography></Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);