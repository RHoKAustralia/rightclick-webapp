import React from 'react';
import { Input, ButtonInput } from 'react-bootstrap';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        
        // Bind non-React methods
        this.updateFilters = this.updateFilters.bind(this);
    }
    
    updateFilters() {
        this.props.onUserInput(
            this.refs.title.value,
            this.refs.start_date.value,
            this.refs.end_date.value
        );
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="title">Lesson title</label>
                    <input className="form-control" type="text" id="title" ref="title"
                        value={this.props.filters.title} placeholder="Title" 
                        onChange={this.updateFilters} />
                </div>
                <div className="form-inline">
                    <div className="form-group">
                        <label htmlFor="start_date">Between</label>
                        <input className="form-control" type="date" id="start_date" ref="start_date"
                            value={this.props.filters.minDate} onChange={this.updateFilters} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="end_date">-</label>
                        <input className="form-control" type="date" id="end_date" ref="end_date"
                            value={this.props.filters.maxDate} onChange={this.updateFilters} />
                    </div>
                </div>
            </form>
        );
    }
}

export default SearchForm;