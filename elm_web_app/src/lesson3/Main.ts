type Ask = (a: string) => (b: string) => string;

type Politely = (a: string) => string;

type AskPolitelyAboutFish = (a: string) => string;

// ---

const politely: Politely = phrase => 'Excuse me, ' + phrase;

const ask: Ask = thing => place => 'is there a ' + thing + ' in the ' + place + '?';

const askPolitelyAboutFish: AskPolitelyAboutFish = (a: string) => politely(ask('Fish')(a));

const root = document.getElementById('root');

if (root) {
  root.innerText = askPolitelyAboutFish('car');
  // root.innerText = politely(ask('Fish')('House'));
}
