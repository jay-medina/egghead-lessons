import React from 'react';
// import './index.css';

const Fruits = () => (
  <>
    <li>Strawberry</li>
    <li>Grapes</li>
  </>
);

class App extends React.Component {
  render() {
    return (
      <ul>
        <li>Peach</li>
        <li>Ananas</li>
        <Fruits />
      </ul>
    );
  }
}

export default App;
