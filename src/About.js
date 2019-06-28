import React from 'react';
import hero from './assets/hero.svg';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function Hero(){
    return (

      <div className="container">

        <div className="row">
        <Navbar selected={2} />
            <div className="col-lg-6 order-lg-2 order-sm-1 animated fadeIn">
                <img className="hero-img" src={hero} alt="hero"/>
            </div>
            <div className="col-lg-6 order-lg-1 order-sm-2 animated fadeIn">
                <h1 className="who">About Me</h1>
                <p className="about-me me-p">
                    I'm Hanishraj B Rao, A 22 year old&nbsp;<br/>
                     Code fanatic,Graphic designer and an Open Source Contributor
            and I love Music,playing guitar. <br/>
                    I have a part-time job as Freelancer and <br/>
                    If it's about Personal/Company Website or If it's about Graphic designing or it might be about Digital Marketing, I can help you to
make a brand out of your company.<br/> Feel free to contact me
    <Link style={{color: '#434aae'}} to="/contact" title="email"> here</Link>.

<br/>

              <br/> <br/>
                </p>

                <p className="buttons hvr-grow">
                    <Link to="/resume" title="learn more">Learn More</Link>
                    <Link to="/contact" title="contact">Contact Me</Link>
                </p>
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
              </p>

            </div>
        </div>
      </div>
    )
}
