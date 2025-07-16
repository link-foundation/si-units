// Base unit: second
const second = 1;

// Sub-second units
const ms = second / 1000;
const millisecond = ms;
const ns = millisecond / 1000;
const nanosecond = ns;
const microsecond = millisecond / 1000;
const μs = microsecond;
const picosecond = nanosecond / 1000;
const ps = picosecond;

// Multi-second units
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const week = 7 * day;
const month = 30 * day;
const year = 365 * day;
const decade = 10 * year;
const century = 100 * year;
const millennium = 1000 * year;

// Additional time units
const quarter = 3 * month;
const semester = 6 * month;
const leapYear = 366 * day;

// Export all time units
export {
  // Base unit
  second,
  
  // Sub-second units
  nanosecond,
  ns,
  picosecond,
  ps,
  microsecond,
  μs,
  millisecond,
  ms,
  
  // Multi-second units
  minute,
  hour,
  day,
  week,
  month,
  year,
  decade,
  century,
  millennium,
  
  // Additional units
  quarter,
  semester,
  leapYear,
};

// Default export for CommonJS compatibility
export default {
  second,
  nanosecond,
  ns,
  picosecond,
  ps,
  microsecond,
  μs,
  millisecond,
  ms,
  minute,
  hour,
  day,
  week,
  month,
  year,
  decade,
  century,
  millennium,
  quarter,
  semester,
  leapYear,
};