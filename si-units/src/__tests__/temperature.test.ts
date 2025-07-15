import { 
  celsiusToFahrenheit, 
  fahrenheitToCelsius, 
  celsiusToKelvin, 
  kelvinToCelsius,
  fahrenheitToKelvin,
  kelvinToFahrenheit,
  absoluteZero,
  freezingPoint,
  boilingPoint,
  roomTemperature,
  bodyTemperature
} from '../temperature';

describe('Temperature Conversions', () => {
  test('celsiusToFahrenheit converts correctly', () => {
    expect(celsiusToFahrenheit(0)).toBe(32);
    expect(celsiusToFahrenheit(100)).toBe(212);
    expect(celsiusToFahrenheit(25)).toBe(77);
  });

  test('fahrenheitToCelsius converts correctly', () => {
    expect(fahrenheitToCelsius(32)).toBe(0);
    expect(fahrenheitToCelsius(212)).toBe(100);
    expect(fahrenheitToCelsius(77)).toBe(25);
  });

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

  test('fahrenheitToKelvin converts correctly', () => {
    expect(fahrenheitToKelvin(32)).toBe(273.15);
    expect(fahrenheitToKelvin(212)).toBe(373.15);
  });

  test('kelvinToFahrenheit converts correctly', () => {
    expect(kelvinToFahrenheit(273.15)).toBe(32);
    expect(kelvinToFahrenheit(373.15)).toBe(212);
  });

  test('temperature constants are correct', () => {
    expect(absoluteZero).toBe(0);
    expect(freezingPoint).toBe(273.15);
    expect(boilingPoint).toBe(373.15);
    expect(roomTemperature).toBe(298.15);
    expect(bodyTemperature).toBe(310.15);
  });

  test('conversions are reversible', () => {
    const originalCelsius = 25;
    const fahrenheit = celsiusToFahrenheit(originalCelsius);
    const backToCelsius = fahrenheitToCelsius(fahrenheit);
    expect(backToCelsius).toBeCloseTo(originalCelsius, 10);

    const originalKelvin = 300;
    const celsius = kelvinToCelsius(originalKelvin);
    const backToKelvin = celsiusToKelvin(celsius);
    expect(backToKelvin).toBeCloseTo(originalKelvin, 10);
  });
});