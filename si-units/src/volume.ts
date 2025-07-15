// Base unit: cubic meter
const cubicMeter = 1;
const m3 = cubicMeter;

// Sub-cubic meter units
const cubicMillimeter = cubicMeter / 1_000_000_000;
const mm3 = cubicMillimeter;
const cubicCentimeter = cubicMeter / 1_000_000;
const cm3 = cubicCentimeter;
const cubicDecimeter = cubicMeter / 1000;
const dm3 = cubicDecimeter;
const liter = cubicDecimeter;
const l = liter;
const deciliter = liter / 10;
const dl = deciliter;
const centiliter = liter / 100;
const cl = centiliter;
const milliliter = liter / 1000;
const ml = milliliter;

// Multi-cubic meter units
const cubicDecameter = cubicMeter * 1000;
const dam3 = cubicDecameter;
const cubicHectometer = cubicMeter * 1_000_000;
const hm3 = cubicHectometer;
const cubicKilometer = cubicMeter * 1_000_000_000;
const km3 = cubicKilometer;

// Imperial units (approximate conversions)
const cubicInch = 0.000016387064 * cubicMeter;
const in3 = cubicInch;
const cubicFoot = 1728 * cubicInch;
const ft3 = cubicFoot;
const cubicYard = 27 * cubicFoot;
const yd3 = cubicYard;
const gallon = 231 * cubicInch;
const gal = gallon;
const quart = gallon / 4;
const qt = quart;
const pint = gallon / 8;
const pt = pint;
const cup = gallon / 16;
const fluidOunce = gallon / 128;
const flOz = fluidOunce;

// Additional volume units
const barrel = 42 * gallon;
const bbl = barrel;
const bushel = 2150.42 * cubicInch;
const bu = bushel;
const peck = bushel / 4;
const pk = peck;

// Export all volume units
export {
  // Base unit
  cubicMeter,
  m3,
  
  // Sub-cubic meter units
  cubicMillimeter,
  mm3,
  cubicCentimeter,
  cm3,
  cubicDecimeter,
  dm3,
  liter,
  l,
  deciliter,
  dl,
  centiliter,
  cl,
  milliliter,
  ml,
  
  // Multi-cubic meter units
  cubicDecameter,
  dam3,
  cubicHectometer,
  hm3,
  cubicKilometer,
  km3,
  
  // Imperial units
  cubicInch,
  in3,
  cubicFoot,
  ft3,
  cubicYard,
  yd3,
  gallon,
  gal,
  quart,
  qt,
  pint,
  pt,
  cup,
  fluidOunce,
  flOz,
  
  // Additional units
  barrel,
  bbl,
  bushel,
  bu,
  peck,
  pk,
};

// Default export for CommonJS compatibility
export default {
  cubicMeter,
  m3,
  cubicMillimeter,
  mm3,
  cubicCentimeter,
  cm3,
  cubicDecimeter,
  dm3,
  liter,
  l,
  deciliter,
  dl,
  centiliter,
  cl,
  milliliter,
  ml,
  cubicDecameter,
  dam3,
  cubicHectometer,
  hm3,
  cubicKilometer,
  km3,
  cubicInch,
  in3,
  cubicFoot,
  ft3,
  cubicYard,
  yd3,
  gallon,
  gal,
  quart,
  qt,
  pint,
  pt,
  cup,
  fluidOunce,
  flOz,
  barrel,
  bbl,
  bushel,
  bu,
  peck,
  pk,
};