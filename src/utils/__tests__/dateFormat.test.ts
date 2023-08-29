import { dateFormat } from '../dateFormat';

describe('dateFormat.ts', () => {
  it('should return date in LL format(moment.js)', () => {
    expect(dateFormat(new Date('2023-12-17T03:24:00'))).toBe(
      'December 17, 2023'
    );
  });
});
