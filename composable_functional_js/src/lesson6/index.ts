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

const res = Sum(1).concat(Sum(2));

console.log(res);

const res2 = All(true).concat(All(true));

console.log(res2);

const res3 = First('blah').concat(First('ice cream'));

console.log(res3);
