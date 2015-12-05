import React from 'react';
import { Table } from 'react-bootstrap';
import LessonsTableItem from './LessonsTableItem'

class LessonsTable extends React.Component {
  render() {
    var Lessons = (<tr><td>Loading lessons...</td></tr>);
    if (this.props.lessons) {
      Lessons = this.props.lessons.map(function (lesson) {
        return (<LessonsTableItem lesson={lesson} key={lesson.id} />);
      });
    }
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Lesson Name</th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
        </thead>
        <tbody>
          {Lessons}
        </tbody>
      </Table>
    );
  }
}

export default LessonsTable;
