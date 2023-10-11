/*
 * This function works as a creator of new array
 * start: Index where the array is going to start
 * stop: Index where the array is going to stop
 * step: Number of steps it is going to jump
 */

export const arrayRange = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step + 1 }, (value, index) => start + index * step);
