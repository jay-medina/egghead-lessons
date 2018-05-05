import React from 'react';
import { sendToErrorReporting } from './errorReport';

type User = {
  name: string;
};

class MyErrorBoundary extends React.Component<{}, { hasError: boolean }> {
  constructor(props = {}) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState(state => ({ ...state, hasError: true }));
    sendToErrorReporting(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return 'Sorry, something went wrong';
    }

    return this.props.children;
  }
}

const Profile = ({ user }: { user: User | null }) => (
  <h2>Name: {user!.name}</h2>
);

interface AppState {
  user: User | null;
}

class App extends React.Component<{}, AppState> {
  constructor(props = {}) {
    super(props);
    this.state = {
      user: { name: 'Jose' }
    };
  }

  updateUser = () => {
    this.setState(state => ({ ...state, user: null }));
  };

  render() {
    return (
      <div>
        <MyErrorBoundary>
          <Profile user={this.state.user} />
          <button onClick={this.updateUser}>Update</button>
        </MyErrorBoundary>
      </div>
    );
  }
}

export default App;
