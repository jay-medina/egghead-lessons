const politely = (text: string) => `Excuse me, ${text}`;

const ask = (thing: string) => (place: string) =>
  `is there a ${thing} in the ${place}?`;

const askPolitelyAboutFish = (place: string) => {
  const aboutFish = ask("fish")(place);

  return politely(aboutFish);
};

const root = document.getElementById("root");

if (root) {
  root.innerText = askPolitelyAboutFish("car");
}
