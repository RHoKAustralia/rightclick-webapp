import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router';

class LessonsTableItem extends React.Component {
  render() {
    return (
        <tr>
          <td><Link to={ "/lesson/" + this.props.lesson._id }>{ this.props.lesson.title || 'No Title' }</Link></td>
          <td>{this.props.lesson.start_time}</td>
          <td>{this.props.lesson.end_time}</td>
        </tr>
    );
  }
}

export default LessonsTableItem;
