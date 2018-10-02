import fs from 'fs';
import path from 'path';

type Fold<A, B> = <FResult, GResult>(
  f: (x: A) => FResult,
  g: (x: B) => GResult
) => FResult | GResult;

type Either<L, R> = {
  chain: <T>(f: (x: R) => T) => any;
  map: <T>(f: (x: R) => T) => Either<L, T>;
  fold: Fold<L, R>;
};

type RightCreator = <A>(x: A) => Either<never, A>;
type LeftCreator = <A>(x: A) => Either<A, never>;

type TryCatch = <T>(f: () => T) => Either<Error, T>;

const Right: RightCreator = x => ({
  chain: f => f(x),
  map: f => Right(f(x)),
  fold: (_, g) => g(x),
  inspect: () => `Right(${x})`,
});

const Left: LeftCreator = x => ({
  chain: f => Left(x),
  map: f => Left(x),
  fold: (f, _) => f(x),
  inspect: () => `Left(${x})`,
});

const tryCatch: TryCatch = f => {
  try {
    return Right(f());
  } catch (e) {
    return Left(e);
  }
};

// const getPort = () => {
//   try {
//     const str = fs.readFilSync('./src/lesson4/config.json');
//     const config = JSON.parse(str);
//     return config.port;
//   } catch (e) {
//     return 3000;
//   }
// };

interface Config {
  port: number;
}

const getPort = () =>
  tryCatch(() =>
    fs.readFileSync('./src/lesson4/config.json', { encoding: 'UTF8' })
  )
    .chain(c => tryCatch(() => JSON.parse(c) as Config))
    .fold(() => 3000, (c: any) => c.port);

const result = getPort();

console.log(result, path.resolve(__dirname, '../../src/lesson4/config.json'));
