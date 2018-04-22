class App extends React.Component {
  static allItems = [
    { id: 'a', value: 'apple' },
    { id: 'o', value: 'orange' },
    { id: 'g', value: 'grape' },
    { id: 'p', value: 'pear' }
  ];

  state = {
    items: []
  };

  addItem = () => {
    this.setState(({ items }) => ({
      items: [...items, App.allItems.find(i => !items.includes(i))]
    }));
  };

  removeItem = item => {
    this.setState(({ items }) => ({
      items: items.filter(i => i.id !== item.id)
    }));
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <button
          disabled={items.length >= App.allItems.length}
          onClick={this.addItem}
        >
          +
        </button>
        {items.map((item, index) => (
          <div key={item.id}>
            <button onClick={() => this.removeItem(item)}>-</button>
            {item.value}: <input />
          </div>
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
