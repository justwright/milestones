import React, { Component } from 'react';
import './programs.css';
import { staffData } from './aboutData';
import StaffBlock from './staffBlock';

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
        </div>
      </div>
    );
  }
}

export default About;
