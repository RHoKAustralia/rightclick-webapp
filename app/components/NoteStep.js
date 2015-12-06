import React from 'react';
import { Row, Col} from 'react-bootstrap';

class NoteStep extends React.Component {
  render() {
    return (
      <div className="step">
        <Row>
        <Col md={1}>{this.props.step.sequence_no}</Col>
        <Col md={10}>{this.props.step.data}</Col>
        </Row>
      </div>
    );
  }
}

export default NoteStep;
