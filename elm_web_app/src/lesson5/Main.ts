namespace Main {
  type Person = {
    name: string;
    age: number;
  };

  const people: Person[] = [{ name: 'Jose', age: 2931 }, { name: 'meow', age: 139 }];

  // type Names = (p: Person[]) => string[];
  // const names: Names = p => p.map(peep => peep.name);

  type FindPerson = (n: string) => (p: Person[]) => Person | undefined;
  const findPerson: FindPerson = name => people => {
    const isPersonInList = (memo: Person | undefined, nextPerson: Person) => {
      if (memo) {
        return memo;
      }

      if (nextPerson.name === name) {
        return nextPerson;
      }

      return undefined;
    };

    return people.reduce(isPersonInList, undefined);
  };

  const root = document.getElementById('root')!;

  const person = findPerson('Jose')(people);

  if (person) {
    root.innerText = JSON.stringify(person);
  } else {
    root.innerText = 'Nothing';
  }
}
