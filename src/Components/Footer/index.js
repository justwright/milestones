import React, { Component } from 'react';
import FooterLink from './footerLink';
import facebookIcon from '../../images/svg/facebook.svg';
import instagramIcon from '../../images/svg/instagram.svg';
import emailIcon from '../../images/svg/email.svg';
import './footer.css';

class Footer extends Component {
  render() {
    const footerLinks = [
      {
        className: 'iconFacebook',
        link: 'https://www.facebook.com/MilestonesAcademyChildcare',
        newTab: true,
        icon: facebookIcon
      },
      {
        className: 'iconInstagram',
        link: 'https://www.instagram.com/milestonesacademyoc',
        newTab: true,
        icon: instagramIcon
      },
      {
        className: 'iconEmail',
        link: 'mailto:MilestonesChildcareOC@gmail.com',
        icon: emailIcon
      }
    ];

    return (
      <footer className="footer">
        <div className="mapCont">
          <iframe
            title='Milestones location'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.227462006181!2d-117.6963737848068!3d33.625343747552925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dce8ff12222a5b%3A0xab42e54a98864c2!2sMilestones+Academy+Childcare+Center!5e0!3m2!1sen!2sus!4v1496637823196"></iframe>
        </div>

        <div className="footerCont">
          <div>
            <h2>Contact Us</h2>

            <address>
              23184 El Toro Frontage Road,<br/>
              Lake Forest, CA 92630
            </address>
            <p>
              <strong>Hours:</strong><br/>Monday - Friday:<br/>6:30AM - 6:00PM</p>
            <p>(949) 588-7000</p>
            <ul className="socialLinks">
              {footerLinks.map((link, i) => {
                return (
                  <FooterLink
                    key={i}
                    className={link.className}
                    link={link.link}
                    newTab={link.newTab}
                    icon={link.icon}
                  />
                );
              })}
            </ul>
          </div>

          <div className="copyright">
            &copy; {new Date().getFullYear()} <a href="https://github.com/justwright">Justin Wright</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
