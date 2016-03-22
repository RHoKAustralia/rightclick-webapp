import React from 'react';
import Header from './Header';
import { Grid, Row, Col } from 'react-bootstrap';
import RecentActivity from './RecentActivity';
import LessonDuration from './LessonDuration';
import LessonStepsChart from './LessonStepsChart';
import request from 'superagent';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        lessons:[],
        lessonDetails: [],
        summaryLoaded: false,
        detailsLoaded: false
    };
  }
  componentDidMount() {
    var self = this;
    request.get('http://rightclick.herokuapp.com/api/lessons')
    .set('Accept', 'application/json')
    .set('x-api-key', '5b23868a29a8b99a4a7a04bd912c79c1550d8e66')
    .end(function(err, response) {
      if (err) return console.error(err);
      self.setState({ 
        lessons: response.body,
        summaryLoaded: true, 
      });
      // Fetch extended details for each lesson
      var lessonDetails = [];
      var callbacks = [];
      for (var i = 0; i < self.state.lessons.length; i++) {
        var lesson = self.state.lessons[i];
        callbacks.push($.ajax({
          url: 'http://rightclick.herokuapp.com/api/lessons/' + lesson._id,
          beforeSend: function(xhr) {
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.setRequestHeader('x-api-key', '5b23868a29a8b99a4a7a04bd912c79c1550d8e66');
          },
          success: function(response) {
            lessonDetails.push(response);
          }
        }));
      }
      
      $.when.apply($, callbacks).done(function() {
        self.setState({
          lessonDetails: lessonDetails,
          detailsLoaded: true
        });
      })
    });
  }
  
  render() {
    return (
      <div>
        <Header/>
        <Grid>
          <Row className="show-grid">
            <RecentActivity data={this.state.lessons} />
            <LessonDuration data={this.state.lessons} />
            <LessonStepsChart data={this.state.lessonDetails} />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
