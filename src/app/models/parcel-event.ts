export interface ParcelEvent {
  // ISO timestamp of occurrence
  timestamp: string;

  // Meaning yet unknown
  status: string;

  // Meaning yet unknown
  reasontypecode: string;

  // Text to display, DE
  text: string;

  // Text to display, EN
  textEn: string;

  // Postal code of station
  postalcode: string;

  // Country shorthand of station
  country: string;
}