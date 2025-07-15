import { meter, kilometer, centimeter, millimeter, inch, foot, yard, mile } from '../length';

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

  test('inch is 0.0254 meters', () => {
    expect(inch).toBe(0.0254);
  });

  test('foot is 12 inches', () => {
    expect(foot).toBe(12 * 0.0254);
  });

  test('yard is 3 feet', () => {
    expect(yard).toBe(3 * 12 * 0.0254);
  });

  test('mile is 5280 feet', () => {
    expect(mile).toBe(5280 * 12 * 0.0254);
  });

  test('calculations work correctly', () => {
    const distanceInMeters = 1000 * meter;
    const distanceInKm = distanceInMeters / kilometer;
    const distanceInMiles = distanceInMeters / mile;

    expect(distanceInKm).toBe(1);
    expect(distanceInMiles).toBeCloseTo(0.621371, 6);
  });

  test('conversions are accurate', () => {
    // 1 meter = 39.3701 inches
    const oneMeter = 1 * meter;
    const oneMeterInInches = oneMeter / inch;
    expect(oneMeterInInches).toBeCloseTo(39.3701, 4);

    // 1 kilometer = 0.621371 miles
    const oneKm = 1 * kilometer;
    const oneKmInMiles = oneKm / mile;
    expect(oneKmInMiles).toBeCloseTo(0.621371, 6);
  });
});