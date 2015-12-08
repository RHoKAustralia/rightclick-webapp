import React from 'react';
import Header from './Header';
import { Grid, Row, Col } from 'react-bootstrap';
import RecentActivity from './RecentActivity';
import request from 'superagent';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lessons:[]};
  }
  componentDidMount() {
    var self = this;
    request.get('http://rightclick.herokuapp.com/api/lessons')
    .set('Accept', 'application/json')
    .set('x-api-key', '5b23868a29a8b99a4a7a04bd912c79c1550d8e66')
    .end(function(err, response) {
      if (err) return console.error(err);
      console.log(response.body);
      self.setState({lessons: response.body });
    });
  }
  render() {
    return (
      <div>
        <Header/>
        <Grid>
          <Row className="show-grid">
            <RecentActivity data={this.state.lessons} limit="30" />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
