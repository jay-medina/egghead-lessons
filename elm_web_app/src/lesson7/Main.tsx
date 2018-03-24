import React from 'react';
import ReactDOM from 'react-dom';

type PrintThing = <T>(thing: T) => JSX.Element;

const numbers = [1, 2, 3, 4, 5];

const fruits = [{ name: 'Orange' }, { name: 'Bananas' }];

const printThing: PrintThing = thing => <div>{thing}</div>;

function main() {
  const mainDom = document.getElementById('#root');
  ReactDOM.render(printThing(fruits), mainDom);
}

main();
