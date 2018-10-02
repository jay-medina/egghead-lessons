import fs from 'fs';
import path from 'path';

interface Sum<T> {
  concat: (otherSum: Sum<T>) => Sum<T>;
  x: T;
}

type SumCreator<T> = (x: T) => Sum<T>;

const Sum: SumCreator<number> = x => ({
  x,
  concat: ({ x: y }) => Sum(y + x),
  inspect: () => `Sum(${x})`,
});

const All: SumCreator<boolean> = x => ({
  x,
  concat: ({ x: y }) => All(x && y),
  inspect: () => `All(${x})`,
});

const First = <T>(x: T): Sum<T> & { inspect: () => string } => ({
  x,
  concat: () => First(x),
  inspect: () => `First(${x})`,
});

const acct1 = {
  name: First('Nico'),
  isPaid: All(true),
  points: Sum(10),
  friends: ['Franklin'],
};

const acct2 = {
  name: First('Nico'),
  isPaid: All(false),
  points: Sum(2),
  friends: ['Gatsby'],
};

const rest = acct1
