type Dog = {
  name: string;
  age: number;
};

const dog: Dog = {
  name: "Spock",
  age: 3
};

const renderDog = ({ name, age }: Dog): string => `${name}, ${age}`;

const root = document.getElementById("root");

if (root) {
  root.innerText = renderDog(dog);
}
