import React from 'react';

type User = {
  name: string;
};

const Profile = ({ user }: { user: User | null }) => (
  <div>Name: {user!.name}</div>
);

interface AppState {
  user: User | null;
  hasError: boolean;
}

class App extends React.Component<{}, AppState> {
  constructor(props = {}) {
    super(props);
    this.state = {
      user: { name: 'Jose' },
      hasError: false
    };
  }

  componentDidCatch() {
    this.setState(state => ({ ...state, hasError: true }));
  }

  updateUser = () => {
    this.setState(state => ({ ...state, user: null }));
  };

  render() {
    if (this.state.hasError) {
      return 'Sorry, something went wrong';
    }

    return (
      <div>
        <Profile user={this.state.user} />
        <button onClick={this.updateUser}>Update</button>
      </div>
    );
  }
}

export default App;
