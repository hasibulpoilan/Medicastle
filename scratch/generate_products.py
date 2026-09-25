import json

categories = [
  "All",
  "OPD Solution",
  "Hospital Beds & Accessories",
  "Ward Care Solution",
  "Gynec & Maternal Solution",
  "Transfer Solution",
  "O.T. Solution",
  "Sterilizer Solution",
  "Critical Care Equipment",
  "Oxygen Gas Pipe Line Accessories"
]

products = []
id_counter = 1

def add_product(name, model, category):
    global id_counter
    img_idx = ((id_counter - 1) % 23) + 1
    products.append({
        "id": f"prod-{id_counter}",
        "name": name,
        "model": model,
        "category": category,
        "image": f"/prod{img_idx}.png"
    })
    id_counter += 1

# PAGE 3 - OPD SOLUTION (11) + HOSPITAL BED (3) = 14
add_product("Examination Couch Updated", "MC-4001 (A)", "OPD Solution")
add_product("Examination Couch", "MC-4001 (B)", "OPD Solution")
add_product("Hydraulic Examination Couch", "MC-4001 (C)", "OPD Solution")
add_product("Fixed Examination Couch", "MC-4001 (D)", "OPD Solution")
add_product("Examination Table", "MC-4001 (E)", "OPD Solution")
add_product("Examination Table Mattress", "MC-4002", "OPD Solution")
add_product("Double Foot Step", "MC-4003 (A)", "OPD Solution")
add_product("Single Foot Step", "MC-4003 (B)", "OPD Solution")
add_product("Single X-Ray View Box (LED)", "MC-4004 (A)", "OPD Solution")
add_product("X-Ray View Box (Double LED)", "MC-4004 (B)", "OPD Solution")
add_product("Lobby Chair (MS / All SS)", "MC-4005", "OPD Solution")

add_product("Motorized ICCU Bed", "MC-4006 (A)", "Hospital Beds & Accessories")
add_product("Manual ICCU Bed", "MC-4006 (B)", "Hospital Beds & Accessories")
add_product("Motorized Fowler Bed", "MC-4007 (A)", "Hospital Beds & Accessories")

# PAGE 4 - HOSPITAL BED (21)
add_product("Manual Fowler Bed", "MC-4007 (B)", "Hospital Beds & Accessories")
add_product("ICU Bed", "MC-4008", "Hospital Beds & Accessories")
add_product("Children Bed", "MC-4009 (A)", "Hospital Beds & Accessories")
add_product("Children Bed (Delux)", "MC-4009 (B)", "Hospital Beds & Accessories")
add_product("Fowler Bed", "MC-40010", "Hospital Beds & Accessories")
add_product("Semi - Fowler Bed", "MC-40011", "Hospital Beds & Accessories")
add_product("Deluxe Plain Bed (Back Rest)", "MC-40012 (A)", "Hospital Beds & Accessories")
add_product("Plain Bed (Back Rest)", "MC-40012 (B)", "Hospital Beds & Accessories")
add_product("Delux Plain Bed (Back Rest)", "MC-40012 (C)", "Hospital Beds & Accessories")
add_product("Plain Bed", "MC-40012 (D)", "Hospital Beds & Accessories")
add_product("Deluxe Plain Bed", "MC-40012 (E)", "Hospital Beds & Accessories")
add_product("ABS Head Bow & Leg Bow (Update)", "MC-40013 (A) Update", "Hospital Beds & Accessories")
add_product("ABS Head Bow & Leg Bow (Standard)", "MC-40013 (A) Standard", "Hospital Beds & Accessories")
add_product("SS Head Bow & Leg Bow (SS)", "MC-40013 (B) SS", "Hospital Beds & Accessories")
add_product("SS Head Bow & Leg Bow (Laminated)", "MC-40013 (B) Laminated", "Hospital Beds & Accessories")
add_product("MS Head Bow & Leg Bow (MS)", "MC-40013 (C) MS", "Hospital Beds & Accessories")
add_product("MS Head Bow & Leg Bow (Laminated)", "MC-40013 (C) Laminated", "Hospital Beds & Accessories")
add_product("Split Railing", "MC-40014 (A)", "Hospital Beds & Accessories")

