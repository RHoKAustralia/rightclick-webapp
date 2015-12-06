import React from 'react';
import Header from './Header';
import LessonDetails from './LessonDetails';
import { Grid, Row, Col } from 'react-bootstrap';

class Lesson extends React.Component {
  render() {
    // TODO: Replace mock object with actual lesson data
    // var lessonID = this.props.param.id
    var lesson = {
        "id": 0,
        "tutor_name": "esse deserunt",
        "tutor_email": "mail@example.com",
        "student_name": "elit tempor",
        "student_email": "",
        "start_time": "2014-12-06T08:07:06 -11:00",
        "end_time": "2014-07-03T03:37:19 -10:00",
        "name": "laborum esse deserunt tempor elit",
        "device" : "lorem",
        "steps": [
          {
            "type": "text",
            "data": "dolor dolore et enim commodo enim mollit sunt enim cillum officia laboris aliquip ipsum officia culpa eu culpa esse cupidatat",
            "sequence_no": 0
          },
          {
            "type": "photo",
            "data": "velit nostrud qui eiusmod aute est et occaecat qui reprehenderit nisi minim nisi velit tempor eiusmod aute velit ut esse",
            "sequence_no": 1
          },
          {
            "type": "text",
            "data": "est reprehenderit sint elit voluptate voluptate aliquip ex ut anim commodo eu pariatur consectetur excepteur fugiat eu culpa ad proident",
            "sequence_no": 2
          }
        ]
    };
    return (
      <div>
        <Header/>
        <Grid>
          <Row className="show-grid">
            <LessonDetails lesson={lesson} />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Lesson;
