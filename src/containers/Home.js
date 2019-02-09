import React, {Component} from 'react';
import Appbar from './Appbar'


class Home extends Component{
    constructor(props){
        super(props);

    
    }

    render(){
        return(
            <div>
               <Appbar />
            </div>
        )
    }
}

export default Home