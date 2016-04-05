import React from 'react';
import DeviceUsageChart from './DeviceUsageChart';

class DeviceUsage extends React.Component {
  render() {
    return (
      <div id='device-usage'>
        <h1>Device Usage</h1>
        <DeviceUsageChart data={this.props.data} />
      </div>
    );
  }
}

export default DeviceUsage;