namespace lesson11 {
  interface Box<A> {
    map: <B>(f: (x: A) => B) => Box<B>;
    fold: <B>(f: (x: A) => B) => B;
  }

  interface LazyBox<A> {
    map: <B>(f: (x: A) => B) => LazyBox<B>;
    fold: <B>(f: (x: A) => B) => B;
  }

  type BoxCreator = <A>(x: A) => Box<A>;

  type LazyBoxCreator = <A>(f: () => A) => LazyBox<A>;

  const Box: BoxCreator = x => ({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: () => `Box(${x})`,
  });

  const LazyBox: LazyBoxCreator = g => ({
    fold: f => f(g()),
    map: f => LazyBox(() => f(g())),
  });

  const res = LazyBox(() => '   64  ')
    .map(s => s.trim())
    .map(x => parseInt(x))
    .map(i => i + 1)
    .map(x => String.fromCharCode(x))
    .fold(x => x.toLowerCase());

  console.log(res);
}
