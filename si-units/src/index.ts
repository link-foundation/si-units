// Re-export all individual modules
export * from './time';
export * from './length';
export * from './mass';
export * from './temperature';
export * from './volume';
export * from './area';
export * from './data';

// Import all modules for default export
import timeUnits from './time';
import lengthUnits from './length';
import massUnits from './mass';
import temperatureUnits from './temperature';
import volumeUnits from './volume';
import areaUnits from './area';
import dataUnits from './data';

// Default export combining all units
export default {
  time: timeUnits,
  length: lengthUnits,
  mass: massUnits,
  temperature: temperatureUnits,
  volume: volumeUnits,
  area: areaUnits,
  data: dataUnits,
  
  // Flattened exports for convenience
  ...timeUnits,
  ...lengthUnits,
  ...massUnits,
  ...temperatureUnits,
  ...volumeUnits,
  ...areaUnits,
  ...dataUnits,
};