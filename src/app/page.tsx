"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useAnimationFrame, useMotionValue } from "framer-motion";
import { 
  ArrowRight, ShieldCheck, Award, Users, 
  Stethoscope, BedDouble, Activity, Thermometer, 
  HeartPulse, CheckCircle2, ChevronLeft, ChevronRight,
  Package, Clock
} from "lucide-react";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"] });

const carouselProducts = [
  {
    title: "Motorized ICU Beds",
    subtitle: "Advanced controls for patient care.",
    tag: "HOSPITAL FURNITURE",
    tagColor: "bg-[hsl(var(--medicastle-red))]",
    borderColor: "border-[hsl(var(--medicastle-red))]",
    image: "/p3.jpg" // Using reliable local assets
  },
  {
    title: "Respiratory Care",
    subtitle: "BIPAP & CPAP support devices.",
    tag: "RESPIRATORY",
    tagColor: "bg-[hsl(var(--medicastle-blue))]",
    borderColor: "border-[hsl(var(--medicastle-blue))]",
    image: "/p2.jpg"
  },
  {
    title: "Premium Wheelchairs",
    subtitle: "Ergonomic mobility and safety.",
    tag: "ORTHO AIDS",
    tagColor: "bg-pink-600",
    borderColor: "border-pink-600",
    image: "/p1.jpg"
  }
];

// CurvedCard function removed in favor of inline state-driven carousel math

