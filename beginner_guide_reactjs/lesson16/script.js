class MyFancyForm extends React.Component {
  static availableOptions = [
    'apple',
    'grape',
    'cherry',
    'orange',
    'pear',
    'peach'
  ];
  state = {
    multiline: '',
    commaSeparated: '',
    multiSelect: []
  };
  handleCommaSeparatedChange = event => {
    const { value } = event.target;
    const valuesAsArray = value
      .split(',')
      .map(v => v.trim())
      .filter(x => x.length > 0);

    this.setState({
      commaSeparated: value,
      multiline: valuesAsArray.join('\n'),
      multiSelect: valuesAsArray
    });
  };
  handleMultilineChange = event => {
    const { value } = event.target;
    const valuesAsArray = value
      .split('\n')
      .map(v => v.trim())
      .filter(x => x.length > 0);

    this.setState({
      commaSeparated: valuesAsArray.join(', '),
      multiline: value,
      multiSelect: valuesAsArray
    });
  };
  handleMultiSelectChange = event => {
    const newValues = Array.from(event.target.selectedOptions).map(
      o => o.value
    );

    this.setState({
      commaSeparated: newValues.join(', '),
      multiline: newValues.join('\n'),
      multiSelect: newValues
    });
  };

  render() {
    const { commaSeparated, multiline, multiSelect } = this.state;
    return (
      <form>
        <div>
          <label>
            comma separated values:
            <br />
            <input
              type="text"
              value={commaSeparated}
              onChange={this.handleCommaSeparatedChange}
            />
          </label>
        </div>
        <div>
          <label>
            multiline values:
            <br />
            <textarea
              value={multiline}
              rows={MyFancyForm.availableOptions.length}
              onChange={this.handleMultilineChange}
            />
          </label>
        </div>
        <div>
          <label>
            multiSelect values:
            <br />
            <select
              multiple
              value={multiSelect}
              size={MyFancyForm.availableOptions.length}
              onChange={this.handleMultiSelectChange}
            >
              {MyFancyForm.availableOptions.map(optionValue => (
                <option key={optionValue} value={optionValue}>
                  {optionValue}
                </option>
              ))}
            </select>
          </label>
        </div>
      </form>
    );
  }
}

ReactDOM.render(<MyFancyForm />, document.getElementById('root'));
