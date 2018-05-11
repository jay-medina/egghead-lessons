import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';

class Overlay extends React.Component {
  private overlayContainer: HTMLDivElement;

  constructor(props: {}) {
    super(props);
    this.overlayContainer = document.createElement('div');
    document.body.appendChild(this.overlayContainer);
  }
  render() {
    return ReactDOM.createPortal(
      <div className="overlay">{this.props.children}</div>,
      this.overlayContainer
    );
  }
}

type AppState = {
  overlay: boolean;
};

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      overlay: false
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
    this.setState({ overlay: true });
  };

  private getPortalView = () => {
    if (this.state.overlay) {
      return (
        <Overlay>
          <div>Welcome</div>
        </Overlay>
      );
    }

    return null;
  };
}

export default App;
