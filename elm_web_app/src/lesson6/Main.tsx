import React from 'react';
import ReactDOM from 'react-dom';

interface Ship {
  name: string;
  cost: number;
}

const ships = [
  { name: 'X-wing', cost: 149999 },
  { name: 'Millennium Falcon', cost: 100000 },
  { name: 'Death Star', cost: 1000000000000 },
];

const RenderShip: React.SFC<{ ship: Ship }> = ({ ship }) => (
  <li>
    <span>{ship.name}</span>
    <span>,</span>
    <b>{ship.cost}</b>
  </li>
);

const RenderShips: React.SFC<{ ships: Ship[] }> = ({ ships }) => (
  <div style={{ fontFamily: '-apply-system', padding: '1em' }}>
    <h1>Ships</h1>
    <ul>{ships.map((ship, i) => <RenderShip key={i} ship={ship} />)}</ul>
  </div>
);

const mainDom = document.getElementById('root');
ReactDOM.render(<RenderShips ships={ships} />, mainDom);
