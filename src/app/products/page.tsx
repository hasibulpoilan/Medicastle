"use client";

import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"] });

const allProducts = [
  { src: '/prod1.png', name: 'Premium Wheelchair' },
  { src: '/prod2.png', name: 'Oxygen Regulator' },
  { src: '/prod3.png', name: 'Acrylic Tray Setup' },
  { src: '/prod4.png', name: 'Hospital Ward Setup' },
  { src: '/prod5.png', name: 'Surgical Light' },
  { src: '/prod6.png', name: 'Dual Gauge Oxygen Regulator' },
  { src: '/prod7.png', name: 'Oxygen Humidifier Bottle' },
  { src: '/prod8.png', name: 'Adjustable Bedside Table' },
  { src: '/prod9.png', name: 'Advanced Motorized ICU Bed' },
  { src: '/prod10.png', name: 'Standard Hospital Bed' },
  { src: '/prod11.png', name: 'OT Light Pedestal' },
  { src: '/prod12.png', name: 'LED Surgical Light' },
  { src: '/prod13.png', name: 'Patient Care Bed' },
  { src: '/prod14.png', name: 'Infant Radiant Warmer' },
  { src: '/prod15.png', name: 'Phototherapy Unit' },
  { src: '/prod16.png', name: 'Central Oxygen Panel' },
  { src: '/prod17.png', name: 'Oxygen Manifold System' },
  { src: '/prod18.png', name: 'Oxygen Flowmeter' },
  { src: '/prod19.png', name: 'Surgical Forceps' },
  { src: '/prod20.png', name: 'Digital Syringe Pump' },
  { src: '/prod21.png', name: 'Oxygen Concentrator' },
  { src: '/prod22.png', name: 'Nebulizer Machine' },
  { src: '/prod23.png', name: 'Digital BP Monitor' }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50/50 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-[hsl(var(--medicastle-blue))]/70 hover:text-[hsl(var(--medicastle-red))] transition-colors font-medium text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
        
        <div className="text-center mb-16">
          <div className="inline-block text-[hsl(var(--medicastle-blue))] font-bold tracking-widest uppercase text-xs border border-[hsl(var(--medicastle-blue))]/30 px-3 py-1 rounded-full bg-blue-50/50 mb-4">
            Complete Catalog
          </div>
          <h1 className={`${playfair.className} text-4xl md:text-5xl font-black leading-tight`}>
            <span className="text-[hsl(var(--medicastle-blue))]">All </span>
            <span className="text-[hsl(var(--medicastle-red))] italic">Products.</span>
          </h1>
          <p className="text-[hsl(var(--medicastle-blue))]/80 mt-4 max-w-2xl mx-auto font-medium">Browse our extensive range of high-quality medical equipment, from hospital furniture to advanced respiratory care.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {allProducts.map((prod, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              key={i} 
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[hsl(var(--medicastle-red))]/30 flex flex-col"
            >
              <div className="aspect-square w-full overflow-hidden bg-gray-50/50 flex items-center justify-center p-4">
                <img src={prod.src} alt={prod.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4 text-center mt-auto border-t border-gray-50">
                <h4 className="font-bold text-[hsl(var(--medicastle-blue))] text-sm">{prod.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
