import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    text: '',
  };

  hendleChange = event => {
    this.setState({ text: event.target.value });
  };

  hendleSubmit = event => {
    event.preventDefault();
    const { text } = this.state;
    if (!text.trim()) {
      alert('Add Todo');
      return;
    }

    this.props.onSubmit(text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form onSubmit={this.hendleSubmit}>
          <input
            className="iInput"
            value={this.state.text}
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            onChange={this.hendleChange}
          />
          <button type="submit" className="Button">
            {this.props.nameButton}
            <span className="Button-label">Search</span>
          </button>
        </form>
      </header>
    );
  }
}