# PAGE 5 - HOSPITAL BED (12) + WARD CARE (6) = 18
add_product("Collapsible Railing", "MC-40014 (B)", "Hospital Beds & Accessories")
add_product("D Type Railing", "MC-40014 (C)", "Hospital Beds & Accessories")
add_product("Bed Castors (Medical / Johnson)", "MC-40015", "Hospital Beds & Accessories")
add_product("Ripple Mattress", "MC-40016 (A)", "Hospital Beds & Accessories")
add_product("Fowler Bed Mattress", "MC-40016 (B)", "Hospital Beds & Accessories")
add_product("Semi Fowler Bed Mattress", "MC-40016 (C)", "Hospital Beds & Accessories")
add_product("Plain Bed Mattress", "MC-40016 (D)", "Hospital Beds & Accessories")
add_product("Children Bed Mattress", "MC-40016 (E)", "Hospital Beds & Accessories")
add_product("Baby Cot & Cradle with Mattress", "MC-40017", "Hospital Beds & Accessories")
add_product("Baby Trolley (Optional All SS)", "MC-40018", "Hospital Beds & Accessories")
add_product("Attendant Bed", "MC-40019 (A)", "Hospital Beds & Accessories")
add_product("Attendant Bed Cum Chair", "MC-40019 (B)", "Hospital Beds & Accessories")

add_product("Deluxe Locker SS Top", "MC-40020 (A)", "Ward Care Solution")
add_product("Deluxe Locker ABS Top", "MC-40020 (B)", "Ward Care Solution")
add_product("Standard Deluxe Locker SS Top", "MC-40020 (C)", "Ward Care Solution")
add_product("Semi Deluxe Locker SS Top", "MC-40020 (D)", "Ward Care Solution")
add_product("Standard Locker Double SS Top", "MC-40020 (E)", "Ward Care Solution")
add_product("Standard Locker SS Top", "MC-40020 (F)", "Ward Care Solution")

# PAGE 6 - WARD CARE (21)
add_product("Over Bed Table Gear Mechanism", "MC-40021 (A)", "Ward Care Solution")
add_product("Over Bed Table Gear Mechanism", "MC-40021 (B)", "Ward Care Solution")
add_product("Over Bed Table Gas Spring", "MC-40021 (C)", "Ward Care Solution")
add_product("Over Bed Table U Type", "MC-40021 (D)", "Ward Care Solution")
add_product("Sliding Over Bed Table", "MC-40021 (E)", "Ward Care Solution")
add_product("Revolving Stool (All SS)", "MC-40022 All SS", "Ward Care Solution")
add_product("Revolving Stool (Kushan Top)", "MC-40022 Kushan", "Ward Care Solution")
add_product("Revolving Stool (SS Top)", "MC-40022 SS Top", "Ward Care Solution")
add_product("Cylinder Trolley A", "MC-40023 (A)", "Ward Care Solution")
add_product("Cylinder Trolley B", "MC-40023 (B)", "Ward Care Solution")
add_product("Cylinder Trolley C", "MC-40023 (C)", "Ward Care Solution")
add_product("Cylinder Trolley D", "MC-40023 (D)", "Ward Care Solution")
add_product("Kick Bucket (MS / All SS)", "MC-40024", "Ward Care Solution")
add_product("Bowl Stand (All SS)", "MC-40025 All SS", "Ward Care Solution")
add_product("Bowl Stand (MS with SS Bowl)", "MC-40025 MS", "Ward Care Solution")
add_product("Single Bowl Stand", "MC-40025 Single", "Ward Care Solution")
add_product("Saline Stand & IV Rod (Assorted Models)", "MC-40026", "Ward Care Solution")
add_product("Instrument Trolley (All SS)", "MC-40027 All SS", "Ward Care Solution")
add_product("Instrument Trolley (SS Top)", "MC-40027 SS Top", "Ward Care Solution")
add_product("Medicine Trolley (SS Top / All SS)", "MC-40028", "Ward Care Solution")
add_product("Sister Observation Trolley", "MC-40029", "Ward Care Solution")

