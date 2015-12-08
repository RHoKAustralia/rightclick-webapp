import React from 'react';
import Header from './Header';
import { Table, Grid, Row, Col } from 'react-bootstrap';
var LineChart = require("react-chartjs").Line;

class RecentActivity extends React.Component {
  render() {
    // Chart configuration
    var options = {
      responsive: true
    };
    var data = {
      labels: [],
      datasets: [
        {
          data: []
        }
      ]
    };
    
    // Initialise values for past days in dataset
    var date = new Date();
    for (var i = 0; i < this.props.limit; i++) {
      date.setDate(date.getDate() - 1);
      data.labels.push(date.toDateString());
      data.datasets[0].data.push(0);
    }
    // Re-order dataset
    data.labels.reverse();
    data.datasets[0].data.reverse();
    
    // Count lessons for each day
    for (var i = 0; i < this.props.data.length; i++) {
      var lesson = this.props.data[i];
      if (lesson.start_time) {
        // Include lesson in count if lesson held recently (defined by limit)
        var lessonDate = new Date(lesson.start_time.substring(0, lesson.start_time.indexOf(' ')));
        var dayDiff = Math.round(Math.abs(new Date().getTime() - lessonDate.getTime())) / (24 * 60 * 60 * 1000);
        if (dayDiff < this.props.limit) {
          var key = lessonDate.toDateString();
          var dataSetIndex = data.labels.indexOf(key);
          data.datasets[0].data[dataSetIndex]++;
        }
      }
    }

    return (
        <div>
          <h1>Activity in the last {this.props.limit} days</h1>
          <LineChart data={data} options={options} />
        </div>
    );
  }
}

export default RecentActivity;
