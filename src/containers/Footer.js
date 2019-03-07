import React ,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import color from '@material-ui/core/colors';



const Styles={
    section1:{
        backgroundColor:"#263238",
    }
}


class Footer extends Component{
    constructor(props){
        super(props);

  
  
    }

    render(){
        return(
            <div>
                 <Grid container spacing={24} style={Styles.section1} > 
                 <Grid item xs={4} >brbb  rbcng g cgy uggnctg ytntg ntggc</Grid>
                 <Grid item xs={4}> </Grid>
                 <Grid item xs={4}> </Grid>
                 
                 
                 
                  </Grid>
                </div>
               
        )
    }










}
export default Footer