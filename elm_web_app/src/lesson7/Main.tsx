import React from 'react';
import ReactDOM from 'react-dom';

interface Ship {
  name: string;
  cost: number;
}

const ships = [
  { name: 'X-wing', cost: 149999 },
  { name: 'Millennium Falcon', cost: 100000 },
  { name: 'Death Star', cost: 1000000000000 }
];

const renderShip: React.SFC<Ship> = ship => (
  <li>
    <span>{ship.name}</span>
    <span>,</span>
    <b>{ship.cost}</b>
  </li>
);

const RenderShips = () => (
  <div style={{ padding: '1em' }}>
    <h1>Ships</h1>
    <ul>{ships.map(renderShip)}</ul>
  </div>
);

function main() {
  const mainDom = document.getElementById('#main');
  ReactDOM.render(<RenderShips />, mainDom);
}
