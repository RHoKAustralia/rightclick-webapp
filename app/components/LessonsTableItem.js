import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router';

class LessonsTableItem extends React.Component {
  render() {
    return (
        <tr>
          <td><Link to={ "/lesson/" + this.props.lesson.id }>{ this.props.lesson.name }</Link></td>
          <td>{this.props.lesson.start_time}</td>
          <td>{this.props.lesson.end_time}</td>
        </tr>
    );
  }
}

export default LessonsTableItem;
