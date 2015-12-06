import React from 'react';
import Header from './Header';
import LessonsTable from './LessonsTable';
import { Grid, Row, Col } from 'react-bootstrap';
import request from 'superagent';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lessons: []};
  }
  componentDidMount() {
    var that = this;
    request.get('http://rightclick.herokuapp.com/api/lessons')
    .set('Accept', 'application/json')
    .set('x-api-key', '5b23868a29a8b99a4a7a04bd912c79c1550d8e66')
    .end(function(err, response) {
      if (err) return console.error(err);
      console.log(response.body);
      that.setState({lessons: response.body });
    });
  }
  render() {
    return (
      <div>
        <Header/>
        <Grid>
          <Row className="show-grid">
            <LessonsTable lessons={this.state.lessons}/>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
