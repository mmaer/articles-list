import { enableFetchMocks } from 'jest-fetch-mock';
import { formatDate } from './utils';

enableFetchMocks();

describe('Utils', () => {
  it('Should change Norway date to Date object', () => {
    const date = formatDate('2. februar 2019');
    expect(date.constructor.toString().indexOf('Date')).not.toBe(-1);
  });
});
