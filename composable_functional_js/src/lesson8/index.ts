import fs from 'fs';
import path from 'path';

interface Sum<T> {
  concat: (otherSum: Sum<T>) => Sum<T>;
  // empty: () => Sum<T>;
  x: T;
}

interface SumCreator<T> {
  (x: T): Sum<T>;
  empty?: () => Sum<T>;
}

const Sum: SumCreator<number> = x => ({
  x,
  concat: ({ x: y }) => Sum(y + x),
  inspect: () => `Sum(${x})`,
});

Sum.empty = () => Sum(0);

const All: SumCreator<boolean> = x => ({
  x,
  concat: ({ x: y }) => All(x && y),
  inspect: () => `All(${x})`,
});

All.empty = () => All(true);

const First = <T>(x: T): Sum<T> & { inspect: () => string } => ({
  x,
  concat: () => First(x),
  inspect: () => `First(${x})`,
});

const rest = Sum.empty().concat(Sum(1).concat(Sum(2)));

const rest2 = All.empty().concat(All(true).concat(All(true)));

const res3 = First(10)
  .concat(First(1))
  .concat(First(122));

console.log(rest);

console.log(rest2);

console.log(res3);

const sum = (xs: number[]) => xs.reduce((x, y) => x + y, 0);

const all = (xs: boolean[]) => xs.reduce((x, y) => x && y, true);

const first = <T>(xs: T[]) => xs.reduce((f, _) => f);
