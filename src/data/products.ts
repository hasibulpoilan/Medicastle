export type ProductCategory =
  | "All"
  | "Hospital Beds & Accessories"
  | "Critical Care Equipment"
  | "O.T. Solution"
  | "Ward Care Solution"
  | "Sterilizer Solution"
  | "OPD Solution"
  | "Transfer Solution"
  | "Radiant Warmer & Photo Therapy"
  | "Gynec & Maternal Solution"
  | "Oxygen Gas Pipe Line Accessories";

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
  "Radiant Warmer & Photo Therapy",
  "Gynec & Maternal Solution",
  "Oxygen Gas Pipe Line Accessories",
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
  { id: "5", name: "Patient Monitor", model: "MC-40065", category: "Critical Care Equipment", image: "/mc-40065.png" },
  { id: "6", name: "ECG Machine", model: "MC-40066", category: "Critical Care Equipment", image: "/mc-40066.png" },
  { id: "7", name: "BiPAP Machine", model: "MC-40067", category: "Critical Care Equipment", image: "/mc-40067.png" },
  { id: "139", name: "CPAP Machine", model: "MC-40068", category: "Critical Care Equipment", image: "/mc-40068.png" },
  { id: "140", name: "Fetal Monitor", model: "MC-40069", category: "Critical Care Equipment", image: "/mc-40069.png" },
  { id: "11", name: "Fetal Doppler", model: "MC-40070", category: "Critical Care Equipment", image: "/mc-40070.png" },
  { id: "141", name: "Spirometer", model: "MC-40071", category: "Critical Care Equipment", image: "/mc-40071.png" },
  { id: "142", name: "Nebuliser Machine", model: "MC-40072", category: "Critical Care Equipment", image: "/mc-40072.png" },
  { id: "143", name: "Medical Equipment", model: "MC-40073", category: "Critical Care Equipment", image: "/mc-40073.png" },
  { id: "8", name: "Oxygen Concentrator", model: "MC-40074", category: "Critical Care Equipment", image: "/mc-40074.png" },
  { id: "144", name: "Medical Equipment", model: "MC-40075", category: "Critical Care Equipment", image: "/mc-40075.png" },
  { id: "10", name: "Syringe Pump", model: "MC-40076", category: "Critical Care Equipment", image: "/mc-40076.png" },
  { id: "9", name: "ICU Ventilator", model: "MC-40077 (A)", category: "Critical Care Equipment", image: "/mc-40077a.png" },
  { id: "145", name: "Transport Ventilator", model: "MC-40078", category: "Critical Care Equipment", image: "/mc-40078.png" },

  // O.T. SOLUTION
  { id: "12", name: "Electro Mechanical C-ARM Compatible OT Table", model: "MC-40043 (A)", category: "O.T. Solution", image: "/mc-40043a.png" },
  { id: "100", name: "C-ARM OT Table Actuator", model: "MC-40043 (B)", category: "O.T. Solution", image: "/mc-40043b.png" },
  { id: "101", name: "Hydraulic C-ARM OT Table", model: "MC-40043 (C)", category: "O.T. Solution", image: "/mc-40043c.png" },
  { id: "102", name: "Side Controlled OT Table", model: "MC-40043 (D)", category: "O.T. Solution", image: "/mc-40043d.png" },
  { id: "103", name: "Ortho Attachment", model: "MC-40044", category: "O.T. Solution", image: "/mc-40044.png" },
  { id: "104", name: "Neuro Attachment", model: "MC-40045", category: "O.T. Solution", image: "/mc-40045.png" },
  { id: "105", name: "Spinal Attachment", model: "MC-40046", category: "O.T. Solution", image: "/mc-40046.png" },
  { id: "106", name: "Finger Lock", model: "MC-40047", category: "O.T. Solution", image: "/mc-40047.png" },
  { id: "107", name: "Ceiling LED OT Light 3 Dome Multicolors", model: "MC-40048 (A)", category: "O.T. Solution", image: "/mc-40048a.png" },
  { id: "108", name: "Ceiling LED OT Light 4 Dome Multicolors", model: "MC-40048 (B)", category: "O.T. Solution", image: "/mc-40048b.png" },
  { id: "109", name: "Ceiling LED OT Light 5 Dome Multicolors", model: "MC-40048 (C)", category: "O.T. Solution", image: "/mc-40048c.png" },
  { id: "13", name: "Ceiling LED OT Light 3+3 Dome Multicolors", model: "MC-40048 (D)", category: "O.T. Solution", image: "/mc-40048d.png" },
  { id: "110", name: "Ceiling LED OT Light 3+4 Dome Multicolors", model: "MC-40048 (E)", category: "O.T. Solution", image: "/mc-40048e.png" },
  { id: "111", name: "Ceiling LED OT Light 3+5 Dome Multicolors", model: "MC-40048 (F)", category: "O.T. Solution", image: "/mc-40048f.png" },
  { id: "112", name: "Ceiling LED OT Light 4+4 Dome Multicolors", model: "MC-40048 (G)", category: "O.T. Solution", image: "/mc-40048g.png" },
  { id: "113", name: "Ceiling LED OT Light 4+5 Dome Multicolors", model: "MC-40048 (H)", category: "O.T. Solution", image: "/mc-40048h.png" },
  { id: "114", name: "Ceiling LED OT Light 5+5 Dome Multicolors", model: "MC-40048 (I)", category: "O.T. Solution", image: "/mc-40048i.png" },
  { id: "115", name: "Ceiling LED OT Light 3 Dome Multicolors", model: "MC-40048 (J)", category: "O.T. Solution", image: "/mc-40048j.png" },
  { id: "116", name: "Ceiling LED OT Light 4 Dome Multicolors", model: "MC-40048 (K)", category: "O.T. Solution", image: "/mc-40048k.png" },
  { id: "117", name: "Ceiling LED OT Light 4 Dome Multicolors", model: "MC-40048 (M)", category: "O.T. Solution", image: "/mc-40048m.png" },
  { id: "118", name: "Mobile LED OT Light 3 Dome Multicolors", model: "MC-40049 (A)", category: "O.T. Solution", image: "/mc-40049a.png" },
  { id: "119", name: "Mobile LED OT Light 3 Dome Multicolors", model: "MC-40049 (B)", category: "O.T. Solution", image: "/mc-40049b.png" },
  { id: "120", name: "Mobile LED OT Light 3 Dome Multicolors", model: "MC-40049 (C)", category: "O.T. Solution", image: "/mc-40049c.png" },
  { id: "121", name: "LED OT Spot Light 7 LED", model: "MC-40050 (A)", category: "O.T. Solution", image: "/mc-40050a.png" },
  { id: "122", name: "LED OT Spot Light 14 LED", model: "MC-40050 (B)", category: "O.T. Solution", image: "/mc-40050b.png" },
  { id: "123", name: "LED OT Spot Light 21 LED", model: "MC-40050 (C)", category: "O.T. Solution", image: "/mc-40050c.png" },
  { id: "124", name: "OT Pendent", model: "MC-40051", category: "O.T. Solution", image: "/mc-40051.png" },
  { id: "125", name: "Mob Stand", model: "MC-40052", category: "O.T. Solution", image: "/mc-40052.png" },
  { id: "126", name: "Venus", model: "MC-40053 (A)", category: "O.T. Solution", image: "/mc-40053a.png" },
  { id: "15", name: "Boyles Apparatus Venus Compact With Hypoxia Guard", model: "MC-40053 (B)", category: "O.T. Solution", image: "/mc-40053b.png" },
  { id: "127", name: "Boyles Apparatus", model: "MC-40053 (C)", category: "O.T. Solution", image: "/mc-40053c.png" },

  // WARD CARE SOLUTION
  { id: "62", name: "Deluxe Locker SS Top", model: "MC-40020 (A)", category: "Ward Care Solution", image: "/mc-40020a.png" },
  { id: "16", name: "Deluxe Locker ABS Top", model: "MC-40020 (B)", category: "Ward Care Solution", image: "/mc-40020b.png" },
  { id: "63", name: "Standard Deluxe Locker SS Top", model: "MC-40020 (C)", category: "Ward Care Solution", image: "/mc-40020c.png" },
  { id: "64", name: "Semi Deluxe Locker SS Top", model: "MC-40020 (D)", category: "Ward Care Solution", image: "/mc-40020d.png" },
  { id: "65", name: "Standard Locker Double SS Top", model: "MC-40020 (E)", category: "Ward Care Solution", image: "/mc-40020e.png" },
  { id: "66", name: "Standard Locker SS Top", model: "MC-40020 (F)", category: "Ward Care Solution", image: "/mc-40020f.png" },
  { id: "67", name: "Over Bed Table Gear Mechanism", model: "MC-40021 (A)", category: "Ward Care Solution", image: "/mc-40021a.png" },
  { id: "17", name: "Over Bed Table Gas Spring", model: "MC-40021 (C)", category: "Ward Care Solution", image: "/mc-40021c.png" },
  { id: "68", name: "Over Bed Table U Type", model: "MC-40021 (D)", category: "Ward Care Solution", image: "/mc-40021d.png" },
  { id: "69", name: "Sliding Over Bed Table", model: "MC-40021 (E)", category: "Ward Care Solution", image: "/mc-40021e.png" },
  { id: "70", name: "Revolving Stool", model: "MC-40022", category: "Ward Care Solution", image: "/mc-40022.png" },
  { id: "71", name: "Cylinder Trolley", model: "MC-40023", category: "Ward Care Solution", image: "/mc-40023.png" },
  { id: "72", name: "Kick Bucket", model: "MC-40024", category: "Ward Care Solution", image: "/mc-40024.png" },
  { id: "73", name: "Bowl Stand", model: "MC-40025", category: "Ward Care Solution", image: "/mc-40025.png" },
  { id: "74", name: "Saline Stand & IV Rod", model: "MC-40026", category: "Ward Care Solution", image: "/mc-40026.png" },
  { id: "18", name: "Instrument Trolley", model: "MC-40027", category: "Ward Care Solution", image: "/mc-40027.png" },
  { id: "19", name: "Medicine Trolley", model: "MC-40028", category: "Ward Care Solution", image: "/mc-40028.png" },
  { id: "75", name: "Sister Observation Trolley", model: "MC-40029", category: "Ward Care Solution", image: "/mc-40029.png" },
  { id: "76", name: "Laparoscopy Trolley", model: "MC-40030", category: "Ward Care Solution", image: "/mc-40030.png" },
  { id: "77", name: "Crash Cart Trolley", model: "MC-40031", category: "Ward Care Solution", image: "/mc-40031.png" },
  { id: "78", name: "Mayos Trolley", model: "MC-40032", category: "Ward Care Solution", image: "/mc-40032.png" },
  { id: "79", name: "Linen Trolley", model: "MC-40033", category: "Ward Care Solution", image: "/mc-40033.png" },
  { id: "80", name: "Waste Bin", model: "MC-40034", category: "Ward Care Solution", image: "/mc-40034.png" },
  { id: "81", name: "Instrument Cabinet", model: "MC-40035", category: "Ward Care Solution", image: "/mc-40035.png" },
  { id: "82", name: "Food Trolley", model: "MC-40036", category: "Ward Care Solution", image: "/mc-40036.png" },

  // STERILIZER SOLUTION
  { id: "20", name: "Horizontal Sterilizer", model: "MC-40054 (A)", category: "Sterilizer Solution", image: "/mc-40054a.png" },
  { id: "128", name: "Vertical Sterilizer", model: "MC-40054 (B)", category: "Sterilizer Solution", image: "/mc-40054b.png" },
  { id: "129", name: "Small Auto Clave", model: "MC-40055", category: "Sterilizer Solution", image: "/mc-40055.png" },
  { id: "130", name: "Instrument Sterilizer", model: "MC-40056", category: "Sterilizer Solution", image: "/mc-40056.png" },
  { id: "131", name: "Dressing Drum", model: "MC-40057", category: "Sterilizer Solution", image: "/mc-40057.png" },
  { id: "21", name: "Fogger Machine", model: "MC-40058", category: "Sterilizer Solution", image: "/mc-40058.png" },
  { id: "132", name: "Fumigator", model: "MC-40059", category: "Sterilizer Solution", image: "/mc-40059.png" },
  { id: "133", name: "Formalin Chamber", model: "MC-40060", category: "Sterilizer Solution", image: "/mc-40060.png" },
  { id: "134", name: "Cidex Tray", model: "MC-40061 (A)", category: "Sterilizer Solution", image: "/mc-40061a.png" },
  { id: "135", name: "Wire Mesh Tray", model: "MC-40061 (C)", category: "Sterilizer Solution", image: "/mc-40061c.png" },
  { id: "136", name: "Sink or Basin", model: "MC-40062", category: "Sterilizer Solution", image: "/mc-40062.png" },
  { id: "137", name: "3 Bay with Foot Switch", model: "MC-40063 (A)", category: "Sterilizer Solution", image: "/mc-40063a.png" },
  { id: "138", name: "Scrub Station", model: "MC-40063 (B)", category: "Sterilizer Solution", image: "/mc-40063b.png" },
  { id: "22", name: "Suction Machine", model: "MC-40064", category: "Sterilizer Solution", image: "/mc-40064.png" },

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
  { id: "29", name: "Stretcher Trolley with Rail & IV Stand", model: "MC-40040 (A)", category: "Transfer Solution", image: "/mc-40040a.png" },
  { id: "95", name: "Stretcher Trolley", model: "MC-40040 (B)", category: "Transfer Solution", image: "/mc-40040b.png" },
  { id: "96", name: "Canvas Stretcher", model: "MC-40041 (A)", category: "Transfer Solution", image: "/mc-40041a.png" },
  { id: "97", name: "Folding Stretcher (2 Fold)", model: "MC-40041 (B)", category: "Transfer Solution", image: "/mc-40041b.png" },
  { id: "98", name: "Ambulance Stretcher", model: "MC-40041 (C)", category: "Transfer Solution", image: "/mc-40041c.png" },
  { id: "99", name: "Scoop Stretcher", model: "MC-40041", category: "Transfer Solution", image: "/mc-40041.png" },
  { id: "30", name: "Wheel Chair", model: "MC-40042", category: "Transfer Solution", image: "/mc-40042.png" },

  // RADIANT WARMER & PHOTO THERAPY
  { id: "83", name: "Radiant Warmer with Trolley", model: "MC-40037", category: "Radiant Warmer & Photo Therapy", image: "/mc-40037a.png" },
  { id: "84", name: "Radiant Warmer with Detachable Trolley", model: "MC-40037", category: "Radiant Warmer & Photo Therapy", image: "/mc-40037b.png" },
  { id: "85", name: "Radiant Warmer with Double Surface Photo Therapy with Detachable Trolley", model: "MC-40037", category: "Radiant Warmer & Photo Therapy", image: "/mc-40037c.png" },
  { id: "86", name: "Radiant Warmer", model: "MC-40037", category: "Radiant Warmer & Photo Therapy", image: "/mc-40037d.png" },
  { id: "87", name: "Over Surface Photo Therapy", model: "MC-40037", category: "Radiant Warmer & Photo Therapy", image: "/mc-40037e.png" },
  { id: "88", name: "Under Surface Photo Therapy", model: "MC-40037", category: "Radiant Warmer & Photo Therapy", image: "/mc-40037f.png" },

  // GYNEC & MATERNAL SOLUTION
  { id: "89", name: "Fixed Gynec Couch", model: "MC-40038 (A)", category: "Gynec & Maternal Solution", image: "/mc-40038a.png" },
  { id: "90", name: "Upgradable Gynec Couch", model: "MC-40038 (B)", category: "Gynec & Maternal Solution", image: "/mc-40038b.png" },
  { id: "91", name: "Examination Couch Cum Gynec Table", model: "MC-40038 (C)", category: "Gynec & Maternal Solution", image: "/mc-40038c.png" },
  { id: "92", name: "Labour Table (3 Section)", model: "MC-40039 (A)", category: "Gynec & Maternal Solution", image: "/mc-40039a.png" },
  { id: "93", name: "Labour Table SS Top", model: "MC-40039 (B)", category: "Gynec & Maternal Solution", image: "/mc-40039b.png" },
  { id: "94", name: "Labour Table (Sectional)", model: "MC-40039 (C)", category: "Gynec & Maternal Solution", image: "/mc-40039c.png" },

  // OXYGEN GAS PIPE LINE ACCESSORIES
  { id: "146", name: "Mox Oxygen Regulator (Double Gauge)", model: "MC-40079 (A)", category: "Oxygen Gas Pipe Line Accessories", image: "/mc-40079a_double.png" },
  { id: "147", name: "Mox Oxygen Regulator (Single Gauge)", model: "MC-40079 (A)", category: "Oxygen Gas Pipe Line Accessories", image: "/mc-40079a_single.png" },
  { id: "148", name: "Fine Adjustment Valve", model: "MC-40080", category: "Oxygen Gas Pipe Line Accessories", image: "/mc-40080.png" },
  { id: "149", name: "BPC Flow Meter", model: "MC-40081", category: "Oxygen Gas Pipe Line Accessories", image: "/mc-40081.png" },
  { id: "150", name: "Nasal Cannula", model: "MC-40082", category: "Oxygen Gas Pipe Line Accessories", image: "/mc-40082.png" },
  { id: "151", name: "Oxygen Mask", model: "MC-40083", category: "Oxygen Gas Pipe Line Accessories", image: "/mc-40083.png" },
];
