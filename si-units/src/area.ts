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

// Imperial units (approximate conversions)
const squareInch = 0.00064516 * squareMeter;
const in2 = squareInch;
const squareFoot = 144 * squareInch;
const ft2 = squareFoot;
const squareYard = 9 * squareFoot;
const yd2 = squareYard;
const squareMile = 27878400 * squareFoot;
const mi2 = squareMile;
const acre = 43560 * squareFoot;
const ac = acre;

// Additional area units
const barn = 1e-28 * squareMeter;
const b = barn;
const township = 36 * squareMile;
const twp = township;
const section = squareMile;
const sec = section;

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
  
  // Imperial units
  squareInch,
  in2,
  squareFoot,
  ft2,
  squareYard,
  yd2,
  squareMile,
  mi2,
  acre,
  ac,
  
  // Additional units
  barn,
  b,
  township,
  twp,
  section,
  sec,
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
  squareInch,
  in2,
  squareFoot,
  ft2,
  squareYard,
  yd2,
  squareMile,
  mi2,
  acre,
  ac,
  barn,
  b,
  township,
  twp,
  section,
  sec,
};