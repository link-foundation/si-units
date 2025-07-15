// Temperature conversion functions
// All temperatures are based on Kelvin as the base unit

/**
 * Convert Celsius to Kelvin
 */
export function celsiusToKelvin(celsius: number): number {
  return celsius + 273.15;
}

/**
 * Convert Kelvin to Celsius
 */
export function kelvinToCelsius(kelvin: number): number {
  return kelvin - 273.15;
}

// Temperature constants (in Kelvin)
const absoluteZero = 0;
const freezingPoint = 273.15;
const boilingPoint = 373.15;
const roomTemperature = 298.15;
const bodyTemperature = 310.15;

// Export temperature constants
export {
  absoluteZero,
  freezingPoint,
  boilingPoint,
  roomTemperature,
  bodyTemperature,
};

// Default export for CommonJS compatibility
export default {
  celsiusToKelvin,
  kelvinToCelsius,
  absoluteZero,
  freezingPoint,
  boilingPoint,
  roomTemperature,
  bodyTemperature,
};