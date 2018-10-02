namespace lesson03 {
  type Fold<A, B> = <FResult, GResult>(
    f: (x: A) => FResult,
    g: (x: B) => GResult
  ) => FResult | GResult;

  type Either<L, R> = {
    map: <T>(f: (x: R) => T) => Either<L, T>;
    fold: Fold<L, R>;
  };

  type RightCreator = <A>(x: A) => Either<never, A>;
  type LeftCreator = <A>(x: A) => Either<A, never>;

  const Right: RightCreator = x => ({
    map: f => Right(f(x)),
    fold: (_, g) => g(x),
    inspect: () => `Right(${x})`,
  });

  const Left: LeftCreator = x => ({
    map: f => Left(x),
    fold: (f, _) => f(x),
    inspect: () => `Left(${x})`,
  });

  interface Colors {
    [colorName: string]: string;
  }

  const findColor = (name: string): Either<null, string> => {
    const colors: Colors = {
      red: '#ff4444',
      blue: '#3b5998',
      yellow: '#fff68f',
    };

    if (colors[name]) {
      return Right(colors[name]);
    }

    return Left(null);
  };
  // const result = Left(2)
  //   .map(x => x + 1)
  //   .map(x => x / 2)
  //   .fold(x => 'error', x => x);

  // const result = findColor('red')
  //   .map(c => c.slice(1))
  //   .fold(_ => 'no color', c => c.toUpperCase());

  const result = findColor('test')
    .map(c => c.slice(1))
    .fold(() => 'no color', (c: string) => c.toUpperCase());

  console.log(result);
}
