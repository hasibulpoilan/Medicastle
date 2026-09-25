import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-gray-200/60 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center -ml-4 w-48 md:w-64">
              <img src="/logo.png" alt="Medi Castle Logo" className="h-16 w-full object-contain object-left scale-[2.5] md:scale-[3] transform-gpu origin-left" />
            </Link>
            <p className="text-sm text-gray-600 font-medium">
              An ISO 9001:2015 Certified Company & CE Certified Company. Leading Medical Equipments Suppliers Over 15 Years.
            </p>
            <div className="flex flex-col space-y-2 mt-4 text-sm text-gray-700">
              <p><strong>GST No.:</strong> 19AWAPG1095M1ZB</p>
              <p className="text-[hsl(var(--medicastle-red))] font-semibold">Authorized Dealer: BPL Medical Technologies & Deckmount Electronics</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[hsl(var(--medicastle-blue))]">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-[hsl(var(--medicastle-blue))] transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-[hsl(var(--medicastle-blue))] transition-colors">Medical Equipment</Link></li>
              <li><Link href="/services" className="hover:text-[hsl(var(--medicastle-blue))] transition-colors">Services (Rent & Sales)</Link></li>
              <li><Link href="/about" className="hover:text-[hsl(var(--medicastle-blue))] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[hsl(var(--medicastle-blue))] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[hsl(var(--medicastle-blue))]">Contact Us</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[hsl(var(--medicastle-red))] shrink-0 mt-0.5" />
                <p><strong>Head Office (Bally):</strong><br />17/3/E, Roy J.N. Bahadur Road,<br />Bally Howrah - 711201, WB.<br /><span className="text-[hsl(var(--medicastle-red))] font-bold">📞 +91 89618 57588</span></p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[hsl(var(--medicastle-red))] shrink-0 mt-0.5" />
                <p><strong>Branch (Uttarpara):</strong><br />51/1, Rajmohan Road,<br />Uttarpara, Hooghly - 712258, WB<br /><span className="text-[hsl(var(--medicastle-red))] font-bold">📞 +91 89027 21080</span></p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[hsl(var(--medicastle-red))]" />
                <p>medicastle6@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Medi Castle. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
