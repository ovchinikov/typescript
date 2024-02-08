export type operation = 'add' | 'subtract' | 'multiply' | 'divide';

const calculator = (a: number, b: number, op: operation): number => {
  if (op === 'add') {
    return a + b;
  } else if (op === 'subtract') {
    return a - b;
  } else if (op === 'multiply') {
    return a * b;
  } else if (op === 'divide') {
    return a / b;
  } else {
    throw new Error('Operation not supported');
  }
};

export default calculator;
