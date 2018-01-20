export const addCounter = (list: number[]): number[] => {
  return [...list, 0];
};

export const removeCounter = (list: number[], index: number) => {
  return [...list.slice(0, index), ...list.slice(index + 1)];
};

export const incrementCounter = (list: number[], index: number) => {
  if (index < 0 || index >= list.length) {
    return list;
  }
  return [...list.slice(0, index), list[index] + 1, ...list.slice(index + 1)];
};
