namespace lesson01 {
  // const nextCharForNumberString = (str: string) => {
  //   const trimmed = str.trim();
  //   const number = parseInt(trimmed);
  //   const nextNumber = number + 1;
  //   return String.fromCharCode(nextNumber);
  // };

  // const nextCharForNumberString = (str: string) =>
  //   String.fromCharCode(parseInt(str.trim()) + 1);

  const Box = <A>(x: A) => ({
    map: <B>(f: (x: A) => B) => Box(f(x)),
    fold: (f: (x: A) => A) => f(x),
    inspect: () => `Box(${x})`,
  });

  const nextCharForNumberString = (str: string) =>
    Box(str)
      .map(s => s.trim())
      .map(x => parseInt(x))
      .map(i => i + 1)
      .map(x => String.fromCharCode(x))
      .fold(x => x.toLowerCase());

  const result = nextCharForNumberString('    64  ');

  console.log(result);
}
