import React from 'react';
import Header from './Header';
import LessonsTable from './LessonsTable';
import SearchForm from './SearchForm';
import { Grid, Row, Col } from 'react-bootstrap';
import request from 'superagent';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        lessons: [],
        filters: {
            title: '',
            start_date: '',
            end_date: ''
        }
    };
    
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  
  handleUserInput(titleFilter, start_date, end_date) {
      this.setState({
         filters: {
             title: titleFilter,
             start_date: start_date,
             end_date: end_date
         } 
      });
  }
  
  componentDidMount() {
    var that = this;
    request.get('http://rightclick.herokuapp.com/api/lessons')
    .set('Accept', 'application/json')
    .set('x-api-key', '5b23868a29a8b99a4a7a04bd912c79c1550d8e66')
    .end(function(err, response) {
      if (err) return console.error(err);
      that.setState({lessons: response.body });
    });
  }
  render() {
    return (
      <div>
        <Header/>
        <Grid>
          <Row className="show-grid">
            <SearchForm filters={this.state.filters} onUserInput={this.handleUserInput} />
            <LessonsTable lessons={this.state.lessons} filters={this.state.filters} />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
