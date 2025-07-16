// Base unit: square meter
const squareMeter = 1;
const m2 = squareMeter;

// Sub-square meter units
const squareMillimeter = squareMeter / 1_000_000;
const mm2 = squareMillimeter;
const squareCentimeter = squareMeter / 10_000;
const cm2 = squareCentimeter;
const squareDecimeter = squareMeter / 100;
const dm2 = squareDecimeter;

// Multi-square meter units
const squareDecameter = squareMeter * 100;
const dam2 = squareDecameter;
const are = squareDecameter;
const a = are;
const squareHectometer = squareMeter * 10_000;
const hm2 = squareHectometer;
const hectare = squareHectometer;
const ha = hectare;
const squareKilometer = squareMeter * 1_000_000;
const km2 = squareKilometer;

// Additional area units
const barn = 1e-28 * squareMeter;
const b = barn;

// Export all area units
export {
  // Base unit
  squareMeter,
  m2,
  
  // Sub-square meter units
  squareMillimeter,
  mm2,
  squareCentimeter,
  cm2,
  squareDecimeter,
  dm2,
  
  // Multi-square meter units
  squareDecameter,
  dam2,
  are,
  a,
  squareHectometer,
  hm2,
  hectare,
  ha,
  squareKilometer,
  km2,
  
  // Additional units
  barn,
  b,
};

// Default export for CommonJS compatibility
export default {
  squareMeter,
  m2,
  squareMillimeter,
  mm2,
  squareCentimeter,
  cm2,
  squareDecimeter,
  dm2,
  squareDecameter,
  dam2,
  are,
  a,
  squareHectometer,
  hm2,
  hectare,
  ha,
  squareKilometer,
  km2,
  barn,
  b,
};