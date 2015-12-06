import React from 'react';
import { Table } from 'react-bootstrap';
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
      <dl>
        <dt>
          Lesson name
        </dt>
        <dd>
          {this.props.lesson.name}
        </dd>
        <dt>
          Tutor name
        </dt>
        <dd>
          {this.props.lesson.tutor_name}
        </dd>
        <dt>
          Tutor email
        </dt>
        <dd>
          {this.props.lesson.tutor_email}
        </dd>
        <dt>
          Student name
        </dt>
        <dd>
          {this.props.lesson.student_name}
        </dd>
        <dt>
          Student email
        </dt>
        <dd>
          {this.props.lesson.student_email}
        </dd>
        <dt>
          Device/name
        </dt>
        <dd>
          {this.props.lesson.device}
        </dd>
        <dt>
          Steps
        </dt>
        <dd>
          {Steps}
        </dd>
      </dl>
    );
  }
}

export default LessonDetails;
