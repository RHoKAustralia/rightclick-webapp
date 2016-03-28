import React from 'react';
import { Table, Grid, Panel } from 'react-bootstrap';
import Step from './Step';

const lessonDetailsTitle = (
  <h1>Lesson Details</h1>
);
const stepsTitle = (
  <h1>Steps</h1>
);


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
      <Panel header={lessonDetailsTitle}>
        <Table striped bordered condensed hover>
          <tbody>
            <tr><th width="10%">Lesson Title</th><td>{this.props.lesson.name || this.props.lesson.title}</td></tr>
            <tr><th width="10%">Tutor Name</th><td>{this.props.lesson.tutor_name}</td></tr>
            <tr><th width="10%">Tutor Email</th><td>{this.props.lesson.tutor_email}</td></tr>
            <tr><th width="10%">Student Name</th><td>{this.props.lesson.student_name}</td></tr>
            <tr><th width="10%">Student Email</th><td>{this.props.lesson.student_email}</td></tr>
            <tr><th width="10%">Started At</th><td>{this.props.lesson.start_time}</td></tr>
            <tr><th width="10%">Ended At</th><td>{this.props.lesson.end_time}</td></tr>
            <tr><th width="10%">Device</th><td>{this.props.lesson.device}</td></tr>
          </tbody>
        </Table>
      </Panel>
      <Panel header={stepsTitle}>
        <Grid>
          {Steps}
        </Grid>
      </Panel>
      </div>
    );
  }
}

export default LessonDetails;
