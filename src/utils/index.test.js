import { calculateMonthlyPayment } from './index';

it('correctly calculates mortgage payments', () => {
  expect(calculateMonthlyPayment(100, 3, 10)).toBe('0.97');
  expect(calculateMonthlyPayment(800000, 1.97, 30)).toBe('2944.97');
  expect(calculateMonthlyPayment(1208000, 2.80, 20)).toBe('6579.24');
});
