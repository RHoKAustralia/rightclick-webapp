import React from 'react';
import Header from './Header';
import { Table, Grid, Row, Col } from 'react-bootstrap';
var PieChart = require("react-chartjs").Pie;

class LessonDuration extends React.Component {
  render() {
    // Chart configuration
    var options = {
      responsive: true
    };
    // TODO: Generate labels and intervals dynamically
    var setIncrement = 10;
    var data = [
      {
          value: 0,
          color: "#F7464A",
          highlight: "#FF5A5E",
          label: "< 10 minutes"
      },
      {
          value: 0,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "10 - 20 minutes"
      },
      {
          value: 0,
          color: "#FDB45C",
          highlight: "#FFC870",
          label: "20 - 30 minutes"
      },
      {
          value: 0,
          color: "#6699CC",
          highlight: "#99CCFF",
          label: "> 30 minutes"
      }
    ];
    
    // Generate dataset
    for (var i = 0; i < this.props.data.length; i++) {
      var lesson = this.props.data[i];
      // Calculate time taken in lesson
      var startTime = Date.parse(lesson.start_time);
      var endTime = Date.parse(lesson.end_time);
      if (!(isNaN(startTime) || isNaN(endTime))) {
        // Find appropriate bin to increment
        var duration = Math.round((endTime - startTime) / (60 * 1000));
        var setIndex = Math.round(duration / setIncrement);
        if (setIndex >= data.length) {
          setIndex = data.length - 1;
        }
        data[setIndex].value++;
      }
    }

    return (
      <div>
        <h1>Lesson duration</h1>
        <PieChart data={data} options={options} redraw />
      </div>
    );
  }
}

export default LessonDuration;