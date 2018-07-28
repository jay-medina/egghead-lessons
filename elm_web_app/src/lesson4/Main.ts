const root = document.getElementById('root');

type Dog = {
  name: string;
  age: number;
};

const dog: Dog = {
  name: 'Spock',
  age: 3,
};

const renderDog = (dog: Dog): string => dog.name + ', ' + dog.age;

if (root) {
  root.innerText = renderDog(dog);
}