# PAGE 7 - WARD CARE (11) + RADIANT WARMER (5) = 16
add_product("Laparoscopy Trolley", "MC-40030", "Ward Care Solution")
add_product("Crash Cart Trolley (All SS Square Pipe)", "MC-40031 All SS Square", "Ward Care Solution")
add_product("Crash Cart Trolley (All SS Round Pipe)", "MC-40031 All SS Round", "Ward Care Solution")
add_product("Crash Cart Trolley (MS)", "MC-40031 MS", "Ward Care Solution")
add_product("Crash Cart Trolley (All SS)", "MC-40031 All SS", "Ward Care Solution")
add_product("Mayo's Trolley (MS / All SS / Gear)", "MC-40032", "Ward Care Solution")
add_product("Linen Trolley (SS / MS)", "MC-40033", "Ward Care Solution")
add_product("Linen Trolley Square (SS)", "MC-40033 Square SS", "Ward Care Solution")
add_product("Garbage Trolley Square (MS)", "MC-40033 Garbage", "Ward Care Solution")
add_product("Waste Bin (Assorted)", "MC-40034", "Ward Care Solution")
add_product("Instrument Cabinet (Optional All SS / Double Door)", "MC-40035", "Ward Care Solution")
add_product("Food Trolley (Optional Heater)", "MC-40036", "Ward Care Solution")

add_product("Radiant Warmer with Trolley", "MC-40037 (A)", "Critical Care Equipment")
add_product("Radiant Warmer with Detachable Trolley", "MC-40037 (B)", "Critical Care Equipment")
add_product("Radiant Warmer Double Surface with Detachable Trolley", "MC-40037 (C)", "Critical Care Equipment")
add_product("Radiant Warmer (Open Care System)", "MC-40037 (D)", "Critical Care Equipment")
add_product("Under / Over Surface Photo Therapy", "MC-40037 (E)", "Critical Care Equipment")

# PAGE 8 - GYNEC (6) + TRANSFER (9) = 15
add_product("Fixed Gynec Couch", "MC-40038 (A)", "Gynec & Maternal Solution")
add_product("Upgrabable Gynec Couch", "MC-40038 (B)", "Gynec & Maternal Solution")
add_product("Examination Couch Cum Gynec Table", "MC-40038 (C)", "Gynec & Maternal Solution")
add_product("Labour Table (3 Section)", "MC-40039 (A)", "Gynec & Maternal Solution")
add_product("Labour Table SS Top (Option All SS / Alum)", "MC-40039 (B)", "Gynec & Maternal Solution")
add_product("Labour Table (Sectional)", "MC-40039 (C)", "Gynec & Maternal Solution")

add_product("Stretcher Trolley with Rail & IV Stand", "MC-40040 (A)", "Transfer Solution")
add_product("Stretcher Trolley SS Top", "MC-40040 (B)", "Transfer Solution")
add_product("Stretcher Trolley All SS", "MC-40040 (C)", "Transfer Solution")
add_product("Canvas Stretcher", "MC-40041 (A)", "Transfer Solution")
add_product("Folding Stretcher (2 Fold)", "MC-40041 (B)", "Transfer Solution")
add_product("Ambulance Stretcher", "MC-40041 (C)", "Transfer Solution")
add_product("Scoop Stretcher", "MC-40041 (D)", "Transfer Solution")
add_product("Scoop Stretcher (AMRI Compatible)", "MC-40041 (E)", "Transfer Solution")
add_product("Wheel Chair", "MC-40042 (A)", "Transfer Solution")

# PAGE 9 - TRANSFER (3) + O.T (13) = 16
add_product("Wheel Chair", "MC-40042 (B)", "Transfer Solution")
add_product("Wheel Chair", "MC-40042 (C)", "Transfer Solution")
add_product("Wheel Chair", "MC-40042 (D)", "Transfer Solution")

add_product("Electro Mechanical C-ARM OT Table (6 Func)", "MC-40043 (A)", "O.T. Solution")
add_product("C-ARM OT Table Actuator (4 Func)", "MC-40043 (B)", "O.T. Solution")
add_product("Hydraulic C-ARM OT Table (4 Func)", "MC-40043 (C)", "O.T. Solution")
add_product("Side Controlled OT Table", "MC-40043 (D)", "O.T. Solution")
add_product("Standard Side Controlled OT Table", "MC-40043 (E)", "O.T. Solution")
add_product("Ortho Attachment", "MC-40044", "O.T. Solution")
add_product("Neuro Attachment", "MC-40045", "O.T. Solution")
add_product("Spinal Attachment", "MC-40046", "O.T. Solution")
add_product("Finger Lock", "MC-40047", "O.T. Solution")
add_product("Ceiling LED OT Light (3 Dome)", "MC-40048 (A)", "O.T. Solution")
add_product("Ceiling LED OT Light (4 Dome)", "MC-40048 (B)", "O.T. Solution")
add_product("Ceiling LED OT Light (5 Dome)", "MC-40048 (C)", "O.T. Solution")

