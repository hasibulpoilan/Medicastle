"use client";

import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { ShieldCheck, Award, HeartHandshake, ArrowRight, CheckCircle2 } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function AboutPage() {
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
            Who We Are
          </div>
          <h1 className={`${playfair.className} text-4xl md:text-6xl font-black leading-tight tracking-tight`}>
            <span className="text-[hsl(var(--medicastle-blue))]">About </span>
            <span className="text-[hsl(var(--medicastle-red))] italic">Medi Castle.</span>
          </h1>
          <p className="text-[hsl(var(--medicastle-blue))]/80 mt-6 max-w-2xl mx-auto font-medium text-lg">
            Over 15 years of unwavering commitment to delivering premium medical equipment and enhancing patient care across West Bengal.
          </p>
        </motion.div>
      </section>

      {/* OUR STORY & IMAGE SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto mb-24">
        <div className="bg-white rounded-[3rem] border border-gray-100 shadow-xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Text */}
          <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <h2 className={`${playfair.className} text-3xl md:text-4xl font-black text-[hsl(var(--medicastle-blue))] mb-6`}>
              A Legacy of <span className="text-[hsl(var(--medicastle-red))]">Trust & Quality.</span>
            </h2>
            <div className="space-y-6 text-[hsl(var(--medicastle-blue))]/70 font-medium leading-relaxed">
              <p>
                Founded over a decade and a half ago, Medi Castle has grown to become one of the most trusted names in the medical equipment supply industry. We understand that in healthcare, quality and reliability are never optional.
              </p>
              <p>
                From premium wheelchairs and hospital beds to advanced home ICU setups and respiratory care devices, we bridge the gap between world-class medical technology and the patients who need them most.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[hsl(var(--medicastle-red))]" />
                  <span className="font-bold text-[hsl(var(--medicastle-blue))]">ISO 9001:2015</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[hsl(var(--medicastle-red))]" />
                  <span className="font-bold text-[hsl(var(--medicastle-blue))]">CE Certified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 relative min-h-[400px] bg-gray-50/50">
            <div className="absolute inset-0 bg-[hsl(var(--medicastle-blue))]/5 z-10 mix-blend-multiply"></div>
            <img 
              src="/hero_banner.jpg" 
              alt="Medical Team / Equipment" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* AUTHORIZED DEALER & PARTNERS */}
      <section className="bg-white py-24 border-y border-gray-100">
        <div className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto text-center">
          <div className="inline-block text-[hsl(var(--medicastle-blue))] font-bold tracking-widest uppercase text-xs border border-[hsl(var(--medicastle-blue))]/30 px-3 py-1 rounded-full bg-blue-50/50 mb-4">
            Authorized Partners
          </div>
          <h2 className={`${playfair.className} text-3xl md:text-5xl font-black text-[hsl(var(--medicastle-blue))] mb-12`}>
            World-Class <span className="text-[hsl(var(--medicastle-red))]">Brands.</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50/50 p-10 rounded-[2rem] border border-gray-100 flex flex-col items-center justify-center gap-4 hover:border-[hsl(var(--medicastle-blue))]/30 transition-all hover:bg-white hover:shadow-xl"
            >
              <Award className="w-12 h-12 text-[hsl(var(--medicastle-blue))]" />
              <h3 className="text-2xl font-black text-[hsl(var(--medicastle-blue))] text-center">BPL Medical Technologies</h3>
              <p className="text-[hsl(var(--medicastle-blue))]/70 font-medium text-center">Authorized Dealer</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50/50 p-10 rounded-[2rem] border border-gray-100 flex flex-col items-center justify-center gap-4 hover:border-[hsl(var(--medicastle-red))]/30 transition-all hover:bg-white hover:shadow-xl"
            >
              <Award className="w-12 h-12 text-[hsl(var(--medicastle-red))]" />
              <h3 className="text-2xl font-black text-[hsl(var(--medicastle-blue))] text-center">Deckmount Electronics</h3>
              <p className="text-[hsl(var(--medicastle-blue))]/70 font-medium text-center">Authorized Dealer</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto py-24">
        <div className="text-center mb-16">
          <h2 className={`${playfair.className} text-3xl md:text-5xl font-black text-[hsl(var(--medicastle-blue))]`}>
            Our Core <span className="text-[hsl(var(--medicastle-red))]">Values.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-16 h-16 bg-blue-50 text-[hsl(var(--medicastle-blue))] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[hsl(var(--medicastle-blue))] mb-4">Uncompromised Quality</h3>
            <p className="text-[hsl(var(--medicastle-blue))]/70 font-medium">
              We never compromise on the standards of our medical equipment. Patient safety and product reliability are our top priorities.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[hsl(var(--medicastle-blue))] p-10 rounded-[2rem] shadow-xl text-center hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-16 h-16 bg-white/10 text-[hsl(var(--medicastle-red))] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HeartHandshake className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Dedicated Support</h3>
            <p className="text-white/80 font-medium">
              We stand by our clients 24/7. From initial consultation to home ICU installations, our technical team is always ready to assist.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-16 h-16 bg-red-50 text-[hsl(var(--medicastle-red))] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[hsl(var(--medicastle-blue))] mb-4">Affordable Care</h3>
            <p className="text-[hsl(var(--medicastle-blue))]/70 font-medium">
              Through our flexible sales and rental programs, we ensure that premium medical care remains accessible to everyone.
            </p>
          </motion.div>

        </div>
        
        <div className="mt-16 text-center">
          <Link href="/services" className="inline-flex items-center gap-2 bg-[hsl(var(--medicastle-red))] text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all hover:shadow-xl hover:-translate-y-1">
            Explore Our Services <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
