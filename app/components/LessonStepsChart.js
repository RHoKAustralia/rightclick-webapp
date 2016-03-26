import React from 'react';
import Header from './Header';
import { Table, Grid, Row, Col } from 'react-bootstrap';
import d3 from 'd3';

class LessonStepsChart extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    var svgWidth = 600;
    var svgHeight = 300;
    var padding = 30;
    var barPadding = 1;
    var barWidth;
    
    var svg = d3.select('#lesson-steps svg')
      .attr('width', svgWidth)
      .attr('height', svgHeight);
      
    var lessonsBySteps = d3.nest()
      .key(function(d) { return d.steps ? d.steps.length : 0; })
      .entries(nextProps.data);
      
    barWidth = svgWidth / lessonsBySteps.length - barPadding;
      
    // Configure scales
    var xScale = d3.scale.linear()
      .domain([0, d3.max(lessonsBySteps, function(d) {
        return d.key;
      })])
      .range([padding, svgWidth - padding]);
      
    var yScale = d3.scale.linear()
      .domain([0, d3.max(lessonsBySteps, function(d) {
        return d.values.length;
      })])
      .range([svgHeight - padding, padding]);
      
    // Draw bars
    var rects = svg.selectAll('rect').data(lessonsBySteps)
      .enter()
        .append('rect')
          .attr('x', function(d, i) {
            return xScale(d.key);  
          })
          .attr('y', function(d, i) {
            return yScale(d.values.length);
          })
          .attr('height', function(d, i) {
            return svgHeight - yScale(d.values.length) - padding;
          })
          .attr('width', barWidth)
          .attr('fill', 'rgb(125, 200, 0)');
    
    // Draw axes
    svg.append('g')
      .attr('transform', `translate(0, ${svgHeight - padding})`)
      .call(d3.svg.axis()
        .scale(xScale)
        .orient('bottom')
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
      
    return false;
  }
  
  render() {
    return (
      <div id='lesson-steps'>
        <h1>Steps taken</h1>
        <svg></svg>
      </div>
    );
  }
}

export default LessonStepsChart;