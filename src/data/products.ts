export type ProductCategory =
  | "All"
  | "Hospital Beds & Accessories"
  | "Critical Care Equipment"
  | "O.T. Solution"
  | "Ward Care Solution"
  | "Sterilizer Solution"
  | "OPD Solution"
  | "Transfer Solution";

export interface Product {
  id: string;
  name: string;
  model: string;
  category: ProductCategory;
  image: string;
}

export const categories: ProductCategory[] = [
  "All",
  "Hospital Beds & Accessories",
  "Critical Care Equipment",
  "O.T. Solution",
  "Ward Care Solution",
  "Sterilizer Solution",
  "OPD Solution",
  "Transfer Solution",
];

export const products: Product[] = [
  // HOSPITAL BEDS & ACCESSORIES
  { id: "1", name: "Motorized ICCU Bed", model: "MC-4006 (A)", category: "Hospital Beds & Accessories", image: "/mc-4006a.png" },
  { id: "2", name: "Manual ICCU Bed", model: "MC-4006 (B)", category: "Hospital Beds & Accessories", image: "/mc-4006b.png" },
  { id: "3", name: "Motorized Fowler Bed", model: "MC-4007 (A)", category: "Hospital Beds & Accessories", image: "/mc-4007a.png" },
  { id: "36", name: "Manual Fowler Bed", model: "MC-4007 (B)", category: "Hospital Beds & Accessories", image: "/mc-4007b.png" },
  { id: "37", name: "ICU Bed", model: "MC-4008", category: "Hospital Beds & Accessories", image: "/mc-4008.png" },
  { id: "4", name: "Children Bed", model: "MC-4009 (A)", category: "Hospital Beds & Accessories", image: "/mc-4009a.png" },
  { id: "38", name: "Children Bed Delux", model: "MC-4009 (B)", category: "Hospital Beds & Accessories", image: "/mc-4009b.png" },
  { id: "39", name: "Fowler Bed", model: "MC-40010", category: "Hospital Beds & Accessories", image: "/mc-40010.png" },
  { id: "40", name: "Semi Fowler Bed", model: "MC-40011", category: "Hospital Beds & Accessories", image: "/mc-40011.png" },
  { id: "41", name: "Deluxe Plain Bed", model: "MC-40012 (A)", category: "Hospital Beds & Accessories", image: "/mc-40012a.png" },
  { id: "42", name: "Plain Bed (Back Rest)", model: "MC-40012 (B)", category: "Hospital Beds & Accessories", image: "/mc-40012b.png" },
  { id: "43", name: "Delux Plain Bed (Back Rest)", model: "MC-40012 (C)", category: "Hospital Beds & Accessories", image: "/mc-40012c.png" },
  { id: "44", name: "Plain Bed", model: "MC-40012 (D)", category: "Hospital Beds & Accessories", image: "/mc-40012d.png" },
  { id: "45", name: "Deluxe Plain Bed", model: "MC-40012 (E)", category: "Hospital Beds & Accessories", image: "/mc-40012e.png" },
  { id: "46", name: "ABS Head Bow & Leg Bow", model: "MC-40013 (A)", category: "Hospital Beds & Accessories", image: "/mc-40013a.png" },
  { id: "47", name: "SS Head Bow & Leg Bow", model: "MC-40013 (B)", category: "Hospital Beds & Accessories", image: "/mc-40013b.png" },
  { id: "48", name: "MS Head Bow & Leg Bow", model: "MC-40013 (C)", category: "Hospital Beds & Accessories", image: "/mc-40013c.png" },
  { id: "49", name: "Split Railing", model: "MC-40014 (A)", category: "Hospital Beds & Accessories", image: "/mc-40014a.png" },
  { id: "50", name: "Collapsible Railing", model: "MC-40014 (B)", category: "Hospital Beds & Accessories", image: "/mc-40014b.png" },
  { id: "51", name: "D Type Railing", model: "MC-40014 (C)", category: "Hospital Beds & Accessories", image: "/mc-40014c.png" },
  { id: "52", name: "Medical Bed Castor", model: "MC-40015", category: "Hospital Beds & Accessories", image: "/mc-40015.png" },
  { id: "53", name: "Ripple Mattress", model: "MC-40016 (A)", category: "Hospital Beds & Accessories", image: "/mc-40016a.png" },
  { id: "54", name: "Fowler Bed Mattress", model: "MC-40016 (B)", category: "Hospital Beds & Accessories", image: "/mc-40016b.png" },
  { id: "55", name: "Semi Fowler Bed Mattress", model: "MC-40016 (C)", category: "Hospital Beds & Accessories", image: "/mc-40016c.png" },
  { id: "56", name: "Plain Bed Mattress", model: "MC-40016 (D)", category: "Hospital Beds & Accessories", image: "/mc-40016d.png" },
  { id: "57", name: "Children Bed Mattress", model: "MC-40016 (E)", category: "Hospital Beds & Accessories", image: "/mc-40016e.png" },
  { id: "58", name: "Baby Cot & Cradle with Mattress", model: "MC-40017", category: "Hospital Beds & Accessories", image: "/mc-40017.png" },
  { id: "59", name: "Baby Trolley", model: "MC-40018", category: "Hospital Beds & Accessories", image: "/mc-40018.png" },
  { id: "60", name: "Attendant Bed", model: "MC-40019 (A)", category: "Hospital Beds & Accessories", image: "/mc-40019a.png" },
  { id: "61", name: "Attendant Bed Cum Chair", model: "MC-40019 (B)", category: "Hospital Beds & Accessories", image: "/mc-40019b.png" },
  // CRITICAL CARE EQUIPMENT
  { id: "5", name: "Advanced Patient Monitor", model: "MC-40065", category: "Critical Care Equipment", image: "/prod5.png" },
  { id: "6", name: "ECG Machine (BPL/CONTEC)", model: "MC-40066", category: "Critical Care Equipment", image: "/prod6.png" },
  { id: "7", name: "Bi-Pap Machine", model: "MC-40067", category: "Critical Care Equipment", image: "/prod7.png" },
  { id: "8", name: "Oxygen Concentrator", model: "MC-40074", category: "Critical Care Equipment", image: "/prod8.png" },
  { id: "9", name: "ICU Ventilator", model: "MC-40077", category: "Critical Care Equipment", image: "/prod9.png" },
  { id: "10", name: "Syringe Pump", model: "MC-40076", category: "Critical Care Equipment", image: "/prod10.png" },
  { id: "11", name: "Fetal Doppler", model: "MC-40070", category: "Critical Care Equipment", image: "/prod11.png" },

  // O.T. SOLUTION
  { id: "12", name: "Electro Mechanical C-ARM OT Table", model: "MC-40043 (A)", category: "O.T. Solution", image: "/prod12.png" },
  { id: "13", name: "Ceiling LED OT Light (3+3 Dome)", model: "MC-40048 (D)", category: "O.T. Solution", image: "/prod13.png" },
  { id: "14", name: "Mobile LED OT Light", model: "MC-40049", category: "O.T. Solution", image: "/prod14.png" },
  { id: "15", name: "Boyles Apparatus", model: "MC-40053 (B)", category: "O.T. Solution", image: "/prod15.png" },

  // WARD CARE SOLUTION
  { id: "16", name: "Deluxe Locker ABS Top", model: "MC-40020 (B)", category: "Ward Care Solution", image: "/prod16.png" },
  { id: "17", name: "Over Bed Table Gas Spring", model: "MC-40021 (C)", category: "Ward Care Solution", image: "/prod17.png" },
  { id: "18", name: "Instrument Trolley SS Top", model: "MC-40027", category: "Ward Care Solution", image: "/prod18.png" },
  { id: "19", name: "Medicine Trolley", model: "MC-40028", category: "Ward Care Solution", image: "/prod19.png" },

  // STERILIZER SOLUTION
  { id: "20", name: "Horizontal Sterilizer", model: "MC-40054 (A)", category: "Sterilizer Solution", image: "/prod20.png" },
  { id: "21", name: "Fogger Machine", model: "MC-40058", category: "Sterilizer Solution", image: "/prod21.png" },
  { id: "22", name: "Suction Machine", model: "MC-40064", category: "Sterilizer Solution", image: "/prod22.png" },

  // OPD SOLUTION
  { id: "23", name: "Examination Couch Updated", model: "MC-4001 (A)", category: "OPD Solution", image: "/mc-4001a.png" },
  { id: "24", name: "Examination Couch", model: "MC-4001 (B)", category: "OPD Solution", image: "/mc-4001b.png" },
  { id: "25", name: "Hydraulic Examination Couch", model: "MC-4001 (C)", category: "OPD Solution", image: "/mc-4001c.png" },
  { id: "26", name: "Fixed Examination Couch", model: "MC-4001 (D)", category: "OPD Solution", image: "/mc-4001d.png" },
  { id: "27", name: "Examination Table", model: "MC-4001 (E)", category: "OPD Solution", image: "/mc-4001e.png" },
  { id: "31", name: "Examination Table Mattress", model: "MC-4002", category: "OPD Solution", image: "/mc-4002.png" },
  { id: "32", name: "Double Foot Step", model: "MC-4003 (A)", category: "OPD Solution", image: "/mc-4003a.png" },
  { id: "33", name: "Single Foot Step", model: "MC-4003 (B)", category: "OPD Solution", image: "/mc-4003b.png" },
  { id: "34", name: "Single X-Ray View Box (LED)", model: "MC-4004 (A)", category: "OPD Solution", image: "/mc-4004a.png" },
  { id: "28", name: "X-Ray View Box (Double LED)", model: "MC-4004 (B)", category: "OPD Solution", image: "/mc-4004b.png" },
  { id: "35", name: "Lobby Chair (MS Powder Coated)", model: "MC-4005", category: "OPD Solution", image: "/mc-4005.png" },

  // TRANSFER SOLUTION
  { id: "29", name: "Stretcher Trolley with Rail & IV Stand", model: "MC-40040 (A)", category: "Transfer Solution", image: "/p2.jpg" },
  { id: "30", name: "Folding Wheel Chair", model: "MC-40042", category: "Transfer Solution", image: "/p3.jpg" },
];
