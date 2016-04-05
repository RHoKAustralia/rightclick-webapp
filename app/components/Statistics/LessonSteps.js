import React from 'react';
import LessonStepsChart from './LessonStepsChart';

class LessonSteps extends React.Component {
  render() {
    return (
      <div id='lesson-steps'>
        <h1>Steps taken</h1>
        <LessonStepsChart data={this.props.data} />
      </div>
    );
  }
}

export default LessonSteps;