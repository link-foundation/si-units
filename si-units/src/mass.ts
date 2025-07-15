// Base unit: kilogram
const kilogram = 1;
const kg = kilogram;

// Sub-kilogram units
const milligram = kilogram / 1_000_000;
const mg = milligram;
const centigram = kilogram / 100_000;
const cg = centigram;
const decigram = kilogram / 10_000;
const dg = decigram;
const gram = kilogram / 1000;
const g = gram;

// Multi-kilogram units
const decagram = kilogram * 10;
const dag = decagram;
const hectogram = kilogram * 100;
const hg = hectogram;
const tonne = kilogram * 1000;
const t = tonne;
const megagram = tonne;
const Mg = megagram;
const gigagram = kilogram * 1_000_000_000;
const Gg = gigagram;

// Imperial units (approximate conversions)
const ounce = 28.349523125 * gram;
const oz = ounce;
const pound = 16 * ounce;
const lb = pound;
const stone = 14 * pound;
const st = stone;
const ton = 2000 * pound;
const shortTon = ton;
const longTon = 2240 * pound;
const imperialTon = longTon;

// Atomic mass units
const atomicMassUnit = 1.66053907e-27 * kilogram;
const amu = atomicMassUnit;
const dalton = atomicMassUnit;
const Da = dalton;

// Export all mass units
export {
  // Base unit
  kilogram,
  kg,
  
  // Sub-kilogram units
  milligram,
  mg,
  centigram,
  cg,
  decigram,
  dg,
  gram,
  g,
  
  // Multi-kilogram units
  decagram,
  dag,
  hectogram,
  hg,
  tonne,
  t,
  megagram,
  Mg,
  gigagram,
  Gg,
  
  // Imperial units
  ounce,
  oz,
  pound,
  lb,
  stone,
  st,
  ton,
  shortTon,
  longTon,
  imperialTon,
  
  // Atomic mass units
  atomicMassUnit,
  amu,
  dalton,
  Da,
};

// Default export for CommonJS compatibility
export default {
  kilogram,
  kg,
  milligram,
  mg,
  centigram,
  cg,
  decigram,
  dg,
  gram,
  g,
  decagram,
  dag,
  hectogram,
  hg,
  tonne,
  t,
  megagram,
  Mg,
  gigagram,
  Gg,
  ounce,
  oz,
  pound,
  lb,
  stone,
  st,
  ton,
  shortTon,
  longTon,
  imperialTon,
  atomicMassUnit,
  amu,
  dalton,
  Da,
};