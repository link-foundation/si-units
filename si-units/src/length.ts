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
};