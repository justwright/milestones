import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <Link to='/'><h1 className="mainText">Milestones Academy Childcare Center</h1></Link>
          <button type="button" id="mobileNavToggle">
            <svg className="icon icon-menu"><use xlinkHref="#icon-menu"></use></svg>
          </button>
        </div>

        <nav>
          <ul>
            <li><button type="button">Contact Us</button></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/forms">Forms</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
