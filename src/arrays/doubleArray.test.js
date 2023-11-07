import { doubleArray } from './ doubleArray';

describe('doubling of array', () => {
  test('summury 10 elements 1 to 10 equals ', () => {
    const arrayOld = [2, 3, 7];
    const arrayNew = doubleArray(arrayOld);
    expect(arrayNew[0]).toBe(arrayOld[0] * 2);
    expect(arrayNew[1]).toBe(arrayOld[1] * 2);
    expect(arrayNew[2]).toBe(arrayOld[2] * 2);
  });
});
