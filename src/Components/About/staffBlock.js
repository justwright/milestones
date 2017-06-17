import React, { Component } from 'react';
import './staff.css';

class StaffBlock extends Component {
  render() {
    return (
        <div className="staffBlock">
            <div className="staffImg">
                <img src={this.props.data.image} alt={this.props.data.imageTitle} />
            </div>
            <div className="staffCont">
                <h3>{this.props.data.title}</h3>
                <h4>{this.props.data.name}</h4>
                <p><strong>{this.props.data.credentials}</strong></p>
                <p>{this.props.data.bio}</p>
            </div>
        </div>
    );
  }
}

export default StaffBlock;
