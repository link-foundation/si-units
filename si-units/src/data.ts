// Base unit: byte
const byte = 1;
const B = byte;

// Sub-byte units
const bit = byte / 8;
const b = bit;
const nibble = byte / 2;
const nybble = nibble;

// Multi-byte units (binary)
const kibibyte = byte * 1024;
const KiB = kibibyte;
const mebibyte = kibibyte * 1024;
const MiB = mebibyte;
const gibibyte = mebibyte * 1024;
const GiB = gibibyte;
const tebibyte = gibibyte * 1024;
const TiB = tebibyte;
const pebibyte = tebibyte * 1024;
const PiB = pebibyte;
const exbibyte = pebibyte * 1024;
const EiB = exbibyte;
const zebibyte = exbibyte * 1024;
const ZiB = zebibyte;
const yobibyte = zebibyte * 1024;
const YiB = yobibyte;

// Multi-byte units (decimal)
const kilobyte = byte * 1000;
const kB = kilobyte;
const megabyte = kilobyte * 1000;
const MB = megabyte;
const gigabyte = megabyte * 1000;
const GB = gigabyte;
const terabyte = gigabyte * 1000;
const TB = terabyte;
const petabyte = terabyte * 1000;
const PB = petabyte;
const exabyte = petabyte * 1000;
const EB = exabyte;
const zettabyte = exabyte * 1000;
const ZB = zettabyte;
const yottabyte = zettabyte * 1000;
const YB = yottabyte;

// Multi-bit units (binary)
const kibibit = bit * 1024;
const Kibit = kibibit;
const mebibit = kibibit * 1024;
const Mibit = mebibit;
const gibibit = mebibit * 1024;
const Gibit = gibibit;
const tebibit = gibibit * 1024;
const Tibit = tebibit;
const pebibit = tebibit * 1024;
const Pibit = pebibit;
const exbibit = pebibit * 1024;
const Eibit = exbibit;
const zebibit = exbibit * 1024;
const Zibit = zebibit;
const yobibit = zebibit * 1024;
const Yibit = yobibit;

// Multi-bit units (decimal)
const kilobit = bit * 1000;
const kbit = kilobit;
const megabit = kilobit * 1000;
const Mbit = megabit;
const gigabit = megabit * 1000;
const Gbit = gigabit;
const terabit = gigabit * 1000;
const Tbit = terabit;
const petabit = terabit * 1000;
const Pbit = petabit;
const exabit = petabit * 1000;
const Ebit = exabit;
const zettabit = exabit * 1000;
const Zbit = zettabit;
const yottabit = zettabit * 1000;
const Ybit = yottabit;

// Export all data units
export {
  // Base unit
  byte,
  B,
  
  // Sub-byte units
  bit,
  b,
  nibble,
  nybble,
  
  // Binary byte units
  kibibyte,
  KiB,
  mebibyte,
  MiB,
  gibibyte,
  GiB,
  tebibyte,
  TiB,
  pebibyte,
  PiB,
  exbibyte,
  EiB,
  zebibyte,
  ZiB,
  yobibyte,
  YiB,
  
  // Decimal byte units
  kilobyte,
  kB,
  megabyte,
  MB,
  gigabyte,
  GB,
  terabyte,
  TB,
  petabyte,
  PB,
  exabyte,
  EB,
  zettabyte,
  ZB,
  yottabyte,
  YB,
  
  // Binary bit units
  kibibit,
  Kibit,
  mebibit,
  Mibit,
  gibibit,
  Gibit,
  tebibit,
  Tibit,
  pebibit,
  Pibit,
  exbibit,
  Eibit,
  zebibit,
  Zibit,
  yobibit,
  Yibit,
  
  // Decimal bit units
  kilobit,
  kbit,
  megabit,
  Mbit,
  gigabit,
  Gbit,
  terabit,
  Tbit,
  petabit,
  Pbit,
  exabit,
  Ebit,
  zettabit,
  Zbit,
  yottabit,
  Ybit,
};

// Default export for CommonJS compatibility
export default {
  byte,
  B,
  bit,
  b,
  nibble,
  nybble,
  kibibyte,
  KiB,
  mebibyte,
  MiB,
  gibibyte,
  GiB,
  tebibyte,
  TiB,
  pebibyte,
  PiB,
  exbibyte,
  EiB,
  zebibyte,
  ZiB,
  yobibyte,
  YiB,
  kilobyte,
  kB,
  megabyte,
  MB,
  gigabyte,
  GB,
  terabyte,
  TB,
  petabyte,
  PB,
  exabyte,
  EB,
  zettabyte,
  ZB,
  yottabyte,
  YB,
  kibibit,
  Kibit,
  mebibit,
  Mibit,
  gibibit,
  Gibit,
  tebibit,
  Tibit,
  pebibit,
  Pibit,
  exbibit,
  Eibit,
  zebibit,
  Zibit,
  yobibit,
  Yibit,
  kilobit,
  kbit,
  megabit,
  Mbit,
  gigabit,
  Gbit,
  terabit,
  Tbit,
  petabit,
  Pbit,
  exabit,
  Ebit,
  zettabit,
  Zbit,
  yottabit,
  Ybit,
};