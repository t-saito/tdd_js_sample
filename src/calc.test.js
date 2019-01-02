import Calc from './calc';

test('adds 1 + 2 to equal 3', () => {
  const calc = new Calc();
  expect(calc.sum(1, 2)).toBe(3);
});

test('4-2=2 となる', () => {
  const calc = new Calc();
  expect(calc.subtract(4, 2)).toBe(2);
});
