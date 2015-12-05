import React from 'react';
import { Table } from 'react-bootstrap';

class LessonsTableItem extends React.Component {
  render() {
    return (
          <tr>
            <td>{this.props.lesson.name}</td>
            <td>{this.props.lesson.start_time}</td>
            <td>{this.props.lesson.end_time}</td>
          </tr>
    );
  }

  _handleTouchTap() {
    //this.refs.superSecretPasswordDialog.show();
  }
}

export default LessonsTableItem;
