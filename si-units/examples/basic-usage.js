// Example: Basic usage of SI Units package
// This demonstrates both ES modules and CommonJS usage

// ES Modules usage
import { second, meter, kilogram, celsiusToFahrenheit } from 'si-units';

console.log('=== ES Modules Example ===');

// Time calculations
const oneMinute = 1 * second * 60;
const oneHour = 1 * second * 60 * 60;
const oneDay = 1 * second * 60 * 60 * 24;

console.log('Time units:');
console.log(`1 minute = ${oneMinute / second} seconds`);
console.log(`1 hour = ${oneHour / second} seconds`);
console.log(`1 day = ${oneDay / second} seconds`);

// Length calculations
const distance = 5 * meter;
const time = 10 * second;
const speed = distance / time;

console.log('\nLength and speed:');
console.log(`Distance: ${distance / meter} meters`);
console.log(`Time: ${time / second} seconds`);
console.log(`Speed: ${speed / (meter / second)} m/s`);

// Mass calculations
const mass = 2 * kilogram;
const weight = mass * 9.81; // Earth gravity

console.log('\nMass and weight:');
console.log(`Mass: ${mass / kilogram} kg`);
console.log(`Weight on Earth: ${weight} N`);

// Temperature conversion
const celsius = 25;
const fahrenheit = celsiusToFahrenheit(celsius);

console.log('\nTemperature conversion:');
console.log(`${celsius}°C = ${fahrenheit}°F`);

// CommonJS usage example (commented out for ES modules)
/*
const siUnits = require('si-units');

console.log('\n=== CommonJS Example ===');

const distanceInMeters = 1000 * siUnits.meter;
const distanceInKm = distanceInMeters / siUnits.kilometer;
const distanceInMiles = distanceInMeters / siUnits.mile;

console.log('Distance conversions:');
console.log(`${distanceInMeters / siUnits.meter} meters`);
console.log(`${distanceInKm} kilometers`);
console.log(`${distanceInMiles.toFixed(6)} miles`);
*/