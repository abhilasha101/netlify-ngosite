import React, {Component} from 'react';
import Header from './Header';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";




class Aboutus extends Component{
    constructor(props){
        super(props);

    }



    render(){
        return(
            <div>
                <Header />
                <div>
                    <Grid container spacing={24} >
                    <Grid item xs={12}>  <h1> About US </h1></Grid>
                     </Grid>

                    </div>
                </div>
        )
    }
}

export default Aboutus;
