import { formatNumber } from '../formatNumber';

describe('formatNumber.ts', () => {
  it('should return number in en-US with 2 decimal digits', () => {
    expect(formatNumber(123.345345, 'en-US')).toBe('123.35');
  });
});
