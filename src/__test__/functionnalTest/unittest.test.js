import getCurrentDate from '../../components/header/headerhelper';

describe('getCurrentDate', () => {
  test('getCurrentDate give right result', () => {
    expect(getCurrentDate()).toStrictEqual(['Wednesday', 20, 'April']);
  });
});
