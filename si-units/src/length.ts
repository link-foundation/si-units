// Base unit: meter
const meter = 1;
const m = meter;

// Sub-meter units
const nanometer = meter / 1_000_000_000;
const nm = nanometer;
const micrometer = meter / 1_000_000;
const μm = micrometer;
const millimeter = meter / 1000;
const mm = millimeter;
const centimeter = meter / 100;
const cm = centimeter;
const decimeter = meter / 10;
const dm = decimeter;

// Multi-meter units
const decameter = meter * 10;
const dam = decameter;
const hectometer = meter * 100;
const hm = hectometer;
const kilometer = meter * 1000;
const km = kilometer;
const megameter = meter * 1_000_000;
const Mm = megameter;
const gigameter = meter * 1_000_000_000;
const Gm = gigameter;

// Imperial units (approximate conversions)
const inch = 0.0254 * meter;
const in = inch;
const foot = 12 * inch;
const ft = foot;
const yard = 3 * foot;
const yd = yard;
const mile = 5280 * foot;
const mi = mile;
const nauticalMile = 1852 * meter;
const nmi = nauticalMile;

// Astronomical units
const astronomicalUnit = 149_597_870_700 * meter;
const au = astronomicalUnit;
const lightYear = 9_460_730_472_580_800 * meter;
const ly = lightYear;
const parsec = 3.0856775814913673e16 * meter;
const pc = parsec;

// Export all length units
export {
  // Base unit
  meter,
  m,
  
  // Sub-meter units
  nanometer,
  nm,
  micrometer,
  μm,
  millimeter,
  mm,
  centimeter,
  cm,
  decimeter,
  dm,
  
  // Multi-meter units
  decameter,
  dam,
  hectometer,
  hm,
  kilometer,
  km,
  megameter,
  Mm,
  gigameter,
  Gm,
  
  // Imperial units
  inch,
  in,
  foot,
  ft,
  yard,
  yd,
  mile,
  mi,
  nauticalMile,
  nmi,
  
  // Astronomical units
  astronomicalUnit,
  au,
  lightYear,
  ly,
  parsec,
  pc,
};

// Default export for CommonJS compatibility
export default {
  meter,
  m,
  nanometer,
  nm,
  micrometer,
  μm,
  millimeter,
  mm,
  centimeter,
  cm,
  decimeter,
  dm,
  decameter,
  dam,
  hectometer,
  hm,
  kilometer,
  km,
  megameter,
  Mm,
  gigameter,
  Gm,
  inch,
  in,
  foot,
  ft,
  yard,
  yd,
  mile,
  mi,
  nauticalMile,
  nmi,
  astronomicalUnit,
  au,
  lightYear,
  ly,
  parsec,
  pc,
};