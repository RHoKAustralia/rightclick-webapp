import React from 'react';
import d3 from 'd3';

class LessonStepsChart extends React.Component {
  componentDidMount() {
    var svg = d3.select('#lesson-steps svg')
      .attr('width', 600)
      .attr('height', 300);
      
    // Add tooltip
    d3.select('#lesson-steps')
      .append('div')
        .attr('class', 'chart-tooltip')
        .classed('hidden', 'true');
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    var svg = d3.select('#lesson-steps svg');
    var svgWidth = svg.attr('width');
    var svgHeight = svg.attr('height');
    var tooltip = d3.select('#lesson-steps .chart-tooltip');
    
    var padding = 40;
    var barPadding = 1;
    var barWidth;
      
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
          .attr('fill', 'rgb(125, 200, 0)')
          .on('mouseover', function(d) {
            tooltip.html(
              `<div>${d.key} steps</div>
              <div>${d.values.length} lessons</div>`
            );
            
            tooltip.style('left', d3.event.pageX + 'px')
              .style('top', d3.event.pageY + 'px')
              .classed('hidden', false);
          })
          .on('mouseout', function(d) {
            tooltip.classed('hidden', false);
          });
    
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
      
    // Label axes
    svg.append('text')
      .attr('x', -svgHeight / 2)
      .attr('y', 10)
      .attr('text-anchor', 'middle')
      .attr('transform', 'rotate(-90)')
      .text('Lessons');
      
    svg.append('text')
      .attr('x', svgWidth / 2)
      .attr('y', svgHeight)
      .attr('text-anchor', 'middle')
      .text('No. of steps');
      
    return false;
  }
  
  render() {
    return (
      <svg></svg>
    );
  }
}

export default LessonStepsChart;