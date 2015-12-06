import React from 'react';

class ChartRow extends React.Component {
	render() {
		var style = {
			height: '10px',
			backgroundColor: '#69c',
			width: (this.props.value / this.props.max * 100) + '%'
		};
		
		return (
			<tr>
				<td>{this.props.name}</td>
				<td><div style={style}></div></td>
				<td>{this.props.value}</td>
			</tr>	
		);
	}
}

export default ChartRow;
