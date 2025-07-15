import { second, minute, hour, day, week, month, year, millisecond, microsecond, nanosecond } from '../time';

describe('Time Units', () => {
  test('base unit is second', () => {
    expect(second).toBe(1);
  });

  test('minute is 60 seconds', () => {
    expect(minute).toBe(60);
  });

  test('hour is 60 minutes', () => {
    expect(hour).toBe(60 * 60);
  });

  test('day is 24 hours', () => {
    expect(day).toBe(24 * 60 * 60);
  });

  test('week is 7 days', () => {
    expect(week).toBe(7 * 24 * 60 * 60);
  });

  test('month is 30 days', () => {
    expect(month).toBe(30 * 24 * 60 * 60);
  });

  test('year is 365 days', () => {
    expect(year).toBe(365 * 24 * 60 * 60);
  });

  test('millisecond is 1/1000 second', () => {
    expect(millisecond).toBe(1/1000);
  });

  test('microsecond is 1/1,000,000 second', () => {
    expect(microsecond).toBe(1/1000000);
  });

  test('nanosecond is 1/1,000,000,000 second', () => {
    expect(nanosecond).toBe(1/1000000000);
  });

  test('calculations work correctly', () => {
    const oneMinute = 1 * minute;
    const oneHour = 1 * hour;
    const oneDay = 1 * day;

    expect(oneMinute / second).toBe(60);
    expect(oneHour / minute).toBe(60);
    expect(oneDay / hour).toBe(24);
  });
});