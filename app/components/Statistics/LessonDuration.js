import React from 'react';
import LessonDurationChart from './LessonDurationChart';

class LessonDuration extends React.Component {
  render() {
    return (
      <div id='lesson-duration'>
        <h1>Lesson duration</h1>
        <LessonDurationChart data={this.props.data} />
      </div>
    );
  }
}

export default LessonDuration;