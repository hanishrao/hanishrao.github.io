import React, { useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

let education = [
    {
        year: '2019-ongoing',
        course: 'Secure and Private AI Nanodegree from Facebook',
        institution: 'Udacity',
        score: ''
    },
    {
        year: '2016-2020',
        course: 'B.Tech - Computer Science & Engineering',
        institution: 'Vivekananda College of Engineering and Technology',
        score: '6.2 CGPA'
    },
    {
        year: '2012-2014',
        course: 'Pre-University Education',
        institution: 'Vivekanada Pre-University College',
        score: '82%'
    },
]

let projects = [
    {
        title: 'Hanish Rao',
        date: 'Jan 2019 - Mar 2019',
        url: 'https://hyraze.github.io/',
        desc: 'My Portfolio which was done using Javascript / ReactJS / NodeJS / GraphQL / JSX / CSS3'
    },
    {
        title: 'Vaibhavi Audio Studio',
        date: 'Dec 2018 - Jan 2019',
        url: 'https://www.vaibhaviaudiostudio.in/',
        desc: 'Business Website for a Recording Studio with was done using HTML5 / CSS3 / JavaScript & Firestore.'
    },
    {
        title: 'Indiswara',
        date: 'May 2019 - present',
        url: 'https://indiswara.herokuapp.com/',
        desc: 'An eCommerce website built using Moltin API and it is a part of Business Website for Vaibhavi Recording Studio which is still in Development and it was done using Javascript / ReactJS / NodeJS / GraphQL / JSX / CSS3 / Moltin API'
    },
    {
        title: 'Music Box',
        date: 'Mar 2019',
        url: 'https://hyraze.github.io/musicbox/',
        desc: 'HTML based Music Pad Shop and its a PWA.'
    },
    {
        title: 'More Projects..',
        date: 'check the link below',
        url: 'https://github.com/hyraze',
        desc: 'GitLab:https://gitlab.com/'
    },
]

let experience = [
    {
        role: 'Mentor',
        company: 'ExpertsHub',
        date: 'January 2018 - Present',
        url: 'https://www.expertshub.org/',
        workdone: 'Helping and guiding the new interns on Machine Learning,IOT and Automotive Electronic Vehicle Design.'
    },
    {
        role: 'Freelance Web Developer',
        company: 'Vaibhavi Audio Studio',
        date: 'June 2018 - ongoing',
        url: 'https://www.vaibhaviaudiostudio.in',
        workdone: 'Worked on designing and developing company portfolio.'
    },
    {
        role: 'Campus coordinator & an Open Source Contributor',
        company: 'Free Software Movement Karnataka',
        date: 'August 2017-ongoing',
        url: 'https://fsmk.org/',
        workdone: 'Started with the workshop in Ruby on Rails and had a brief look on open source technology'
    },
    {
        role: 'Bug Hunter on Mozilla Beta Testing Program',
        company: 'Mozilla',
        date: 'Apr 2019-ongoing',
        url: 'https://www.mozilla.org/en-US/',
        workdone: 'The Bug Hunting program on the new project of Mozilla Firefox for an Open Source Android application named "FELIX" wherein in which bug hunting was based on the User Experience, Advice, and Suggestion'
    },
    {
        role: 'Core Member-Glug Infinite',
        company: 'glug-Infinite',
        date: 'April 2019-May 2019',
        url: 'https://gluginfinite.github.io/',
        workdone: 'A core-member of FOSS club in our campus called as glug-Infinite where in which we hosted many events on Git and Free Open Source Technology'
    },
    {
        role: 'Student Partner',
        company: 'Internshala',
        date: 'April 2019-May 2019',
        url: 'https://internshala.com/',
        workdone: 'Worked on promoting their brand as a Campus ambassador wherein which I learnt more about UX/UI designing for promotional activities.'
    }
]

let skills = [

    {
        field: 'Development',
        skills: 'Javascript / ReactJS / React-Native / Redux / Java / NodeJS / GraphQL / ElectronJS / Python / HTML5 / CSS3'
    },
    {
        field: 'Design',
        skills: 'UI / UX / Wireframing / Web Design'

    },
]

export default function Resume() {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return(
        <div className="container resume">
            <Helmet>
                <title>Resume | Hanish Rao</title>
            </Helmet>
            <header className="resume-header">
                <Link to="/" title="Home">
                    <small>Home</small>
                </Link>
                <HashLink to="#Bio" scroll={el => el.scrollIntoView({behavior:'smooth', block: 'start'})} title="About">
                    <small>About</small>
                </HashLink>
                <HashLink to="#Education" scroll={el => el.scrollIntoView({behavior:'smooth', block: 'start'})} title="Education">
                    <small>Education</small>
                </HashLink>
                <HashLink to="#Projects" scroll={el => el.scrollIntoView({behavior:'smooth', block: 'start'})} title="Projects">
                    <small>Projects</small>
                </HashLink>
                <HashLink to="#Experience" scroll={el => el.scrollIntoView({behavior:'smooth', block: 'start'})} title="Experience">
                    <small>Experience</small>
                </HashLink>
                <HashLink to="#Skills" scroll={el => el.scrollIntoView({behavior:'smooth', block: 'start'})} title="Skills">
                    <small>Skills</small>
                </HashLink>
            </header>
            <br/>
            <div id="Bio" className="resume-div">
                <h1>Hi, I'm Hanish Rao</h1>
                <p className="resume-p">
                    A Computer Science Engineer from Mangaluru, India. <br/>
                    I'm a Full Stack Developer and an Open Source Contributor. <br/>
                    and I love minimalistic designs.
                </p>
            </div>
            <div id="Education" className="resume-div">
                <h1>Education</h1>
                {education.map(edu => (
                    <div key={edu.score} className="resume-edu">
                        <p>{edu.course} / {edu.institution} / <small>{edu.score} <br/> <small>{edu.year}</small></small></p>
                    </div>
                ))}
            </div>
            <div id="Projects" className="resume-div">
                <h1>Projects</h1>
                {projects.map(project => (
                    <div key={project.title} className="resume-edu">
                        <p style={{fontWeight:'bold',fontSize:'1.2em'}}><a title={project.title} target="_blank" rel="noopener noreferrer" href={project.url}>{project.title}</a>
                        <br/> <small>{project.date}</small></p>
                        <p>{project.desc}</p>
                    </div>
                ))}
                <p><a href="https://github.com/hyraze">See more on my GitHub</a></p>
            </div>
            <div id="Experience" className="resume-div">
                <h1>Experience</h1>
                {experience.map(exp => (
                    <div key={exp.company} className="resume-edu">
                        <p style={{fontWeight:'normal',fontSize:'1.3em'}}>{exp.role} -&nbsp;
                            <a title={exp.title} target="_blank" rel="noopener noreferrer" href={exp.url}>{exp.company}</a> <br/>
                        <small><small>{exp.date}</small></small> <br/>

                        <span style={{fontSize:'0.8em'}}>{exp.workdone}</span>
                        </p>
                    </div>
                ))}
            </div>
            <div id="Skills" className="resume-div">
                <h1>Skills</h1>
                {skills.map(skill => (
                    <div key={skill.field} className="resume-edu">
                        <h3>{skill.field}</h3>
                        <p>{skill.skills}</p>
                    </div>
                ))}
            </div>
            <p className="socials resume-socials">
            <a target="_blank" rel="noopener noreferrer" title="Resume" href="#/resume">
                <i className="fa fa-file"></i>
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
    )
}
