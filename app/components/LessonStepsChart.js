import React from 'react';
import Header from './Header';
import { Table, Grid, Row, Col } from 'react-bootstrap';
var LineChart = require("react-chartjs").Line;

class LessonStepsChart extends React.Component {
  constructor(props) {
    super(props);
    // Chart configuration
    this.state = {
      options: {
        responsive: true
      },
      data: {
        labels: [],
        datasets: [
          {
            fillColor: '#FFD700',
            strokeColor: '#AA9000',
            data: []
          }
        ]
      }
    };
  }
  
  componentWillReceiveProps(nextProps) {
    var dataset = this.state.data.datasets[0].data;
    
    // Populate dataset
    // Count number of lessons that took x amount of steps
    for (var i = 0; i < nextProps.data.length; i++) {
      var lesson = nextProps.data[i];
      if (lesson.steps) {
        if (typeof dataset[lesson.steps.length] == 'undefined') {
          dataset[lesson.steps.length] = 0;
        }
        else {
          dataset[lesson.steps.length]++;
        }
      }
    }
    
    // Initialise labels and unused elements in dataset array
    for (var i = 0; i < dataset.length; i++) {
      if (typeof dataset[i] == 'undefined') {
        dataset[i] = 0;
      }
      this.state.data.labels.push(i);
    }
  }
  
  render() {
    return (
      <div>
        <h1>Steps taken</h1>
        <LineChart data={this.state.data} options={this.state.options} redraw />
      </div>
    );
  }
}

export default LessonStepsChart;