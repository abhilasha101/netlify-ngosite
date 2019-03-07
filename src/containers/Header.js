import React,{ Component } from 'react'
import './header.css'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

class Header extends Component{
    
    handleClickToggle = ()=>{
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');
        const burger = document.querySelector('.burger');
        nav.classList.toggle('nav-active');
        navLinks.forEach(item=>{
            item.style.opacity = 1;
        })
        burger.classList.toggle('toggle');
    }

    render(){
        return(
            <div>
                <nav>
                    <div className="logo">
                        <Link to="/" style={{textDecoration:'none'}}>Logo</Link>
                    </div>
                    <ul className="nav-links" style={{alignItems:'center'}}>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Project</a></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                        <div>
                        <Button  variant="contained" size="medium" color="primary">DONATE </Button>
                        </div>
                    </ul>
                    <div className="hidden">

                    </div>
                    
                    <div className="burger" onClick={this.handleClickToggle}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </nav>
            </div>

        )
    }
}


export default Header;