import React from 'react';
import d3 from 'd3';

class DeviceUsageChart extends React.Component {
  componentDidMount() {
    var svg = d3.select('#device-usage svg')
      .attr('width', 600)
      .attr('height', 300);
      
    // Add tooltip
    d3.select('#device-usage')
      .append('div')
        .attr('class', 'chart-tooltip')
        .classed('hidden', 'true');
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    var svg = d3.select('#device-usage svg');
    var svgWidth = svg.attr('width');
    var svgHeight = svg.attr('height');
    var tooltip = d3.select('#device-usage .chart-tooltip');
      
    // TODO: Replace test data
    var data = [
      {
        key: 'tablet',
        value: 4  
      },
      {
        key: 'mobile',
        value: 11
      },
      {
        key: 'laptop',
        value: 2
      },
      {
        key: 'camera',
        value: 1
      },
      {
        key: 'other',
        value: 1
      }
    ];
    
    // Create layout
    var pie = d3.layout.pie().value(function(d) { 
      return d.value; 
    });
    var slices = pie(data);
    
    var arc = d3.svg.arc().innerRadius(0).outerRadius(150);
    var color = d3.scale.category10();
    
    var g = svg.append('g')
      .attr('transform', `translate(${svgWidth / 2}, ${svgHeight / 2})`);
      
    // Draw pie segments
    g.selectAll('path.slice')
      .data(slices)
        .enter()
          .append('path')
            .attr('class', 'slice')
            .attr('d', arc)
            .attr('fill', function(d) {
              return color(d.data.key);
            })
            .on('mouseover', function(d) {
              tooltip.html(
                `<div>${d.data.key}</div>
                <div>${d.data.value}</div>`
              );
              
              tooltip.style('left', d3.event.pageX + 'px')
                .style('top', d3.event.pageY + 'px')
                .classed('hidden', false);
            })
            .on('mouseout', function(d) {
              tooltip.classed('hidden', true);
            });
            
    // Draw legend
    svg.append('g')
      .attr('class', 'legend')
        .selectAll('text')
        .data(slices)
          .enter()
            .append('text')
              .text(function(d) { return '* ' + d.data.key })
              .attr('fill', function(d) {
                return color(d.data.key);
              })
              .attr('y', function(d, i) {
                return 20 * (i + 1);
              });
    
    return false;
  }
  
  render() {
    return (
      <svg></svg>
    );
  }
}

export default DeviceUsageChart;