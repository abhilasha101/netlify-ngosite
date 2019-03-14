import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import color from '@material-ui/core/colors';


const styles = {
  card: {
    maxWidth: 300,
  },
  media: {
    height: 200,
  },
  section:{
    backgroundColor:"",
    color:"white"
  }
};

function MediaCard(props) {
  const { classes } = props;
  { console.log(props.img,"gdgc")}
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image=  {props.img}
        
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            project
          </Typography>
          <Typography component="p" align="left">
             are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.section} color="primary" variant="contained"size="small" >
          Learn More 
        </Button>
       
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);