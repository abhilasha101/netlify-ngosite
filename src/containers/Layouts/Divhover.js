import React ,{Component} from 'react';
import '../Divhover.css';
import img7 from "../images/sun.png";
import img8 from "../images/hand.png";
import img9 from "../images/arrow.png";
const Styles={
    imgp:{
        height:"50px",
        width:"50px",
        
    }
}

class Divhover extends Component{
    constructor(props){
        super(props);
    }

    










    render(){
        return(
            <div className="container" style={{textalign:"center"}}>
            <div className="box">  <img src={img7}  style= {Styles.imgp}/> <h2 style={{textalign:"center"}}> Total donation</h2> <p> The French Revolutioncons tituted for the conscience of the dominant. </p> </div>
            <div className="box">   <img src={img8}  style= {Styles.imgp}/><h2>  Fund raised</h2> <p> The French Revolutioncons tituted for the conscience of the dominant. </p></div>
            <div className="box"> <img src={img9}  style= {Styles.imgp}/><h2> Highest donation</h2> <p> The French Revolutioncons tituted for the conscience of the dominant. </p></div>
            <div className="box">  <img src={img7}  style= {Styles.imgp}/><h2> Total donation</h2> <p> The French Revolutioncons tituted for the conscience of the dominant. </p> </div>
            
                </div>
        )
    }
}  

export default Divhover;