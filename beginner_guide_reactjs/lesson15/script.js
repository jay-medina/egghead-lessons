// @ts-check

class NameForm extends React.Component {
  state = { error: this.props.getErrorMessage('') };

  handleSubmit = event => {
    event.preventDefault();
    const value = event.target.elements.username.value;
    const error = this.props.getErrorMessage(value);

    if (error) {
      alert(`error: ${error}`);
    } else {
      alert(`success: ${value}`);
    }
  };

  handleChange = event => {
    const { value } = event.target;

    this.setState({
      error: this.props.getErrorMessage(value)
    });
  };

  render() {
    const { error } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={this.handleChange} name="username" />
        </label>
        {error ? <div style={{ color: 'red' }}>{error}</div> : null}
        <button type="submit" disabled={Boolean(error)}>
          Submit
        </button>
      </form>
    );
  }
}
const element = (
  <NameForm
    getErrorMessage={value => {
      if (value.length < 3) {
        return 'Value must be at least 3 characters';
      }
      if (!value.includes('s')) {
        return 'value must include an s';
      }
      return null;
    }}
  />
);

ReactDOM.render(element, document.getElementById('root'));