export default function Home() {
  // ----------------------------------------------------
  // DISCRETE 3D CAROUSEL STATE
  // ----------------------------------------------------
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselProducts.length);
    }, 4000); // Auto-play every 4 seconds
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % carouselProducts.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + carouselProducts.length) % carouselProducts.length);

  // ----------------------------------------------------
  // HERO SCROLL ANIMATION (Apple-style)
  // ----------------------------------------------------
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgressRaw } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"]
  });
  
  // Add physics spring for buttery smooth interpolation (Apple-like momentum)
  const heroProgress = useSpring(heroProgressRaw, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // Initial group banner fades out instantly on scroll
  const bannerOpacity = useTransform(heroProgress, [0, 0.1], [1, 0]);

  // Main Text remains sticky and fades out at the very end
  const textOpacity = useTransform(heroProgress, [0, 0.9, 1], [1, 1, 0]);
  const textY = useTransform(heroProgress, [0, 0.9, 1], ["0%", "0%", "-50%"]);

  // Product 1 (Wheelchair) - Diagonal Sweep & Hold
  const p1Opacity = useTransform(heroProgress, [0.05, 0.15, 0.35, 0.45], [0, 1, 1, 0]);
  const p1Y = useTransform(heroProgress, [0.05, 0.15, 0.35, 0.45], ["40vh", "0vh", "-5vh", "-40vh"]);
  const p1X = useTransform(heroProgress, [0.05, 0.15, 0.35, 0.45], ["-15vw", "0vw", "2vw", "15vw"]);
  const p1Scale = useTransform(heroProgress, [0.05, 0.15, 0.35, 0.45], [0.7, 1, 1.05, 0.8]);

  // Product 2 (Oxygen Concentrator)
  const p2Opacity = useTransform(heroProgress, [0.35, 0.45, 0.65, 0.75], [0, 1, 1, 0]);
  const p2Y = useTransform(heroProgress, [0.35, 0.45, 0.65, 0.75], ["40vh", "0vh", "-5vh", "-40vh"]);
  const p2X = useTransform(heroProgress, [0.35, 0.45, 0.65, 0.75], ["-15vw", "0vw", "2vw", "15vw"]);
  const p2Scale = useTransform(heroProgress, [0.35, 0.45, 0.65, 0.75], [0.7, 1, 1.05, 0.8]);

  // Product 3 (CPAP / Setup) - Stays till the end
  const p3Opacity = useTransform(heroProgress, [0.65, 0.75, 0.95, 1], [0, 1, 1, 1]);
  const p3Y = useTransform(heroProgress, [0.65, 0.75, 0.95, 1], ["40vh", "0vh", "0vh", "0vh"]);
  const p3X = useTransform(heroProgress, [0.65, 0.75, 0.95, 1], ["-15vw", "0vw", "0vw", "0vw"]);
  const p3Scale = useTransform(heroProgress, [0.65, 0.75, 0.95, 1], [0.7, 1, 1.05, 1.05]);

  // Hooks removed for infinite auto-play carousel

  // --- NEW: Background Slider Logic ---
  const backgroundImages = [
    "/hero_banner.jpg",
    "/p1.jpg",
    "/p2.jpg",
    "/p3.jpg"
  ];
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 4000); // Crossfade every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F7FB]">
      
      {/* 1. SIMPLE STATIC HERO (Visible on ALL devices for now as requested) */}
      <section className="block relative h-[90vh] min-h-[650px] w-full bg-transparent overflow-hidden flex flex-col justify-center py-8">
        {/* Using desktop banner with NO BLUR and a BRIGHTER overlay to support text colors perfectly */}
        <div className="absolute inset-0 z-0 bg-[#F4F7FB]">
          {backgroundImages.map((src, idx) => (
            <motion.img
              key={src}
              src={src}
              alt="Medical Equipment"
              className="absolute inset-0 w-full h-full object-cover object-[70%_center] mix-blend-multiply"
              initial={{ opacity: 0 }}
              animate={{ opacity: currentBg === idx ? 1 : 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F4F7FB]/50 via-[#F4F7FB]/90 to-[#F4F7FB]"></div>
        </div>
        
        <div className="relative z-10 w-full px-4 md:px-8 max-w-5xl mx-auto flex flex-col items-center space-y-6 md:space-y-8">
          {/* Pill Tag */}
          <div className="inline-flex items-center gap-2 border border-[hsl(var(--medicastle-blue))]/20 bg-[hsl(var(--medicastle-blue))]/5 px-5 md:px-6 py-2.5 md:py-3 rounded-full w-[95%] max-w-sm md:max-w-md justify-center shadow-[0_0_15px_rgba(255,255,255,1)]">
            <span className="text-[hsl(var(--medicastle-blue))] text-xs md:text-sm font-bold tracking-wider uppercase">Authorized BPL Medical Dealer</span>
          </div>
          
          {/* Subheading */}
          <h4 className="text-[hsl(var(--medicastle-red))] font-bold tracking-[0.15em] text-xs md:text-sm uppercase text-center drop-shadow-[0_0_10px_rgba(255,255,255,1)] pt-2 md:pt-4">
            Medicastle · We Care
          </h4>
          
          {/* Main Heading */}
          <h1 className={`${playfair.className} text-4xl sm:text-5xl md:text-7xl lg:text-[5rem] font-black text-[hsl(var(--medicastle-blue))] text-center leading-[1.25] md:leading-[1.1] w-full px-2 drop-shadow-[0_2px_15px_rgba(255,255,255,1)]`}>
            Premium Equipments. <br/>
            <span className="text-[hsl(var(--medicastle-red))] italic drop-shadow-[0_2px_15px_rgba(255,255,255,1)]">Enhancing Lives.</span>
          </h1>
          
          {/* Paragraph */}
          <p className="text-[hsl(var(--medicastle-blue))]/90 text-base md:text-xl font-medium leading-relaxed text-center px-4 max-w-3xl drop-shadow-[0_0_10px_rgba(255,255,255,1)] pt-2 md:pt-4">
            Say goodbye to compromised healthcare at home. Join our premium network of ICU setups and advanced respiratory care directly from authorized experts.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-[95%] max-w-sm sm:max-w-xl pt-8 justify-center">
            <Link href="/products" className="w-full sm:w-auto px-10 bg-[hsl(var(--medicastle-blue))] hover:bg-blue-900 text-white text-center py-4 rounded-full font-bold text-base md:text-lg shadow-xl flex items-center justify-center gap-2 transition-all hover:-translate-y-1 active:scale-95">
              Explore Equipments <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="w-full sm:w-auto px-10 bg-white text-[hsl(var(--medicastle-blue))] hover:bg-gray-50 border border-[hsl(var(--medicastle-blue))]/20 text-center py-4 rounded-full font-bold text-base md:text-lg shadow-md transition-all hover:-translate-y-1 active:scale-95">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SCROLLYTELLING HERO SECTION (Apple Style) - HIDDEN FOR NOW AS REQUESTED */}
      <section ref={heroRef} className="hidden relative h-[350vh] bg-transparent">
        {/* Sticky Container - Stays fixed on screen while scrolling */}
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          
          {/* Initial Group Image Background (Fades out when scrolling begins) */}
          <motion.div style={{ opacity: bannerOpacity }} className="absolute inset-0 z-0">
            <img 
              src="/hero_banner.jpg" 
              alt="Medical Equipment Setup" 
              className="w-full h-full object-cover object-right lg:object-center"
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#F4F7FB] from-15% via-[#F4F7FB]/90 via-45% to-transparent to-80%"></div>
          </motion.div>

          <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full relative z-10">
            
            {/* Left Content (Text) */}
            <motion.div 
              style={{ opacity: textOpacity, y: textY }}
              className="space-y-6 z-20 pt-20 lg:pt-0"
            >
              <h4 className="text-[hsl(var(--medicastle-red))] font-bold tracking-widest text-sm md:text-base uppercase">
                Healthier Today, Brighter Tomorrow
              </h4>

              <h1 className={`${playfair.className} text-5xl md:text-6xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight drop-shadow-sm`}>
                <span className="text-[hsl(var(--medicastle-blue))] block mb-2">Premium Equipments.</span>
                <span className="text-[hsl(var(--medicastle-red))] italic">Enhancing Lives.</span>
              </h1>

              <p className="text-[hsl(var(--medicastle-blue))]/80 text-lg max-w-lg leading-relaxed font-medium">
                Medi Castle is committed to providing high-quality medical equipment, surgical items, and hospital furniture that make a meaningful difference in patient care.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link href="/products" className="inline-flex items-center justify-center gap-3 bg-[hsl(var(--medicastle-blue))] hover:bg-blue-900 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                  Explore Our Products
                  <ArrowRight className="w-5 h-5 bg-white/20 rounded-full p-1" />
                </Link>
                <div className="inline-flex items-center gap-2 px-4 py-2">
                  <span className="animate-bounce text-[hsl(var(--medicastle-red))]">↓</span> 
                  <span className="text-sm font-bold text-gray-600 uppercase tracking-widest">Scroll to explore</span>
                </div>
              </div>
            </motion.div>

            {/* Right Content (Animated Products Area) */}
            <div className="relative h-[50vh] lg:h-full w-full flex items-center justify-center z-10">
              
              {/* Product 1: Wheelchair */}
              <motion.div 
                style={{ opacity: p1Opacity, y: p1Y, x: p1X, scale: p1Scale }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <div className="w-full max-w-lg aspect-square relative flex items-center justify-center bg-[#F4F7FB] mix-blend-multiply">
                  <img src="/p1.jpg" alt="Premium Wheelchair" className="w-full h-full object-contain mix-blend-multiply contrast-125 brightness-110" />
                </div>
                <div className="mt-2 text-center">
                  <h3 className="text-2xl font-bold text-[hsl(var(--medicastle-blue))]">Premium Wheelchairs</h3>
                  <p className="text-base text-gray-500 font-medium">Ergonomic mobility support</p>
                </div>
              </motion.div>

              {/* Product 2: Respiratory / O2 */}
              <motion.div 
                style={{ opacity: p2Opacity, y: p2Y, x: p2X, scale: p2Scale }}
                className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
              >
                <div className="w-full max-w-lg aspect-square relative flex items-center justify-center bg-[#F4F7FB] mix-blend-multiply">
                  <img src="/p2.jpg" alt="Oxygen Setup" className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                <div className="mt-2 text-center">
                  <h3 className="text-2xl font-bold text-[hsl(var(--medicastle-blue))]">Respiratory Care</h3>
                  <p className="text-base text-gray-500 font-medium">Advanced BIPAP & CPAP</p>
                </div>
              </motion.div>

              {/* Product 3: Hospital Bed / General Setup */}
              <motion.div 
                style={{ opacity: p3Opacity, y: p3Y, x: p3X, scale: p3Scale }}
                className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
              >
                <div className="w-full max-w-xl aspect-square relative flex items-center justify-center bg-[#F4F7FB] mix-blend-multiply">
                  <img src="/p3.jpg" alt="Hospital Furniture" className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                <div className="mt-2 text-center">
                  <h3 className="text-2xl font-bold text-[hsl(var(--medicastle-blue))]">Home ICU Setup</h3>
                  <p className="text-base text-gray-500 font-medium">Motorized beds & complete care</p>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* QUICK ABOUT SECTION (Who We Are) */}
      <section className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto bg-transparent overflow-hidden my-4 md:my-8">
        {/* Decorative Background Blobs for Premium Feel */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/80 rounded-full blur-[100px] pointer-events-none -z-10 -translate-y-1/3 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-50/80 rounded-full blur-[100px] pointer-events-none -z-10 translate-y-1/3 -translate-x-1/3"></div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left order-2 lg:order-1">
            <div className="inline-block text-[hsl(var(--medicastle-red))] font-bold tracking-widest uppercase text-xs border border-[hsl(var(--medicastle-red))]/30 px-4 py-1.5 rounded-full bg-red-50/80 mb-6 backdrop-blur-sm shadow-sm">
              Who We Are
            </div>
            <h2 className={`${playfair.className} text-4xl md:text-5xl font-black text-[#0a192f] leading-[1.15] mb-6 tracking-tight`}>
              <span className="text-[hsl(var(--medicastle-blue))]">Driven by Quality. </span><br className="hidden sm:block" />
              <span className="text-[hsl(var(--medicastle-red))] italic">Guided by Care.</span>
            </h2>
            <p className="text-[hsl(var(--medicastle-blue))]/80 text-lg font-medium leading-relaxed mb-8 max-w-xl">
              Medi Castle is a fast-growing medical equipment supplier focused on reliability, quality, and affordability. We strive to improve health outcomes through advanced medical setups, ethical practices, and sustainable healthcare solutions.
            </p>
            <div className="flex flex-col gap-5 mb-10 w-full">
              <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm p-3 rounded-2xl border border-gray-50 shadow-sm w-fit pr-6 hover:shadow-md transition-shadow">
                <CheckCircle2 className="w-6 h-6 text-[hsl(var(--medicastle-red))]" />
                <span className="text-[hsl(var(--medicastle-blue))] font-bold md:text-lg">ISO 9001:2015 & CE Certified</span>
              </div>
              <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm p-3 rounded-2xl border border-gray-50 shadow-sm w-fit pr-6 hover:shadow-md transition-shadow">
                <CheckCircle2 className="w-6 h-6 text-[hsl(var(--medicastle-red))]" />
                <span className="text-[hsl(var(--medicastle-blue))] font-bold md:text-lg">Premium Medical Equipments</span>
              </div>
              <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm p-3 rounded-2xl border border-gray-50 shadow-sm w-fit pr-6 hover:shadow-md transition-shadow">
                <CheckCircle2 className="w-6 h-6 text-[hsl(var(--medicastle-red))]" />
                <span className="text-[hsl(var(--medicastle-blue))] font-bold md:text-lg">Rent & Sales for Home ICU</span>
              </div>
            </div>
            <Link href="/about" className="inline-flex items-center justify-center gap-3 bg-[hsl(var(--medicastle-blue))] hover:bg-blue-900 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_8px_20px_-6px_rgba(29,78,216,0.4)] hover:shadow-[0_12px_25px_-6px_rgba(29,78,216,0.5)] hover:-translate-y-1">
              Learn More About Us <ArrowRight className="w-5 h-5 bg-white/20 rounded-full p-1" />
            </Link>
          </div>

          {/* Right Side: Image/Graphics */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] ring-1 ring-black/5">
              {/* Very subtle standard darkening overlay (not tinting) just for contrast, no blend mode needed */}
              <div className="absolute inset-0 bg-black/5 z-10"></div>
              <img src="/services_banner.jpg" alt="Premium Medical Setup" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SERVICES TRAILER SECTION */}
      <section className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] w-full mx-auto bg-transparent overflow-hidden my-4 md:my-8">
        {/* Subtle decorative grid/dots or background accent could go here */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/40 via-transparent to-transparent pointer-events-none -z-10"></div>
        
        <div className="text-center mb-16 relative z-10">
          <div className="inline-block text-[hsl(var(--medicastle-blue))] font-bold tracking-widest uppercase text-xs border border-[hsl(var(--medicastle-blue))]/30 px-4 py-1.5 rounded-full bg-blue-50/80 mb-6 backdrop-blur-sm">
            Our Expertise
          </div>
          <h2 className={`${playfair.className} text-4xl md:text-5xl font-black text-[#0a192f] leading-[1.15] tracking-tight`}>
             <span className="text-[hsl(var(--medicastle-blue))]">Comprehensive </span>
             <span className="text-[hsl(var(--medicastle-red))] italic">Solutions.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
           {/* Card 1 */}
           <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 group text-center hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 bg-blue-50 text-[hsl(var(--medicastle-blue))] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                 <Package className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--medicastle-blue))] mb-3">Equipment Sales</h3>
              <p className="text-[hsl(var(--medicastle-blue))]/70 font-medium leading-relaxed">Purchase high-quality, certified medical equipment directly from authorized dealers.</p>
           </div>
           
           {/* Card 2 */}
           <div className="bg-gradient-to-br from-[hsl(var(--medicastle-blue))] to-blue-900 p-8 md:p-10 rounded-3xl shadow-[0_10px_30px_-10px_rgba(29,78,216,0.4)] transition-all duration-300 group text-center hover:-translate-y-2 relative overflow-hidden">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ring-1 ring-white/20">
                 <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Equipment Rental</h3>
              <p className="text-white/80 font-medium leading-relaxed">Cost-effective and flexible rental plans for short-term and long-term recovery needs.</p>
           </div>
           
           {/* Card 3 */}
           <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 group text-center hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 bg-red-50 text-[hsl(var(--medicastle-red))] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                 <Activity className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--medicastle-blue))] mb-3">Home ICU Setup</h3>
              <p className="text-[hsl(var(--medicastle-blue))]/70 font-medium leading-relaxed">Complete intensive care unit setups right in the comfort of your home with support.</p>
           </div>
        </div>

        <div className="mt-14 text-center relative z-10">
           <Link href="/services" className="inline-flex items-center gap-2 text-[hsl(var(--medicastle-red))] font-bold hover:gap-3 transition-all text-lg group">
              View All Services <ArrowRight className="w-5 h-5 group-hover:text-[hsl(var(--medicastle-blue))] transition-colors" />
           </Link>
        </div>
      </section>

      {/* 2. DISCRETE 3D CAROUSEL (Exact Boutique Style) - Hidden on Mobile */}
      <section className="hidden md:flex relative py-20 bg-transparent overflow-hidden flex-col justify-center min-h-screen">
        
        {/* Exact header styling from screenshot */}
        <div className="text-center mb-10 z-20 px-4">
          <h4 className="text-[hsl(var(--medicastle-red))] font-bold tracking-widest text-xs md:text-sm uppercase mb-4">
            Our Premium Setup
          </h4>
          <h2 className={`text-4xl md:text-5xl font-black text-[#0a192f] tracking-tight mb-4 ${playfair.className}`}>
            Equipments that heal lives
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-medium max-w-2xl mx-auto">
            Scroll to explore — Advanced medical devices for home and hospital.
          </p>
        </div>

        {/* 3D Perspective Container */}
        <div className="relative w-full max-w-[1200px] mx-auto h-[500px] md:h-[600px] flex items-center justify-center py-10 mt-4 md:mt-10 perspective-[1200px]">
          
          {/* Navigation Arrows */}
          <button onClick={prevSlide} className="absolute left-2 md:left-8 z-50 w-10 h-10 md:w-14 md:h-14 bg-[#EFE9E5] hover:bg-[#E5DCD6] rounded-full flex items-center justify-center transition-colors shadow-md border border-white">
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#5A4F48]" />
          </button>
          <button onClick={nextSlide} className="absolute right-2 md:right-8 z-50 w-10 h-10 md:w-14 md:h-14 bg-[#EFE9E5] hover:bg-[#E5DCD6] rounded-full flex items-center justify-center transition-colors shadow-md border border-white">
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#5A4F48]" />
          </button>

          {/* Cards Track */}
          <div className="relative w-[260px] h-[360px] md:w-[320px] md:h-[460px]">
            {carouselProducts.map((product, index) => {
              
              // Determine card position relative to current active index
              let position: "center" | "left" | "right" | "hidden" = "hidden";
              if (index === currentIndex) position = "center";
              else if (index === (currentIndex - 1 + carouselProducts.length) % carouselProducts.length) position = "left";
              else if (index === (currentIndex + 1) % carouselProducts.length) position = "right";

              const variants = {
                center: { x: "0%", scale: 1.05, zIndex: 50, opacity: 1 },
                left: { x: "-70%", scale: 0.85, zIndex: 30, opacity: 1 },
                right: { x: "70%", scale: 0.85, zIndex: 30, opacity: 1 },
                hidden: { x: "0%", scale: 0.5, zIndex: 0, opacity: 0 },
              };

              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={variants[position]}
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, { offset }) => {
                    const swipeThreshold = 50;
                    if (offset.x < -swipeThreshold) nextSlide();
                    else if (offset.x > swipeThreshold) prevSlide();
                  }}
                  className={`absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-white border-[3px] md:border-[4px] ${product.borderColor || 'border-white'} cursor-pointer touch-pan-y`}
                  onClick={() => {
                    if (position === "left") prevSlide();
                    if (position === "right") nextSlide();
                  }}
                >
                  <img src={product.image} alt={product.title} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
                  
                  {/* Subtle clean gradient exactly like boutique */}
                  <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                  
                  {/* Top Left Tag (Boutique logo style) */}
                  <div className="absolute top-4 left-4">
                    <div className={`${product.tagColor} text-white text-[9px] md:text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-widest shadow-md`}>
                      {product.tag}
                    </div>
                  </div>

                  {/* Bottom Text */}
                  <div className="absolute bottom-6 left-0 right-0 text-center px-4 md:px-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2 leading-tight drop-shadow-md">{product.title}</h3>
                    <p className="text-white/90 text-xs md:text-sm font-medium leading-relaxed drop-shadow-sm">{product.subtitle}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="mt-16 text-center z-20">
          <Link href="/products" className="inline-flex items-center gap-3 bg-[hsl(var(--medicastle-blue))] text-white hover:bg-blue-900 px-10 py-4 rounded-full font-bold transition-all shadow-xl hover:-translate-y-1">
            View Full Catalog
            <ArrowRight className="w-5 h-5 bg-white/20 rounded-full p-1" />
          </Link>
        </div>

      </section>

      {/* 3. CATEGORIES GRID */}
      <section className="py-16 md:py-24 bg-transparent overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 inline-block relative mb-16"
          >
            Our Key Categories
            <span className="absolute -bottom-4 left-1/4 right-1/4 h-1.5 bg-[hsl(var(--medicastle-red))] rounded-full"></span>
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12"
          >
            {[
              { icon: <HeartPulse className="w-8 h-8" />, name: "Respiratory Care", color: "text-blue-600", bg: "bg-blue-50", hoverBg: "group-hover:bg-blue-600", hoverText: "group-hover:text-white" },
              { icon: <BedDouble className="w-8 h-8" />, name: "Hospital Beds", color: "text-orange-500", bg: "bg-orange-50", hoverBg: "group-hover:bg-orange-500", hoverText: "group-hover:text-white" },
              { icon: <Activity className="w-8 h-8" />, name: "Home ICU Setup", color: "text-red-500", bg: "bg-red-50", hoverBg: "group-hover:bg-red-500", hoverText: "group-hover:text-white" },
              { icon: <Stethoscope className="w-8 h-8" />, name: "Surgical Items", color: "text-emerald-500", bg: "bg-emerald-50", hoverBg: "group-hover:bg-emerald-500", hoverText: "group-hover:text-white" },
              { icon: <ShieldCheck className="w-8 h-8" />, name: "Ortho Aids", color: "text-purple-500", bg: "bg-purple-50", hoverBg: "group-hover:bg-purple-500", hoverText: "group-hover:text-white" },
              { icon: <Thermometer className="w-8 h-8" />, name: "Accessories", color: "text-indigo-500", bg: "bg-indigo-50", hoverBg: "group-hover:bg-indigo-500", hoverText: "group-hover:text-white" },
            ].map((cat, i) => (
              <motion.div 
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } }
                }}
              >
                <Link href="/products" className="bg-white border border-gray-100 rounded-3xl p-6 flex flex-col items-center justify-center gap-4 shadow-sm hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-2 hover:border-gray-200 transition-all duration-300 group cursor-pointer w-full h-full">
                  <div className={`w-16 h-16 ${cat.bg} ${cat.color} ${cat.hoverBg} ${cat.hoverText} rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    {cat.icon}
                  </div>
                  <span className={`text-sm font-bold text-gray-800 text-center transition-colors duration-300 group-hover:${cat.color}`}>{cat.name}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURED PRODUCTS GRID */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] w-full mx-auto relative bg-transparent overflow-hidden">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block text-[hsl(var(--medicastle-blue))] font-bold tracking-widest uppercase text-xs border border-[hsl(var(--medicastle-blue))]/30 px-3 py-1 rounded-full bg-blue-50/50 mb-4">
            Our Catalog
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900">Featured Products</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto font-medium">Browse our extensive range of high-quality medical equipment, from hospital furniture to advanced respiratory care.</p>
        </div>
        
        <div className="overflow-hidden w-full relative mt-8 pause-on-hover">
          <div className="flex gap-6 animate-marquee">
            {[...Array(2)].map((_, arrayIndex) => (
              <div key={arrayIndex} className="flex gap-6">
                {[
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
                ].map((prod, i) => (
                  <div 
                    key={i} 
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col w-[180px] md:w-[240px] shrink-0"
                  >
                    <div className="aspect-[4/5] w-full overflow-hidden bg-gray-50/50 flex items-center justify-center p-4">
                      <img src={prod.src} alt={prod.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="p-4 text-center mt-auto border-t border-gray-50">
                      <h4 className="font-bold text-gray-900 text-xs md:text-sm">{prod.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 md:mt-16 text-center">
          <Link href="/products" className="inline-flex items-center gap-2 bg-[hsl(var(--medicastle-red))] hover:bg-red-700 text-white px-8 py-3.5 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 5. CTA / PARTNER STRIP */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto pb-24 md:pb-32 bg-transparent">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[hsl(var(--medicastle-blue))] rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle background blob */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400 rounded-full blur-[80px] opacity-30"></div>
          
          <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-6 md:gap-8 relative z-10 flex-1 w-full">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-xl">
              <Stethoscope className="w-8 h-8 md:w-10 md:h-10 text-[hsl(var(--medicastle-blue))]" />
            </div>
            <div>
              <h3 className="text-2xl md:text-4xl font-black text-white mb-3 md:mb-4 leading-tight">Partner with us for a healthier tomorrow.</h3>
              <p className="text-blue-100 text-sm md:text-lg font-medium max-w-xl mx-auto md:mx-0">We welcome hospitals, clinics, and individuals to partner with us for superior medical setups.</p>
            </div>
          </div>
          
          <div className="relative z-10 shrink-0 w-full md:w-auto mt-2 md:mt-0">
            <Link href="/contact" className="bg-white text-[hsl(var(--medicastle-blue))] w-full md:w-auto justify-center px-10 py-4 rounded-full font-bold text-[15px] md:text-lg shadow-xl hover:bg-gray-50 transition-all inline-flex items-center gap-3">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>
      
    </div>
  );
}
