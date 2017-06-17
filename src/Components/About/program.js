import React, { Component } from 'react';

class Programs extends Component {
  render() {
    return (
        <div className="programCont">
            <div className="innerProgramCont">
                <h3>{this.props.data.name}</h3>
                <dl>
                    <dt>{this.props.data.description}</dt>
                    <dd>
                        <ul>
                            {this.props.data.details.map((detail, i) => {
                                return (
                                    <li key={i}>{detail}</li>
                                )
                            })}
                        </ul>
                    </dd>
                </dl>
            </div>
        </div>
    );
  }
}

export default Programs;
