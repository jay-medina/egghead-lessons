import React from 'react';
// import './index.css';

class City extends React.Component<{ name: string }> {
  state = {
    loading: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => {
        return {
          loading: false
        };
      });
    }, 1000);
  }

  componentWillReceiveProps() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState(() => {
        return {
          loading: false
        };
      });
    }, 1000);
  }

  render() {
    if (this.state.loading) {
      return <div>loading</div>;
    }

    return <div>{this.props.name}</div>;
  }
}

class App extends React.Component<{}, { city: string }> {
  state = {
    city: 'vienna'
  };

  onCityClick = (city: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    this.setState(state => {
      if (state.city === city) {
        return null;
      }

      return {
        city
      };
    });
  };

  render() {
    return (
      <div>
        <p>
          <button onClick={this.onCityClick('vienna')}>Vienna</button>
          <button onClick={this.onCityClick('paris')}>Paris</button>
        </p>
        <City name={this.state.city} />
      </div>
    );
  }
}

export default App;
