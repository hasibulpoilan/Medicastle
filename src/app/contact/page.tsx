"use client";

import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { MapPin, PhoneCall, Mail, Send, Building2, Clock } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50/50 pt-24 pb-20">
      
      {/* HEADER SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto text-center mt-8 md:mt-12 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block text-[hsl(var(--medicastle-red))] font-bold tracking-widest uppercase text-xs border border-[hsl(var(--medicastle-red))]/30 px-4 py-1.5 rounded-full bg-red-50/50 mb-6">
            Get In Touch
          </div>
          <h1 className={`${playfair.className} text-4xl md:text-6xl font-black leading-tight tracking-tight`}>
            <span className="text-[hsl(var(--medicastle-blue))]">We're Here to </span>
            <span className="text-[hsl(var(--medicastle-red))] italic">Help You.</span>
          </h1>
          <p className="text-[hsl(var(--medicastle-blue))]/80 mt-6 max-w-2xl mx-auto font-medium text-lg">
            Whether you need premium medical equipment, a home ICU setup, or have a question about our services, our team is ready to assist you.
          </p>
        </motion.div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* CONTACT INFORMATION CARDS */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-blue-50 text-[hsl(var(--medicastle-blue))] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[hsl(var(--medicastle-blue))] group-hover:text-white transition-all duration-500">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--medicastle-blue))] mb-2">Call Us</h3>
              <p className="text-[hsl(var(--medicastle-blue))]/70 text-sm mb-4">We are available for sales & support.</p>
              <div className="space-y-2">
                <p className="text-[hsl(var(--medicastle-red))] font-bold text-lg">+91 89618 57588</p>
                <p className="text-[hsl(var(--medicastle-red))] font-bold text-lg">+91 89027 21080</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-red-50 text-[hsl(var(--medicastle-red))] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[hsl(var(--medicastle-red))] group-hover:text-white transition-all duration-500">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--medicastle-blue))] mb-2">Email Us</h3>
              <p className="text-[hsl(var(--medicastle-blue))]/70 text-sm mb-4">Drop us an email anytime.</p>
              <p className="text-[hsl(var(--medicastle-red))] font-bold text-lg">medicastle6@gmail.com</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[hsl(var(--medicastle-blue))] p-8 rounded-[2rem] shadow-lg text-white"
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-[hsl(var(--medicastle-red))]" />
                <h3 className="text-xl font-bold">Operating Hours</h3>
              </div>
              <ul className="space-y-3 font-medium text-white/80">
                <li className="flex justify-between items-center">
                  <span>Mon - Sat:</span>
                  <span className="text-white font-bold">10:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between items-center border-t border-white/10 pt-3">
                  <span>Sunday:</span>
                  <span className="text-white font-bold">Closed / Urgent Only</span>
                </li>
              </ul>
            </motion.div>

          </div>

          {/* CONTACT FORM & LOCATIONS */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden"
            >
              {/* Decorative blob */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-bl-full -z-0 opacity-50 pointer-events-none"></div>

              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-black text-[hsl(var(--medicastle-blue))] mb-2">Send us a Message</h2>
                <p className="text-[hsl(var(--medicastle-blue))]/70 mb-8 font-medium">Fill out the form below and we'll get back to you as soon as possible.</p>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[hsl(var(--medicastle-blue))]/80">Your Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[hsl(var(--medicastle-blue))]/20 focus:border-[hsl(var(--medicastle-blue))] transition-all text-gray-800"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[hsl(var(--medicastle-blue))]/80">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+91 98765 43210" 
                        className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[hsl(var(--medicastle-blue))]/20 focus:border-[hsl(var(--medicastle-blue))] transition-all text-gray-800"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[hsl(var(--medicastle-blue))]/80">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[hsl(var(--medicastle-blue))]/20 focus:border-[hsl(var(--medicastle-blue))] transition-all text-gray-800"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[hsl(var(--medicastle-blue))]/80">Your Message</label>
                    <textarea 
                      rows={5}
                      placeholder="How can we help you?" 
                      className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[hsl(var(--medicastle-blue))]/20 focus:border-[hsl(var(--medicastle-blue))] transition-all resize-none text-gray-800"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[hsl(var(--medicastle-blue))] text-white px-8 py-4 rounded-full font-bold hover:bg-blue-900 transition-all hover:shadow-xl hover:-translate-y-1"
                  >
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* LOCATIONS SECTION */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4 hover:border-[hsl(var(--medicastle-red))]/30 transition-colors">
                <div className="w-12 h-12 bg-red-50 text-[hsl(var(--medicastle-red))] rounded-full flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-[hsl(var(--medicastle-blue))] mb-1">Head Office</h4>
                  <p className="text-[hsl(var(--medicastle-blue))]/70 font-medium text-sm leading-relaxed">
                    17/3/E, Roy J.N. Bahadur Road,<br/>
                    Bally Howrah - 711201,<br/>
                    West Bengal.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4 hover:border-[hsl(var(--medicastle-blue))]/30 transition-colors">
                <div className="w-12 h-12 bg-blue-50 text-[hsl(var(--medicastle-blue))] rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-[hsl(var(--medicastle-blue))] mb-1">Branch Office</h4>
                  <p className="text-[hsl(var(--medicastle-blue))]/70 font-medium text-sm leading-relaxed">
                    51/1, Rajmohan Road,<br/>
                    Uttarpara, Hooghly - 712258,<br/>
                    West Bengal.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
