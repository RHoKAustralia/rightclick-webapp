import React from 'react';
import { Table } from 'react-bootstrap';

class Step extends React.Component {
  render() {
    return (
      <div className="step">
        <span>{this.props.step.sequence_no}</span>
        <p>
          {this.props.step.data}
        </p>
      </div>
    );
  }
}

export default Step;
