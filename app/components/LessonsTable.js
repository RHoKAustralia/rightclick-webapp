import React from 'react';
import { Table, Pagination } from 'react-bootstrap';
import LessonsTableItem from './LessonsTableItem'

class LessonsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      pageSize: 15,
      lessons: [],
      items: [(<tr><td colSpan="3">Loading lessons...</td></tr>)]
    }
    // Bind non-React methods
    this.pageSelect = this.pageSelect.bind(this);
    this.loadPageContents = this.loadPageContents.bind(this);
  }

  // Update page when lessons data in this.props is loaded
  componentWillReceiveProps(nextProps) {
    if (nextProps.lessons) {
      var lessons = nextProps.lessons.map(function (lesson) {
        return (<LessonsTableItem lesson={lesson} key={lesson.id} />);
      });

      this.setState({
        lessons: lessons
      }, function() {
        this.loadPageContents();
      });
    }
  }
  
  // Set new active page and page contents
  pageSelect(event, selectedEvent) {
    this.setState({
      activePage: selectedEvent.eventKey
    }, function() {
      this.loadPageContents();
    });
  }
  
  // Set visible subsequence from lessons list
  loadPageContents() {
    var items = this.state.lessons.slice(
      (this.state.activePage - 1) * this.state.pageSize,
      this.state.activePage * this.state.pageSize
    );
    this.setState({
      items: items
    });
  }
  
  render() {
    return (
      <div>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Lesson Name</th>
              <th>Start Time</th>
              <th>End Time</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items}
          </tbody>
        </Table>
        
        <Pagination 
          bsSize="medium"
          items={Math.ceil(this.state.lessons.length / this.state.pageSize)} 
          activePage={this.state.activePage}
          onSelect={this.pageSelect}
          prev={true}
          next={true} 
          first={true}
          last={true} />
      </div>
    );
  }
}

export default LessonsTable;
