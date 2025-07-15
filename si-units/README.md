# SI Units

A comprehensive SI units library with support for time, length, mass, temperature, volume, area, and data units. This package provides both ES modules and CommonJS support.

## Installation

```bash
npm install si-units
```

## Usage

### ES Modules

```javascript
// Import specific units
import { second, meter, kilogram, celsiusToFahrenheit } from 'si-units';

// Use units for calculations
const distance = 5 * meter;
const time = 10 * second;
const speed = distance / time; // 0.5 m/s

// Temperature conversion
const fahrenheit = celsiusToFahrenheit(25); // 77°F
```

### CommonJS

```javascript
// Import all units
const siUnits = require('si-units');

// Use units
const distance = 5 * siUnits.meter;
const time = 10 * siUnits.second;
const speed = distance / time; // 0.5 m/s

// Temperature conversion
const fahrenheit = siUnits.celsiusToFahrenheit(25); // 77°F
```

### Individual Modules

You can also import specific unit categories:

```javascript
// ES Modules
import { second, minute, hour } from 'si-units/time';
import { meter, kilometer, mile } from 'si-units/length';
import { kilogram, pound } from 'si-units/mass';

// CommonJS
const timeUnits = require('si-units/time');
const lengthUnits = require('si-units/length');
const massUnits = require('si-units/mass');
```

## Available Units

### Time Units

```javascript
import { 
  second, minute, hour, day, week, month, year,
  millisecond, microsecond, nanosecond, picosecond,
  decade, century, millennium,
  fortnight, quarter, semester, leapYear
} from 'si-units/time';
```

### Length Units

```javascript
import {
  meter, kilometer, centimeter, millimeter,
  inch, foot, yard, mile, nauticalMile,
  astronomicalUnit, lightYear, parsec
} from 'si-units/length';
```

### Mass Units

```javascript
import {
  kilogram, gram, milligram,
  pound, ounce, stone, ton,
  atomicMassUnit, dalton
} from 'si-units/mass';
```

### Temperature Units

```javascript
import {
  celsiusToFahrenheit, fahrenheitToCelsius,
  celsiusToKelvin, kelvinToCelsius,
  fahrenheitToKelvin, kelvinToFahrenheit,
  rankineToKelvin, kelvinToRankine,
  absoluteZero, freezingPoint, boilingPoint,
  roomTemperature, bodyTemperature
} from 'si-units/temperature';
```

### Volume Units

```javascript
import {
  cubicMeter, liter, milliliter,
  gallon, quart, pint, cup, fluidOunce,
  barrel, bushel, peck
} from 'si-units/volume';
```

### Area Units

```javascript
import {
  squareMeter, hectare, squareKilometer,
  squareFoot, squareYard, acre,
  barn, township, section
} from 'si-units/area';
```

### Data Units

```javascript
import {
  byte, bit, nibble,
  kilobyte, megabyte, gigabyte, terabyte,
  kibibyte, mebibyte, gibibyte, tebibyte,
  kilobit, megabit, gigabit, terabit,
  kibibit, mebibit, gibibit, tebibit
} from 'si-units/data';
```

## Examples

### Time Calculations

```javascript
import { second, minute, hour, day } from 'si-units/time';

// Calculate time intervals
const oneMinute = 1 * minute;
const oneHour = 1 * hour;
const oneDay = 1 * day;

console.log(oneMinute / second); // 60
console.log(oneHour / minute); // 60
console.log(oneDay / hour); // 24
```

### Length Conversions

```javascript
import { meter, kilometer, mile, inch } from 'si-units/length';

// Convert between units
const distanceInMeters = 1000 * meter;
const distanceInKm = distanceInMeters / kilometer; // 1
const distanceInMiles = distanceInMeters / mile; // 0.621371
const distanceInInches = distanceInMeters / inch; // 39370.1
```

### Temperature Conversions

```javascript
import { celsiusToFahrenheit, fahrenheitToCelsius } from 'si-units/temperature';

// Convert temperatures
const celsius = 25;
const fahrenheit = celsiusToFahrenheit(celsius); // 77
const backToCelsius = fahrenheitToCelsius(fahrenheit); // 25
```

### Data Size Calculations

```javascript
import { byte, kilobyte, megabyte, kibibyte } from 'si-units/data';

// Calculate file sizes
const fileSizeInBytes = 1024 * byte;
const fileSizeInKB = fileSizeInBytes / kilobyte; // 1.024 (decimal)
const fileSizeInKiB = fileSizeInBytes / kibibyte; // 1 (binary)
```

## API Reference

### Time Units

All time units are based on the second as the base unit.

- `second` - Base unit (1)
- `millisecond`, `ms` - 1/1000 second
- `microsecond`, `μs` - 1/1,000,000 second
- `nanosecond`, `ns` - 1/1,000,000,000 second
- `picosecond`, `ps` - 1/1,000,000,000,000 second
- `minute` - 60 seconds
- `hour` - 60 minutes
- `day` - 24 hours
- `week` - 7 days
- `month` - 30 days
- `year` - 365 days
- `decade` - 10 years
- `century` - 100 years
- `millennium` - 1000 years

### Length Units

All length units are based on the meter as the base unit.

- `meter`, `m` - Base unit (1)
- `millimeter`, `mm` - 1/1000 meter
- `centimeter`, `cm` - 1/100 meter
- `kilometer`, `km` - 1000 meters
- `inch`, `in` - 0.0254 meters
- `foot`, `ft` - 12 inches
- `yard`, `yd` - 3 feet
- `mile`, `mi` - 5280 feet
- `nauticalMile`, `nmi` - 1852 meters

### Mass Units

All mass units are based on the kilogram as the base unit.

- `kilogram`, `kg` - Base unit (1)
- `gram`, `g` - 1/1000 kilogram
- `milligram`, `mg` - 1/1,000,000 kilogram
- `pound`, `lb` - 0.45359237 kilograms
- `ounce`, `oz` - 1/16 pound
- `ton` - 2000 pounds
- `atomicMassUnit`, `amu` - 1.66053907e-27 kilograms

### Temperature Functions

All temperature conversions use Kelvin as the base unit.

- `celsiusToFahrenheit(celsius)` - Convert Celsius to Fahrenheit
- `fahrenheitToCelsius(fahrenheit)` - Convert Fahrenheit to Celsius
- `celsiusToKelvin(celsius)` - Convert Celsius to Kelvin
- `kelvinToCelsius(kelvin)` - Convert Kelvin to Celsius
- `fahrenheitToKelvin(fahrenheit)` - Convert Fahrenheit to Kelvin
- `kelvinToFahrenheit(kelvin)` - Convert Kelvin to Fahrenheit

## License

MIT