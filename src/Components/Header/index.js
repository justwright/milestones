import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';
import mobileToggle from '../../images/svg/mobileToggle.svg';
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { showMobileMenu: false };

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.closeMobileMenu = this.closeMobileMenu.bind(this);
  }

  toggleMobileMenu() {
    this.setState(prevState => ({
      showMobileMenu: !prevState.showMobileMenu
    }));
  }

  closeMobileMenu() {
    if (this.state.showMobileMenu) {
      this.setState(() => ({
        showMobileMenu: false
      }));
    }
  }

  render() {
    return (
      <header className={this.state.showMobileMenu ? 'mobileNavActive' : ''}>
        <div className="logo">
          <Link to='/' onClick={this.closeMobileMenu}><h1 className="mainText">Milestones Academy Childcare Center</h1></Link>
          <button 
            type="button" 
            id="mobileNavToggle"
            onClick={this.toggleMobileMenu}
          >
            <ReactSVG 
              path={mobileToggle}
            />
          </button>
        </div>

        <nav>
          <ul>
            <li><button type="button" onClick={this.closeMobileMenu}>Contact Us</button></li>
            <li><Link to="/about" onClick={this.closeMobileMenu}>About Us</Link></li>
            <li><Link to="/forms" onClick={this.closeMobileMenu}>Forms</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
