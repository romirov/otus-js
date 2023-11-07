import { copyObjectWithNewField } from './copyObjectWithNewField';

describe('object copy', () => {
  test('copy object with new field', () => {
    const admin = copyObjectWithNewField();
    expect(admin).toHaveProperty('name', 'admin');
    expect(admin).toHaveProperty('role', 'admin');
  });
});
