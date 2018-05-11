import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';

type AppState = {
  element: null | HTMLDivElement;
};

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      element: null
    };
  }
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <button onClick={this.createPortalOnClick}>Create Portal</button>
        {this.getPortalView()}
      </div>
    );
  }

  private createPortalOnClick = () => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    this.setState({ element });
  };

  private getPortalView = () => {
    if (this.state.element) {
      return ReactDOM.createPortal(
        <div className="overlay">Welcome</div>,
        this.state.element
      );
    }

    return null;
  };
}

export default App;