# PAGE 10 - O.T (15)
add_product("Ceiling LED OT Light (3+3 Dome)", "MC-40048 (D)", "O.T. Solution")
add_product("Ceiling LED OT Light (3+4 Dome)", "MC-40048 (E)", "O.T. Solution")
add_product("Ceiling LED OT Light (3+5 Dome)", "MC-40048 (F)", "O.T. Solution")
add_product("Ceiling LED OT Light (4+4 Dome)", "MC-40048 (G)", "O.T. Solution")
add_product("Ceiling LED OT Light (4+5 Dome)", "MC-40048 (H)", "O.T. Solution")
add_product("Ceiling LED OT Light (5+5 Dome)", "MC-40048 (I)", "O.T. Solution")
add_product("Ceiling LED OT Light (3 Dome)", "MC-40048 (J)", "O.T. Solution")
add_product("Ceiling LED OT Light (4 Dome)", "MC-40048 (K)", "O.T. Solution")
add_product("Ceiling LED OT Light (5 Dome)", "MC-40048 (L)", "O.T. Solution")
add_product("Ceiling LED OT Light (3+3 Dome)", "MC-40048 (M)", "O.T. Solution")
add_product("Ceiling LED OT Light (3+4 Dome)", "MC-40048 (N)", "O.T. Solution")
add_product("Ceiling LED OT Light (3+5 Dome)", "MC-40048 (O)", "O.T. Solution")
add_product("Ceiling LED OT Light (4+4 Dome)", "MC-40048 (P)", "O.T. Solution")
add_product("Ceiling LED OT Light (4+5 Dome)", "MC-40048 (Q)", "O.T. Solution")
add_product("Ceiling LED OT Light (5+5 Dome)", "MC-40048 (R)", "O.T. Solution")

# PAGE 11 - O.T (14)
add_product("Mobile LED OT Light (3 Dome)", "MC-40049 (A)", "O.T. Solution")
add_product("Mobile LED OT Light (4 Dome)", "MC-40049 (B)", "O.T. Solution")
add_product("Mobile LED OT Light (5 Dome)", "MC-40049 (C)", "O.T. Solution")
add_product("Mobile LED OT Light (3 Dome)", "MC-40049 (D)", "O.T. Solution")
add_product("Mobile LED OT Light (4 Dome)", "MC-40049 (E)", "O.T. Solution")
add_product("Mobile LED OT Light (5 Dome)", "MC-40049 (F)", "O.T. Solution")
add_product("LED OT Spot Light (7 LED)", "MC-40050 (A)", "O.T. Solution")
add_product("LED OT Spot Light (14 LED)", "MC-40050 (B)", "O.T. Solution")
add_product("LED OT Spot Light (21 LED)", "MC-40050 (C)", "O.T. Solution")
add_product("OT Pendent", "MC-40051", "O.T. Solution")
add_product("Mob Stand", "MC-40052", "O.T. Solution")
add_product("Boyles Apparatus (Venus)", "MC-40053 (A)", "O.T. Solution")
add_product("Venus Compact with Hypoxia Guard", "MC-40053 (B)", "O.T. Solution")
add_product("Boyles Apparatus (Hypoxia Guard)", "MC-40053 (C/D)", "O.T. Solution")

