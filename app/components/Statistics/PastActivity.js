import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Grid, Row, Col } from 'react-bootstrap';
import PastActivityChart from './PastActivityChart';
import PastActivityOptions from './PastActivityOptions';
import d3 from 'd3';

class PastActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: { 
        start_date: '', 
        end_date: new Date().toISOString().substring(0, 10)
      }
    };
    this.updateFilters = this.updateFilters.bind(this);
  }
  
  updateFilters(start_date, end_date) {
    this.setState({
      filters: {
        start_date: start_date,
        end_date: end_date
      }
    });
  }
  
  render() {
    return (
        <div>
          <h1>Past Activity</h1>
          <PastActivityChart filters={this.state.filters} 
            data={this.props.data} />
          <PastActivityOptions filters={this.state.filters} 
            onChange={this.updateFilters} />
        </div>
    );
  }
}

export default PastActivity;
