import React from 'react';

const Aux: React.SFC<any> = ({ children }) => (children ? children : null);

const Fruits = () => (
  <Aux>
    <li key="1">Apple</li>
    <li key="2">Oranges</li>
    <li key="3">Bananas</li>
  </Aux>
);

class MoreFruits extends React.Component {
  render() {
    return [<li key="1">Strawberry</li>, <li key="2">Blueberry</li>];
  }
}
const App: React.SFC = () => (
  <div>
    <ul>
      <li>Peach</li>
      <li>Ananas</li>
      <Fruits />
      <MoreFruits />
    </ul>
  </div>
);

export default App;
