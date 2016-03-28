import React from 'react';
import d3 from 'd3';

class DeviceUsage extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    var svg = d3.select('#device-usage svg');
    var svgWidth = 600;
    var svgHeight = 300;
    
    svg.attr('width', svgWidth)
      .attr('height', svgHeight);
      
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
      <div id='device-usage'>
        <h1>Device Usage</h1>
        <svg></svg>
      </div>
    );
  }
}

export default DeviceUsage;