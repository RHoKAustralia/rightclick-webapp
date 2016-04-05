import React from 'react';
import d3 from 'd3';

class LessonDurationChart extends React.Component {
  componentDidMount() {
    var svg = d3.select('#lesson-duration svg');
    svg.attr('width', 600)
      .attr('height', 300);
      
    // Add tooltip
    d3.select('#lesson-duration')
      .append('div')
        .attr('class', 'chart-tooltip')
        .classed('hidden', 'true');
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    var svg = d3.select('#lesson-duration svg');
    var svgWidth = svg.attr('width');
    var svgHeight = svg.attr('height');
    var tooltip = d3.select('#lesson-duration .chart-tooltip');

    // TODO: Generate labels and intervals dynamically
    var setIncrement = 10;
    var data = [
      {
          label: "< 10 minutes",
          value: 0
      },
      {
          label: "10 - 20 minutes",
          value: 0
      },
      {
          label: "20 - 30 minutes",
          value: 0
      },
      {
          label: "> 30 minutes",
          value: 0
      }
    ];
    
    // Generate dataset
    for (var i = 0; i < nextProps.data.length; i++) {
      var lesson = nextProps.data[i];
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

    // Update chart
    var pie = d3.layout.pie().value(function(d) { return d.value; });
    var slices = pie(data);
    
    var arc = d3.svg.arc().innerRadius(0).outerRadius(150);
    var color = d3.scale.category10();
    
    var g = svg.append('g')
      .attr('transform', `translate(${svgWidth / 2}, ${svgHeight / 2})`);
    
    // Create pie segments  
    g.selectAll('path.slice')
      .data(slices)
        .enter()
          .append('path')
            .attr('class', 'slice')
            .attr('d', arc)
            .attr('fill', function(d) {
              return color(d.data.label);
            })
            .on('mouseover', function(d) {
              tooltip.html(
                `<div>${d.data.label}</div>
                <div>${d.data.value}</div>`
              );
              
              tooltip
                .style('left', d3.event.pageX + 'px')
                .style('top', d3.event.pageY + 'px')
                .classed('hidden', false);
            })
            .on('mouseout', function(d) {
              tooltip.classed('hidden', true);
            });;
            
    // Create legend
    svg.append('g')
      .attr('class', 'legend')
        .selectAll('text')
        .data(slices)
          .enter()
            .append('text')
              .text(function(d) { return '* ' + d.data.label })
              .attr('fill', function(d) { return color(d.data.label); })
              .attr('y', function(d, i) { return 20 * (i + 1); });              
    
    // Prevent render method from being called again
    return false;
  }
  
  render() {
    return (
      <svg></svg>
    );
  }
}

export default LessonDurationChart;