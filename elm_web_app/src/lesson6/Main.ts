namespace Main {
  interface Person {
    name: string;
    age: number;
  }

  const people = [{ name: 'Jose', age: 2931 }, { name: 'Gimli', age: 139 }];

  // type Names = (peeps: Person[]) => string[];

  // const names: Names = peeps => peeps.map(p => p.name);

  type NameExist = (
    name: String
  ) => (memo: Person | null, peep: Person) => Person | null;

  const nameExist: NameExist = name => (memo, peep) => {
    if (memo !== null) return memo;

    if (peep.name === name) {
      return peep;
    }

    return null;
  };

  type FindPerson = (name: string) => (peeps: Person[]) => Person | null;

  const findPerson: FindPerson = name => peeps =>
    peeps.reduce(nameExist(name), null);

  const root = document.getElementById('root');

  if (root) {
    const person = findPerson('Same')(people);
    if (person) {
      root.innerText = JSON.stringify(person);
    } else {
      root.innerText = 'Nothing';
    }
  }
}
