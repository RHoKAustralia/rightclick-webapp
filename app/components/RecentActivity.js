import React from 'react';
import Header from './Header';
import { Table, Grid, Row, Col } from 'react-bootstrap';
import ChartRow from './ChartRow';

class RecentActivity extends React.Component {
  render() {
    // Calculate statistics for each day
    var dayActivities = {};
    var maxCount = 0;
    for (var i = 0; i < this.props.data.length; i++) {
      var lesson = this.props.data[i];
      var lessonDate = new Date(lesson.start_time.substring(0, lesson.start_time.indexOf(' ')));
      
      var dayDiff = Math.round(Math.abs(new Date().getTime() - lessonDate.getTime())) / (24 * 60 * 60 * 1000);
      if (dayDiff < this.props.limit) {
        var key = lessonDate.toDateString();
        if (typeof dayActivities[key] === 'undefined') {
          dayActivities[key] = 1;
        }
        else {
          dayActivities[key]++;
        }
        if (dayActivities[key] > maxCount) {
          maxCount = dayActivities[key];
        }
      }
    }
    
    // Generate rows for each day
    var Rows = [];
    for (var day in dayActivities) {
      var row = (
        <ChartRow name={day} max={maxCount} value={dayActivities[day]} />
      );
      Rows.push(row);
    }

    return (
        <div>
          <h1>Activity in the last {this.props.limit} days</h1>
          <Table className="chart">
            <thead>
              <tr>
                <td>Day</td>
                <td>Lessons held</td>
                <td>Count</td>
              </tr>
            </thead>
            <tbody>
              {Rows}
            </tbody>
          </Table>
        </div>
    );
  }
}

export default RecentActivity;
