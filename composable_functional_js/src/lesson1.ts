namespace lesson01 {
  const nextCharForNumberString = (str: string) => {
    const trimmed = str.trim();
    const number = parseInt(trimmed);
    const nextNumber = number + 1;
    return String.fromCharCode(nextNumber);
  }

  const result = nextCharForNumberString('    64');

  console.log(result);
}
