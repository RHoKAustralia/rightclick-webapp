import React from 'react';
import { Table } from 'react-bootstrap';

import NoteStep from './NoteStep';
import PhotoStep from './PhotoStep';

class Step extends React.Component {
  render() {
    if(this.props.step.type === 'photo') {
      return <PhotoStep step={this.props.step}/>
    } else {
      return <NoteStep step={this.props.step}/>
    }
  }
}

export default Step;
