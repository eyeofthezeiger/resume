import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="resume">
            {/* Education----------------------------------------------- */}
            <div className="row education">
            <div className="three columns header-col">
                <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
                <div className="row item">
                <div className="twelve columns">
                    <h3>Pennsylvania State University</h3>
                    <p className="info">B.S. Degree in Information Science and Technology <span>•</span> <em className="date">December 2016</em></p>
                    <p>
                    
                    </p>
                </div>
                </div> {/* item end */}
            </div> {/* main-col end */}
            </div> {/* End Education */}
            {/* Work----------------------------------------------- */}
            <div className="row work">
            <div className="three columns header-col">
                <h1><span>Work</span></h1>
            </div>
            <div className="nine columns main-col">
            <div className="row item">
                <div className="twelve columns">
                    <h3>Percy</h3>
                    <p className="info">Recruiting and Technology Associate <span>•</span> <em className="date">June 2019 - Present</em></p>
                    <p>
                    I was hired as a Recruiting and Technology Associate for the Talent Acquisition team at Percy, 
                    an early stage startup focused on entry level agency recruiting. 
                    Along with my work in recruiting I also am constantly improving our CRM application based on user feedback and heuristic reviews. 
                    I am actively learning and developing in Ruby on Rails to help improve our CRM on a daily basis.  
                    </p>
                </div>
                </div> {/* item end */}
                <div className="row item">
                <div className="twelve columns">
                    <h3>Liberty Mutual</h3>
                    <p className="info">Associate Software Developer <span>•</span> <em className="date">January 2018 - June 2019</em></p>
                    <p>
                    Created wireframes, prototypes and supported front end development based on user feedback. 
                    I utilized research, analysis and design to continuously develop our applications to create delightful interactions for our users. 
                    I developed, maintained and designed a dynamic PDF quote proposal generator using Java. 
                    I was chosen as a design lead for a new small business auto quoting application and in charge of design decisions up until production release of the MVP. 
                    I led heuristic reviews and user interviews to gather feedback to create a seamless and effective experience.    
                    </p>
                </div>
                </div> {/* item end */}
                <div className="row item">
                <div className="twelve columns">
                    <h3>Liberty Mutual</h3>
                    <p className="info">Technology Associate <span>•</span> <em className="date">January 2017 - December 2017</em></p>
                    <p>
                    After college I recieved an offer with Liberty Mutual in the Techstart Development program as a technology associate.
                    During the first 6 months I recieved training in bootcamps focused on Agile, SQL, Java, Web Development, Relational Databases and Web Development.
                    My first assignment with a development team focused on SQL development for ETL Remediation.
                    After that assignment I was placed on a user experience team as an Associate Software Developer, where I spent the remainder of my time at Liberty.
                    </p>
                </div>
                </div> {/* item end */}
                <div className="row item">
                <div className="twelve columns">
                    <h3>Liberty Mutual</h3>
                    <p className="info">IT Security Intern <span>•</span> <em className="date">May 2016 - December 2016</em></p>
                    <p>
                    As an IT Security Intern I spent the majority of my time focused on Identity and Access Management. 
                    I was in charge of contacting stakeholders about the need for access in certain LDAP groups.
                    As I discovered what access was needed, I was in charge of removing those users from the different groups.
                    I was fortunate to continue my internship during my last semester at school working remotely.
                    After my internship I was offered a full time position as a Technology Associate in the Techstart program.
                    </p>
                </div>
                </div> {/* item end */}
            </div> {/* main-col end */}
            </div> {/* End Work */}
            {/* Skills----------------------------------------------- */}
            <div className="row skill">
            <div className="three columns header-col">
                <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col">
                <div className="bars">
                <ul className="skills">
                    <li><span className="bar-expand html5" /><em>HTML5</em></li>
                    <li><span className="bar-expand css" /><em>CSS</em></li>
                    <li><span className="bar-expand java" /><em>Java</em></li>
                    <li><span className="bar-expand angular" /><em>Angular 2+</em></li>
                    <li><span className="bar-expand react" /><em>React</em></li>
                    <li><span className="bar-expand sketch" /><em>Sketch</em></li>
                    <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>
                </ul>
                </div>{/* end skill-bars */}
            </div> {/* main-col end */}
            </div> {/* End skills */}
        </section> {/* Resume Section End*/}
      </React.Fragment>
    );
  }
}