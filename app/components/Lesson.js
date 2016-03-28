import React from 'react';
import Header from './Header';
import LessonDetails from './Lesson/LessonDetails';
import { Grid, Row, Col } from 'react-bootstrap';
import request from 'superagent';

class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lesson: {}};
  }
  componentDidMount() {
    var that = this;
    let { id } = this.props.params
    request.get('http://rightclick.herokuapp.com/api/lessons/'+id)
    .set('Accept', 'application/json')
    .set('x-api-key', '5b23868a29a8b99a4a7a04bd912c79c1550d8e66')
    .end(function(err, response) {
      if (err) return console.error(err);
      console.log(response.body)
      that.setState({lesson: response.body || {} });
    });
  }
  render() {
    // TODO: Replace mock object with actual lesson data
    // var lessonID = this.props.param.id
    return (
      <div>
        <Header/>
        <Grid>
          <Row className="show-grid">
            <LessonDetails lesson={this.state.lesson} />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Lesson;
