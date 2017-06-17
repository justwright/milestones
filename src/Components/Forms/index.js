import React, { Component } from 'react';
import './forms.css';
import ReactSVG from 'react-svg';
import pdfLogo from '../../assets/svg/pdf.svg';
import form1 from '../../assets/document/State Registration Forms.pdf';
import form2 from '../../assets/document/Facility Registration Form.pdf';

class Forms extends Component {
  render() {
    const pdfs = [
      {
        form: form1,
        title: 'State Registration Form'
      },
      {
        form: form2,
        title: 'Facility Registration Form'
      }
    ];

    return (
        <div className="mainContent">
          <div className="container">
            <h1>Forms</h1>

            <ul className="resourceList">
              {pdfs.map((pdf, i) => {
                return (
                  <li key={i} className="resourceItem">
                    <a href={pdf.form} target="_blank" rel="noopener noreferrer">
                      <ReactSVG 
                        path={pdfLogo}
                      />
                      {pdf.title}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
    );
  }
}

export default Forms;
