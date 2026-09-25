"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { products, categories, ProductCategory } from "@/data/products";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

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
            Our Products
          </div>
          <h1 className={`${playfair.className} text-4xl md:text-6xl font-black leading-tight tracking-tight`}>
            <span className="text-[hsl(var(--medicastle-blue))]">World-Class </span>
            <span className="text-[hsl(var(--medicastle-red))] italic">Medical Equipment.</span>
          </h1>
          <p className="text-[hsl(var(--medicastle-blue))]/80 mt-6 max-w-2xl mx-auto font-medium text-lg">
            Explore our comprehensive range of high-quality hospital furniture, critical care devices, and O.T. solutions.
          </p>
        </motion.div>
      </section>

      {/* MAIN CONTENT: Sidebar + Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">
        
        {/* CATEGORY SIDEBAR */}
        <div className="lg:w-1/4 shrink-0">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-28">
            <h3 className="text-xl font-bold text-[hsl(var(--medicastle-blue))] mb-6 pb-4 border-b border-gray-100">
              Categories
            </h3>
            <div className="flex flex-col gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-left px-4 py-3 rounded-xl font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-[hsl(var(--medicastle-blue))] text-white shadow-md"
                      : "text-[hsl(var(--medicastle-blue))]/70 hover:bg-gray-50 hover:text-[hsl(var(--medicastle-blue))]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="lg:w-3/4">
          
          <div className="mb-6 flex justify-between items-end">
            <h2 className="text-2xl font-bold text-[hsl(var(--medicastle-blue))]">
              {activeCategory === "All" ? "All Products" : activeCategory}
            </h2>
            <span className="text-gray-500 font-medium text-sm">
              Showing {filteredProducts.length} items
            </span>
          </div>

          <motion.div 
            layout 
            className="grid grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl sm:rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col overflow-hidden"
                >
                  {/* Image Container */}
                  <div className="relative aspect-square bg-gray-50/50 p-3 sm:p-6 flex items-center justify-center overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/80 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1 rounded-full border border-gray-200">
                      <span className="text-[10px] sm:text-xs font-bold text-gray-500">{product.model}</span>
                    </div>
                  </div>
                  
                  {/* Content Container */}
                  <div className="p-3 sm:p-6 flex flex-col flex-grow">
                    <div className="text-[10px] sm:text-xs font-bold text-[hsl(var(--medicastle-red))] mb-1 sm:mb-2 uppercase tracking-wider line-clamp-1">
                      {product.category}
                    </div>
                    <h3 className="text-sm sm:text-lg font-bold text-[hsl(var(--medicastle-blue))] mb-3 sm:mb-6 leading-snug line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <div className="mt-auto">
                      <Link 
                        href={`https://wa.me/918902721080?text=Hello, I would like to enquire about ${product.name} (${product.model}).`}
                        target="_blank"
                        className="w-full flex items-center justify-center gap-2 bg-gray-50 hover:bg-[hsl(var(--medicastle-blue))] text-[hsl(var(--medicastle-blue))] hover:text-white py-3.5 rounded-full font-bold text-sm transition-all border border-gray-100 hover:border-transparent group/btn"
                      >
                        Enquire Now <MessageCircle className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProducts.length === 0 && (
            <div className="w-full py-20 text-center bg-white rounded-[2rem] border border-gray-100 shadow-sm">
              <p className="text-[hsl(var(--medicastle-blue))]/70 font-medium text-lg">No products found in this category.</p>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
