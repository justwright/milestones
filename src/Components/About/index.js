import React, { Component } from 'react';
import './programs.css';
import { staffData, programData } from './aboutData';
import StaffBlock from './staff';
import Programs from './program';

class About extends Component {

  render() {
    return (
      <div className="mainConent">
        <div className="container">
          <h1>About Us</h1>
          <h2>Staff</h2>
          
          {staffData.map((item, i) => {
            return (
              <StaffBlock
                key={i}
                data={item}
              />
            )
          })}

          <h2>Programs and Curriculum</h2>
          <p>Here at Milestones Academy Childcare Center, each individual program promotes early childhood development that is critical for your child’s growth. All children participate in free, group, and structured play while continuing to learn and develop with age appropriate education. In addition, all of our programs promote cultural awareness, nutritional education and healthy eating, physical education, and music, dance, and movement. Program specifics are listed below:</p>
          <div className="programBlock">
            {programData.map((program, i) => {
              return (
                <Programs
                  key={i}
                  data={program}
                />
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
