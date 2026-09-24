"use client";

import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { ArrowRight, Package, Clock, Activity, Phone, ClipboardCheck, Truck, ShieldCheck, Award, HeartHandshake } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50/50 pt-24 pb-20">
      
      {/* HERO SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto text-center mt-8 md:mt-12 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block text-[hsl(var(--medicastle-red))] font-bold tracking-widest uppercase text-xs border border-[hsl(var(--medicastle-red))]/30 px-4 py-1.5 rounded-full bg-red-50/50 mb-6">
            Our Services
          </div>
          <h1 className={`${playfair.className} text-4xl md:text-6xl font-black leading-tight tracking-tight`}>
            <span className="text-[hsl(var(--medicastle-blue))]">Comprehensive </span>
            <span className="text-[hsl(var(--medicastle-red))] italic">Care Solutions.</span>
          </h1>
          <p className="text-[hsl(var(--medicastle-blue))]/80 mt-6 max-w-2xl mx-auto font-medium text-lg">
            From purchasing premium equipment to flexible rentals and complete Home ICU setups, we provide end-to-end medical support tailored to your needs.
          </p>
        </motion.div>
      </section>

      {/* MAIN SERVICES GRID */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Service 1: Sales */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-[hsl(var(--medicastle-blue))]/30 transition-all duration-300 group flex flex-col overflow-hidden"
          >
            <div className="h-56 w-full bg-gray-50 flex items-center justify-center p-6 relative overflow-hidden border-b border-gray-100">
              <img src="/prod21.png" alt="Medical Equipment Sales" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="w-12 h-12 bg-blue-50 text-[hsl(var(--medicastle-blue))] rounded-xl flex items-center justify-center mb-6">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-[hsl(var(--medicastle-blue))]">Equipment </span>
                <span className="text-[hsl(var(--medicastle-red))]">Sales</span>
              </h3>
              <p className="text-[hsl(var(--medicastle-blue))]/70 font-medium mb-8 flex-grow">
                Purchase high-quality, certified medical equipment directly from us. We are authorized dealers for top brands like BPL Medical Technologies, ensuring reliability and warranty support.
              </p>
              <Link href="/products" className="inline-flex items-center gap-2 text-[hsl(var(--medicastle-red))] font-bold hover:gap-3 transition-all">
                Browse Products <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Service 2: Rentals */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-[hsl(var(--medicastle-red))]/30 transition-all duration-300 group flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-[hsl(var(--medicastle-red))] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl z-20 shadow-md">Popular</div>
            <div className="h-56 w-full bg-gray-50 flex items-center justify-center p-6 relative overflow-hidden border-b border-gray-100">
              <img src="/prod1.png" alt="Medical Equipment Rental" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="w-12 h-12 bg-red-50 text-[hsl(var(--medicastle-red))] rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-[hsl(var(--medicastle-blue))]">Equipment </span>
                <span className="text-[hsl(var(--medicastle-red))]">Rental</span>
              </h3>
              <p className="text-[hsl(var(--medicastle-blue))]/70 font-medium mb-8 flex-grow">
                Cost-effective and flexible rental plans for short-term recovery. Rent wheelchairs, hospital beds, oxygen concentrators, and more without the heavy upfront investment.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[hsl(var(--medicastle-red))] font-bold hover:gap-3 transition-all">
                Inquire Rental Rates <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Service 3: Home ICU */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-[hsl(var(--medicastle-blue))]/30 transition-all duration-300 group flex flex-col overflow-hidden"
          >
            <div className="h-56 w-full bg-gray-50 flex items-center justify-center p-6 relative overflow-hidden border-b border-gray-100">
              <img src="/p3.jpg" alt="Home ICU Setup" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-8 flex flex-col flex-grow relative z-10">
              <div className="w-12 h-12 bg-blue-50 text-[hsl(var(--medicastle-blue))] rounded-xl flex items-center justify-center mb-6">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-[hsl(var(--medicastle-blue))]">Home ICU </span>
                <span className="text-[hsl(var(--medicastle-red))]">Setup</span>
              </h3>
              <p className="text-[hsl(var(--medicastle-blue))]/70 font-medium mb-8 flex-grow relative z-10">
                Complete intensive care unit setups right in the comfort of your home. We provide motorized beds, multi-para monitors, BIPAP/CPAP machines, and continuous technical support.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[hsl(var(--medicastle-red))] font-bold hover:gap-3 transition-all relative z-10">
                Request ICU Setup <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* HOW IT WORKS PROCESS */}
      <section className="bg-white py-24 border-y border-gray-100">
        <div className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto text-center">
          <h2 className={`${playfair.className} text-3xl md:text-5xl font-black text-[hsl(var(--medicastle-blue))] mb-16`}>
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop only) */}
            <div className="hidden md:block absolute top-[2.5rem] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-blue-100 via-red-100 to-blue-100 z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-white border-4 border-blue-50 rounded-full flex items-center justify-center text-[hsl(var(--medicastle-blue))] shadow-lg mb-6">
                <Phone className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[hsl(var(--medicastle-blue))] mb-3">1. Contact Us</h4>
              <p className="text-[hsl(var(--medicastle-blue))]/70 font-medium max-w-xs">
                Call or email us with your requirements. Our experts will assess your needs instantly.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-white border-4 border-red-50 rounded-full flex items-center justify-center text-[hsl(var(--medicastle-red))] shadow-lg mb-6">
                <ClipboardCheck className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[hsl(var(--medicastle-blue))] mb-3">2. Choose Plan</h4>
              <p className="text-[hsl(var(--medicastle-blue))]/70 font-medium max-w-xs">
                Select from our flexible rental, purchase, or complete ICU setup packages.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-[hsl(var(--medicastle-blue))] border-4 border-blue-100 rounded-full flex items-center justify-center text-white shadow-lg mb-6">
                <Truck className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[hsl(var(--medicastle-blue))] mb-3">3. Delivery & Setup</h4>
              <p className="text-[hsl(var(--medicastle-blue))]/70 font-medium max-w-xs">
                We deliver directly to your doorstep and our technicians ensure safe installation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - MINI STATS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto py-24">
        <div className="bg-[hsl(var(--medicastle-blue))] rounded-[3rem] p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero_banner.jpg')] bg-cover bg-center opacity-5 mix-blend-overlay pointer-events-none"></div>
          
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-black mb-12 relative z-10`}>
            Trusted by Thousands Across Bengal
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-12 h-12 text-[hsl(var(--medicastle-red))] mb-4" />
              <h4 className="text-4xl font-black mb-2">15+</h4>
              <p className="text-white/80 font-medium text-sm uppercase tracking-widest">Years Experience</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Award className="w-12 h-12 text-[hsl(var(--medicastle-red))] mb-4" />
              <h4 className="text-2xl font-black mb-2 leading-tight">ISO 9001:2015<br/>& CE Certified</h4>
              <p className="text-white/80 font-medium text-sm uppercase tracking-widest mt-2">Quality Assured</p>
            </div>
            
            <div className="flex flex-col items-center">
              <HeartHandshake className="w-12 h-12 text-[hsl(var(--medicastle-red))] mb-4" />
              <h4 className="text-4xl font-black mb-2">24/7</h4>
              <p className="text-white/80 font-medium text-sm uppercase tracking-widest">Emergency Support</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
