namespace lesson02 {
  const Box = <A>(x: A) => ({
    map: <B>(f: (x: A) => B) => Box(f(x)),
    fold: <B>(f: (x: A) => B) => f(x),
    inspect: () => `Box(${x})`,
  });

  // const moneyToFloat = (str: string) => parseFloat(str.replace(/\$/g, ''));

  // const percentToFloat = (str: string) => {
  //   const replaced = str.replace(/\%/g, '');
  //   const num = parseFloat(replaced);
  //   return num * 0.01;
  // };

  // const applyDiscount = (price: string, discount: string) => {
  //   const cost = moneyToFloat(price);
  //   const savings = percentToFloat(discount);
  //   return cost - cost * savings;
  // };

  const moneyToFloat = (str: string) =>
    Box(str.replace(/\$/g, '')).fold(parseFloat);

  const percentToFloat = (str: string) =>
    Box(str.replace(/\%/g, ''))
      .map(parseFloat)
      .fold(x => x * 0.01);

  const applyDiscount = (price: string, discount: string) =>
    Box(price)
      .map(moneyToFloat)
      .fold(cost =>
        Box(percentToFloat(discount)).fold(savings => cost - cost * savings)
      );

  const result = applyDiscount('$5.00', '20%');
  console.log(result);
}
