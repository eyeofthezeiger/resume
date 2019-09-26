import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
            <div className="row">
            <div className="three columns">
                <img className="profile-pic" src="images/profilepic.jpg" alt="" />
            </div>
            <div className="nine columns main-col">
                <h2>About Me</h2>
                <p>Hi there, thank you for taking the time to visit my website. 
                  My name is Matthew Zeiger and i'm from Warrington, PA a little suburb of philadelphia about an hour from the city.
                  I studied at Penn State University from 2012 to 2016 where I learned Information Sciences and Technology with a focus on People, Society and Organizations. 
                  I know that's a mouthful but it deals with human computer interaction. 
                  After college I spent most of my time at Liberty Mutual as a software developer on a User Experience team, and recently I chose to try out a new career as a recruiting and technology associate in an early stage startup called Percy.
                  I have enjoyed my time there but have come to the conclusion that I have a passion for Software Development and am looking forward to the next step in my career.
                </p>
                <div className="row">
                <div className="columns contact-details">
                    <h2>Contact Details</h2>
                    <p className="address">
                    <span>Matthew Zeiger</span><br />
                    <span>Boston, MA<br />
                    </span>
                    <span>matthew.zeiger2296@gmail.com</span>
                    </p>
                </div>
                <div className="columns download">
                    <p>
                    <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                    </p>
                </div>
                </div> {/* end row */}
            </div> {/* end .main-col */}
            </div>
        </section>
      </React.Fragment>
    );
  }
}