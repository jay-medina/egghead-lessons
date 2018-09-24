import React from 'react';
import ReactDOM from 'react-dom';

type PrintThing = <T>(a: T) => JSX.Element;

const printThing: PrintThing = i => <ul>{i}</ul>;

const numbers = [1, 2, 3, 4, 5];

const fruits = [{ name: 'Orange' }, { name: 'Banana' }];

function main() {
  const mainDom = document.getElementById('#root');

  const App = () => <div>{fruits.map(printThing)}</div>;

  ReactDOM.render(<App />, mainDom);
}

main();
