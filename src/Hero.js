import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import me from './assets/person.svg'
import { Tooltip } from '@auth0/cosmos'

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'About | Hanish Rao'
        // .addEventListener('mouseover',() => alert('A person who can understand a problem, propose a solution and help taking it to reality. \nA full stack designer (some years ago people called them web designers or sometimes are called product designers, or just designers) is a designer that gets involved in every stage of a product design: research, design, development.'))
    })

    return (
      <div>
        <div className="container animated fadeIn">
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <img src={me} alt="Hanish Rao" className="me-img"/>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <h1 className="hero-tag">
                        Hi, I'm Hanish.
                    </h1>
                    <p className="about-me me-p">
                    I'm a Full Stack Developer & Designer<br/>
                    Welcome to my portal! <br/>
                    Feel Free to Look Around… <br/>
                    <br/>
                    <br/>


                    </p> <br/>
                    <p className="buttons btn-2">
                        <Link to="/about">About Me</Link>
                        <Link to="/contact">Contact Me</Link>
                    </p> <br/>
                    <p className="socials about-s" style={{marginTop:'35px'}}>
                    <a target="_blank" rel="noopener noreferrer" title="Resume" href="#/resume">
                      <i className="fa fa-file-o"></i>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" title="Github" href="https://www.github.com/hyraze">
                        <i className="fab fa-github"></i>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" title="Gitlab" href="https://www.gitlab.com/Hyraze">
                        <i className="fab fa-gitlab"></i>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" title="dribbble" href="https://www.dribbble.com/hanishrao">
                        <i className="fab fa-dribbble"></i>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" title="behance" href="https://behance.net/hanishrao">
                        <i className="fab fa-behance"></i>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" title="telegram" href="https://t.me/hyraze">
                       <i className="fab fa-telegram"></i>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" title="linkedin" href="https://www.linkedin.com/in/hanishrao">
                       <i className="fab fa-linkedin-in"></i>
                    </a>
                        <Link style={{textAlign:'right',float:' right',opacity:'0.7'}} to="/legal"><small><small>legal</small></small></Link>
                    </p>
                </div>
            </div>
        </div>
      </div>
    )
}

export default About;
