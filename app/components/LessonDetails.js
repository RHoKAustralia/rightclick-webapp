import React from 'react';
import { Table, Grid } from 'react-bootstrap';
import Step from './Step';

class LessonDetails extends React.Component {
  render() {
    var Steps = (<p>Loading steps...</p>);
    if (this.props.lesson.steps) {
      Steps = this.props.lesson.steps.map(function(step) {
        return (<Step step={step} key={step.sequence_no} />);
      });
    }
    return (
      <div>
      <Table striped bordered condensed hover>
        <tbody>
          <tr><th width="10%">Lesson Title</th><td>{this.props.lesson.name || this.props.lesson.title}</td></tr>
          <tr><th width="10%">Tutor Name</th><td>{this.props.lesson.tutor_name}</td></tr>
          <tr><th width="10%">Tutor Email</th><td>{this.props.lesson.tutor_email}</td></tr>
          <tr><th width="10%">Student Name</th><td>{this.props.lesson.student_name}</td></tr>
          <tr><th width="10%">Student Email</th><td>{this.props.lesson.student_email}</td></tr>
          <tr><th width="10%">Device</th><td>{this.props.lesson.device}</td></tr>
        </tbody>
      </Table>
      <h1>Steps</h1>
      <Grid>
      {Steps}
      </Grid>
      </div>
    );
  }
}

export default LessonDetails;
