import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import './footer.css';

class FooterLink extends Component {
  render() {
    return (
        <li>
            <a 
                href={this.props.link} 
                target={this.props.newTab ? '_blank' : null}
                rel={this.props.newTab ? 'noopener noreferrer' : null}
            >
                <ReactSVG
                    path={this.props.icon}
                    className={this.props.className}
                />
            </a>
        </li>
    );
  }
}

export default FooterLink;
