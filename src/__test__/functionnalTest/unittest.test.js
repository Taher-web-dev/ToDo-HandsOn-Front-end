import getCurrentDate from '../../components/header/headerhelper';
import { getTodaytask, fulfilledTaskcompter } from '../../components/todo/todohelper';

describe('getCurrentDate', () => {
  test('getCurrentDate give right result', () => {
    const d = new Date();
    const weekDay = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const yearMonths = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const currentDay = weekDay[d.getDay()];
    const currentMonth = yearMonths[d.getMonth()];
    expect(getCurrentDate()).toStrictEqual([currentDay, d.getDate(), currentMonth]);
  });
});

describe('getTodaytask', () => {
  test('getTodaytask return today tasks given an abject of tasks for different days.', () => {
    const today = new Date();
    const currentDay = `${today.getFullYear()}-${today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1}-${today.getDate()}`;
    const tasks = {
      data: [
        {
          id: 2,
          description: 'Do my daily workout',
          done: false,
          day: '2022-04-20',
        },
        {
          id: 1,
          description: 'Visite my paraents',
          done: true,
          day: '2022-04-20',
        },
        {
          id: 5,
          description: 'work on my project',
          done: true,
          day: currentDay,
        },
      ],
    };
    expect(getTodaytask(tasks)).toBeInstanceOf(Array);
    expect(getTodaytask(tasks)).toStrictEqual([{
      id: 5,
      description: 'work on my project',
      done: true,
      day: currentDay,
    }]);
  });
});

describe('fulfilledTaskcompter', () => {
  test('return the number of fulfilled tasks.', () => {
    const tasks = [
      {
        description: 'do my daily workout',
        done: false,
      },
      {
        description: 'visite my parents',
        done: false,
      },
      {
        description: 'fix my car',
        done: true,
      },
    ];
    expect(fulfilledTaskcompter(tasks)).toBe(1);
  });
});
