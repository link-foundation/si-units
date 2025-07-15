import { 
  celsiusToKelvin, 
  kelvinToCelsius,
  absoluteZero,
  freezingPoint,
  boilingPoint,
  roomTemperature,
  bodyTemperature
} from '../temperature';

describe('Temperature Conversions', () => {
  test('celsiusToKelvin converts correctly', () => {
    expect(celsiusToKelvin(0)).toBe(273.15);
    expect(celsiusToKelvin(100)).toBe(373.15);
    expect(celsiusToKelvin(-273.15)).toBe(0);
  });

  test('kelvinToCelsius converts correctly', () => {
    expect(kelvinToCelsius(273.15)).toBe(0);
    expect(kelvinToCelsius(373.15)).toBe(100);
    expect(kelvinToCelsius(0)).toBe(-273.15);
  });

  test('temperature constants are correct', () => {
    expect(absoluteZero).toBe(0);
    expect(freezingPoint).toBe(273.15);
    expect(boilingPoint).toBe(373.15);
    expect(roomTemperature).toBe(298.15);
    expect(bodyTemperature).toBe(310.15);
  });

  test('conversions are reversible', () => {
    const originalKelvin = 300;
    const celsius = kelvinToCelsius(originalKelvin);
    const backToKelvin = celsiusToKelvin(celsius);
    expect(backToKelvin).toBeCloseTo(originalKelvin, 10);
  });
});