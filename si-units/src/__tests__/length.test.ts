import { meter, kilometer, centimeter, millimeter } from '../length';

describe('Length Units', () => {
  test('base unit is meter', () => {
    expect(meter).toBe(1);
  });

  test('kilometer is 1000 meters', () => {
    expect(kilometer).toBe(1000);
  });

  test('centimeter is 1/100 meter', () => {
    expect(centimeter).toBe(1/100);
  });

  test('millimeter is 1/1000 meter', () => {
    expect(millimeter).toBe(1/1000);
  });

  test('calculations work correctly', () => {
    const distanceInMeters = 1000 * meter;
    const distanceInKm = distanceInMeters / kilometer;

    expect(distanceInKm).toBe(1);
  });

  test('conversions are accurate', () => {
    // 1 kilometer = 1000 meters
    const oneKm = 1 * kilometer;
    const oneKmInMeters = oneKm / meter;
    expect(oneKmInMeters).toBe(1000);

    // 1 meter = 100 centimeters
    const oneMeter = 1 * meter;
    const oneMeterInCm = oneMeter / centimeter;
    expect(oneMeterInCm).toBe(100);
  });
});