import React from 'react';
import d3 from 'd3';

class PastActivityChart extends React.Component {
  componentDidMount() {
    var svg = d3.select('#past-activity-chart');
    svg.attr('width', 600)
      .attr('height', 300);
    
    d3.select('#past-activity')
      .append('div')
        .attr('class', 'chart-tooltip')
        .classed('hidden', 'true');
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    // Get end-points of dataset
    var startDate = nextProps.filters.start_date 
      ? Date.parse(nextProps.filters.start_date) 
      : d3.min(nextProps.data, function(d) { 
        return Date.parse(d.start_time);
      }
    );
    
    var endDate = nextProps.filters.end_date 
      ? Date.parse(nextProps.filters.end_date) 
      : d3.max(nextProps.data, function(d) {
        return Date.parse(d.start_time);
      }
    );
    
    var timespan = Math.floor((endDate - startDate) / (24 * 60 * 60 * 1000));
    
    var lessons = nextProps.data.filter(function(lesson) {
      if (!lesson.start_time) {
        return false;
      }
      var lessonTime = Date.parse(lesson.start_time);
      
      return lessonTime >= startDate && lessonTime <= endDate;
    });
    
    // Group lessons by date
    var lessonsByDate = d3.nest()
      .key(function(d) { return d3.time.day(new Date(d.start_time)) })
      .entries(lessons);
      
    var svg = d3.select('#past-activity-chart');
    var svgWidth = svg.attr('width');
    var svgHeight = svg.attr('height');
    var tooltip = d3.select('#past-activity .chart-tooltip');
    
    var padding = 40;
    var barPadding = 1;
    var barWidth = svgWidth / timespan - barPadding;
    var dateFormatter = d3.time.format('%d %b %Y');
    
    // Delete existing svg elements
    svg.selectAll('*').remove();
    
    // Configure scales
    var xScale = d3.time.scale()
      .domain([
        startDate, endDate
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
          .attr('fill', 'rgb(0, 125, 220)')
          .attr('class', 'bar')
          // Draw tooltip on hover
          .on('mouseover', function(d) {
              var dateText = dateFormatter(new Date(d.key));
              var countText = d.values.length + ' lesson' + (d.values.length > 1 ? 's' : '');
              
              tooltip.html(
                `<div>${dateText}</div>
                <div>${countText}</div>`
              );
              tooltip.style('left', d3.event.pageX + 'px')
                .style('top', d3.event.pageY + 'px')
                .classed('hidden', false);
          })
          .on('mouseout', function(d) {
              tooltip.classed('hidden', true);
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

    // Label axes
    svg.append('text')
      .attr('x', -svgHeight / 2)
      .attr('y', 10)
      .attr('text-anchor', 'middle')
      .attr('transform', 'rotate(-90)')
      .text('Lessons held');
      
    svg.append('text')
      .attr('x', svgWidth / 2)
      .attr('y', svgHeight)
      .attr('text-anchor', 'middle')
      .text('Date');

    // Skip render call
    return false;
  }
  
  render() {
    return (
      <svg id='past-activity-chart'></svg>
    );
  }
}

export default PastActivityChart;