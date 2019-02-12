import React,{ Component } from 'react'
import './header.css'

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
                        <h4>logo</h4>
                    </div>
                    <ul className="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Project</a></li>
                    </ul>
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