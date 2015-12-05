import React from 'react';
import { Table } from 'react-bootstrap';

class LessonsTableItem extends React.Component {
  render() {
    return (
          <tr>
            <td>{this.props.lesson.hello}</td>
          </tr>
    );
  }

  _handleTouchTap() {
    //this.refs.superSecretPasswordDialog.show();
  }
}

export default LessonsTableItem;
