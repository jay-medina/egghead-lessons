import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';

interface OverlayProps {
  onClose(): void;
}

class Overlay extends React.Component<OverlayProps> {
  private overlayContainer: HTMLDivElement;

  constructor(props: OverlayProps) {
    super(props);
    this.overlayContainer = document.createElement('div');
    document.body.appendChild(this.overlayContainer);
  }

  componentWillUnmount() {
    document.body.removeChild(this.overlayContainer);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="overlay">
        <button onClick={this.props.onClose}>X</button>
        {this.props.children}
      </div>,
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
        <button onClick={this.toggleOverlay(true)}>Create Portal</button>
        {this.getPortalView()}
      </div>
    );
  }

  private toggleOverlay = (overlay: boolean) => () => {
      this.setState({ overlay });
  };

  private getPortalView = () => {
    if (this.state.overlay) {
      return (
        <Overlay onClose={this.toggleOverlay(false)}>
          <div>Welcome</div>
        </Overlay>
      );
    }

    return null;
  };
}

export default App;
