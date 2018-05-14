import React from 'react';
// import './index.css';

// pass along custom attributes
class App extends React.Component {
  render() {
    return (
      <div my-custom-attr={42} className="bar">
        hello!
      </div>
    );
  }
}

export default App;
