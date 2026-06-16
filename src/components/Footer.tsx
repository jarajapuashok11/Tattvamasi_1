import { Link } from "react-router-dom";
import { Leaf, Instagram, Mail, Phone, MapPin, MessageCircle, Shield, Award, CheckCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">

      {/* ── TRUST BAR ─────────────────────────────────────────────────────── */}
      <div className="border-b border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: "100% Organic Certified" },
              { icon: Award, label: "GMP & FSSAI Licensed" },
              { icon: CheckCircle, label: "Third-Party Lab Tested" },
              { icon: Leaf, label: "Zero Artificial Additives" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-9 h-9 bg-green-900/50 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-xs font-medium text-gray-400">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER ───────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

          {/* Brand — spans 2 cols on large */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-5">
              <img src="/icon_cropped.png" className="w-12 h-12 rounded-full" alt="Tatvamasi logo" />
              <div>
                <div className="text-green-500 font-extrabold text-lg leading-none">TatTvamAsi</div>
                <div className="text-white uppercase font-bold text-xs tracking-widest mt-0.5">Organics</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 mb-6 max-w-xs">
              Premium organic spirulina wellness shots and superfood powders — cold-processed, lab-certified, and built for your daily ritual.
            </p>
            <div className="flex items-center gap-3 mb-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors" aria-label="WhatsApp">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              {["India Organic", "FSSAI", "GMP", "ISO 22000"].map(cert => (
                <span key={cert} className="text-[10px] font-bold text-green-400 bg-green-900/30 border border-green-800/50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-[0.2em]">Shop</h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/shop", label: "All Products" },
                { to: "/shop?category=shots", label: "Spirulina Shots" },
                { to: "/shop?category=powders", label: "Organic Powders" },
                { to: "/corporate", label: "Corporate Wellness" },
                { to: "/cart", label: "My Cart" },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-green-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-[0.2em]">Company</h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/about", label: "About Us" },
                { to: "/blog", label: "Health Blog" },
                { to: "/about#manufacturing", label: "Manufacturing" },
                { to: "/corporate", label: "B2B / Wholesale" },
                { to: "/contact#distributor", label: "Become a Distributor" },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-green-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-[0.2em]">Support</h4>
            <ul className="space-y-3 text-sm mb-8">
              {[
                { to: "/contact", label: "Contact Us" },
                { to: "/contact", label: "FAQ" },
                { to: "/contact", label: "Returns & Refunds" },
                { to: "/contact", label: "Shipping Policy" },
                { to: "/contact", label: "Privacy Policy" },
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="hover:text-green-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>

            <div className="space-y-3 text-sm">
              <a href="tel:+919999999999" className="flex items-center gap-2.5 hover:text-green-400 transition-colors">
                <Phone className="w-4 h-4 text-green-500 shrink-0" /> +91 99999 99999
              </a>
              <a href="mailto:hello@tatvamasiorganics.com" className="flex items-center gap-2.5 hover:text-green-400 transition-colors">
                <Mail className="w-4 h-4 text-green-500 shrink-0" /> hello@tatvamasiorganics.com
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Tatvamasi Organics Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 italic">
            "Tat Tvam Asi" — That Thou Art. You are what you consume.
          </p>
        </div>
      </div>
    </footer>
  );
}
