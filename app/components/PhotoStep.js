import React from 'react';
import { Row, Col } from 'react-bootstrap';

class PhotoStep extends React.Component {
  render() {
    let imgData = "data:image/png;base64," + this.props.step.data;
    return (
      <div className="step">
        <Row>
        <Col md={1}>{this.props.step.sequence_no}</Col>
        <Col md={10}>
          <img src={imgData} width="640px" height="480px"/>
        </Col>
        </Row>
      </div>
    );
  }
}

export default PhotoStep;
