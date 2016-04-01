import React from 'react';

class PastActivityOptions extends React.Component {
  constructor(props) {
    super(props);
    
    this.onChange = this.onChange.bind(this);
  }
  
  onChange() {
    this.props.onChange(
      this.refs.start_date.value,
      this.refs.end_date.value
    );
  }
  
  render() {
    return (
      <form>
        <label htmlFor='start_date'>From</label>
        <input className="form-control" type='date' id='start_date' ref='start_date' 
          value={this.props.filters.start_date} onChange={this.onChange} />
        <label htmlFor='end_date'>To</label>
        <input className="form-control" type='date' id='end_date' ref='end_date' 
          value={this.props.filters.end_date} onChange={this.onChange} />
      </form>
    );
  }
}

export default PastActivityOptions;