# PAGE 12 - STERILIZER (17)
add_product("Horizontal Sterilizer", "MC-40054 (A)", "Sterilizer Solution")
add_product("Vertical Sterilizer", "MC-40054 (B)", "Sterilizer Solution")
add_product("Small Auto Clave", "MC-40055", "Sterilizer Solution")
add_product("Instrument Sterilizer", "MC-40056", "Sterilizer Solution")
add_product("Dressing Drum", "MC-40057", "Sterilizer Solution")
add_product("Fogger Machine (Plastic / SS Tank)", "MC-40058", "Sterilizer Solution")
add_product("Fumigator", "MC-40059", "Sterilizer Solution")
add_product("Formalin Chamber", "MC-40060", "Sterilizer Solution")
add_product("Cidex Tray", "MC-40061 (A)", "Sterilizer Solution")
add_product("Tray", "MC-40061 (B)", "Sterilizer Solution")
add_product("Wire Mesh Tray", "MC-40061 (C)", "Sterilizer Solution")
add_product("Sink or Basin", "MC-40062", "Sterilizer Solution")
add_product("Scrub Station (3 Bay Foot Switch)", "MC-40063 (A)", "Sterilizer Solution")
add_product("Scrub Station (2 Bay Foot Switch)", "MC-40063 (B)", "Sterilizer Solution")
add_product("Scrub Station (Manually Operated)", "MC-40063 (C)", "Sterilizer Solution")
add_product("Suction Machine (Glass / Poly)", "MC-40064 (A/B)", "Sterilizer Solution")
add_product("Baby Suction", "MC-40064 (C)", "Sterilizer Solution")

# PAGE 13 - CRITICAL CARE (17)
add_product("Patient Monitor (BPL, S-CURE, NISCOMED)", "MC-40065", "Critical Care Equipment")
add_product("ECG Machine (BPL, CONTEC)", "MC-40066", "Critical Care Equipment")
add_product("Bi-Pap Machine", "MC-40067", "Critical Care Equipment")
add_product("C-Pad Machine", "MC-40068", "Critical Care Equipment")
add_product("Fetal Monitor", "MC-40069", "Critical Care Equipment")
add_product("Fetal Doppler", "MC-40070", "Critical Care Equipment")
add_product("Spirometer", "MC-40071", "Critical Care Equipment")
add_product("Nebuliser Machine", "MC-40072", "Critical Care Equipment")
add_product("Defibrillator", "MC-40073", "Critical Care Equipment")
add_product("Oxygen Concentrator", "MC-40074", "Critical Care Equipment")
add_product("Fingertips Pulse Oxi-Meter", "MC-40075", "Critical Care Equipment")
add_product("Syringe Pump", "MC-40076", "Critical Care Equipment")
add_product("Advanced ICU Ventilator", "MC-40077 (A)", "Critical Care Equipment")
add_product("ICU Ventilator", "MC-40077 (B)", "Critical Care Equipment")
add_product("ICU Ventilator", "MC-40077 (C)", "Critical Care Equipment")
add_product("ICU Ventilator", "MC-40077 (D/E)", "Critical Care Equipment")
add_product("Transport Ventilator", "MC-40078 (A/B)", "Critical Care Equipment")

# PAGE 14 - OXYGEN (6)
add_product("MOX Oxygen Regulator (Double Gauge)", "MC-40079 (A)", "Oxygen Gas Pipe Line Accessories")
add_product("MOX Oxygen Regulator (Single Gauge)", "MC-40079 (B)", "Oxygen Gas Pipe Line Accessories")
add_product("Fine Adjustment Valve", "MC-40080", "Oxygen Gas Pipe Line Accessories")
add_product("BPC Flow Meter", "MC-40081", "Oxygen Gas Pipe Line Accessories")
add_product("Nasal Cannula", "MC-40082", "Oxygen Gas Pipe Line Accessories")
add_product("Oxygen Mask", "MC-40083", "Oxygen Gas Pipe Line Accessories")

# Let's see how many we missed from the user's 171 count.
# I will output the file using the extracted objects.
out_text = f"""export type ProductCategory =
  | "All"
  | "OPD Solution"
  | "Hospital Beds & Accessories"
  | "Ward Care Solution"
  | "Gynec & Maternal Solution"
  | "Transfer Solution"
  | "O.T. Solution"
  | "Sterilizer Solution"
  | "Critical Care Equipment"
  | "Oxygen Gas Pipe Line Accessories";

export interface Product {{
  id: string;
  name: string;
  model: string;
  category: ProductCategory;
  image: string;
}}

export const categories: ProductCategory[] = {json.dumps(categories, indent=2)};

export const products: Product[] = {json.dumps(products, indent=2)};
"""

with open("src/data/products.ts", "w") as f:
    f.write(out_text)

print(f"Total products generated: {len(products)}")
