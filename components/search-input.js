import React from 'react';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onSubmit(this.state.value);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    this.props.onChange(this.state.value);
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          type="text"
          value={ this.state.value }
          onChange={ this.handleChange }
          className="search_input_input" />
      </form>
    );
  }
}

export default SearchInput;
