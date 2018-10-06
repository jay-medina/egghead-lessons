export interface Sum<T> {
  concat: (otherSum: Sum<T>) => Sum<T>;
  fold: <B>(f: (x: T) => B) => B;
  x: T;
}

interface SumCreator<T> {
  (x: T): Sum<T>;
  empty: () => Sum<T>;
}

export const Sum: SumCreator<number> = x => ({
  x,
  concat: ({ x: y }) => Sum(y + x),
  fold: f => f(x),
  inspect: () => `Sum(${x})`,
});

Sum.empty = () => Sum(0);

export type List = <T>(
  ...items: Sum<T>[]
) => {
  fold: (initial: Sum<T>) => Sum<T>;
};

export const List: List = (...items) => ({
  fold: initial => items.reduce((acc, next) => acc.concat(next), initial),
});
