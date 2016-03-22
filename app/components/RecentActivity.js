import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { Table, Grid, Row, Col } from 'react-bootstrap';
import d3 from 'd3';

class RecentActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = { limit: 100 };
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    // Construct dataset
    var limit = this.state.limit;
    var currentDate = new Date();
    var minDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - limit);
    var lessons = nextProps.data.filter(function(lesson) {
      if (!lesson.start_time) {
        return false;
      }
      var lessonTime = Date.parse(lesson.start_time);
      var dayDiff = Math.round(
        Math.abs(currentDate.getTime() - lessonTime) / (24 * 60 * 60 * 1000)
      );
      return dayDiff < limit;
    });
    var lessonsByDate = d3.nest()
      .key(function(d) { return d3.time.day(new Date(d.start_time)) })
      .entries(lessons);
    
    // D3 configuration
    var svgWidth = 600;
    var svgHeight = 300;
    var padding = 20;
    var barPadding = 1;
    var barWidth = svgWidth / limit - barPadding;
    var svg = d3.select('#recent-activity svg');
    svg.attr('width', svgWidth)
      .attr('height', svgHeight);
    
    var xScale = d3.time.scale()
      .domain([
        minDate.getTime(),
        currentDate.getTime()
      ])
      .range([padding, svgWidth - padding]);
    var yScale = d3.scale.linear()
      .domain([
        0,
        d3.max(lessonsByDate, function(d, i) {
          return d.values.length;
        })
      ])
      .range([svgHeight - padding, padding]);
   
    // Draw bars
    var rects = svg.selectAll('rect').data(lessonsByDate)
      .enter()
        .append('rect')
          .attr('x', function(d, i) {
            return xScale(Date.parse(d.key));  
          })
          .attr('y', function(d, i) {
            return yScale(d.values.length);
          })
          .attr('height', function(d, i) {
            return svgHeight - yScale(d.values.length) - padding;
          })
          .attr('width', barWidth)
          .attr('fill', 'rgb(0, 125, 220)');
          
    // Draw tooltips
    rects.append('svg:title')
      .text(function(d, i) {
        return d.key + ': ' + d.values.length;
      });
     
    // Draw axes
    svg.append('g')
      .attr('transform', 'translate(0,' + (svgHeight - padding) + ')')
      .call(d3.svg.axis()
        .scale(xScale)
        .orient('bottom')
        .tickFormat(d3.time.format("%Y-%m-%d"))
        .ticks(5)
      )
      .attr('fill', 'none')
      .attr('stroke', 'black');
      
    svg.append('g')
      .attr('transform', `translate(${padding}, 0)`)
      .call(d3.svg.axis()
        .scale(yScale)
        .orient('left')
      )
      .attr('fill', 'none')
      .attr('stroke', 'black');

    // Skip render call
    return false;
  }
  
  render() {
    return (
        <div id="recent-activity">
          <h1>Activity in the last {this.state.limit} days</h1>
          <svg></svg>
        </div>
    );
  }
}

export default RecentActivity;
