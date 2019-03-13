import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import img4 from '../images/sc1.jpg'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  section:{
      width:"500px",
      height:"100px",

      marginLeft:"50px",
      marginBottom:"100px",

      textAlign:"right"
  },

  section2:{
      align:"left"
  }
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div className={classes.section}>
      <Paper className={classes.root} elevation={12}  > 
        <Typography variant="h5" component="h3"> 
          Help for Cancer victims
        </Typography>
        <Typography component="p"> <img  src = {img4}  className={classes.section2} />
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);