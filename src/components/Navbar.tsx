import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navBg =
    scrolled || !isHome
      ? "bg-white shadow-sm border-b border-green-100"
      : "bg-transparent";

  const textColor = scrolled || !isHome ? "text-gray-800" : "text-white";
  const logoColor = scrolled || !isHome ? "text-green-700" : "text-white";

  const links = [
    { to: "/shop", label: "Shop" },
    { to: "/about", label: "About" },
    { to: "/corporate", label: "Corporate" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex gap-4 items-center">
              <img
                src="/icon_cropped.png"
                className="w-16 h-16 rounded-full"
              ></img>
              <div>
                <div className={`${logoColor} font-extrabold text-2xl`}>
                  <span>Tat</span>
                  <span>Tvam</span>
                  <span>Asi</span>
                </div>
                <div
                  className={`${textColor} uppercase font-bold text-xs tracking-wide`}
                >
                  <span className="text-sm">O</span>
                  rganics
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 ">
            {links.map((link) => (
              <div className="relative group">
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm uppercase font-semibold transition-colors duration-200 ${
                      isActive
                        ? scrolled || !isHome
                          ? "text-green-600"
                          : "text-green-300"
                        : `${textColor} hover:text-green-500`
                    }`
                  }
                >
                  {link.label}
                </NavLink>
                <span className="absolute left-0 bottom-0 w-0 border-b-2 border-green-500 transition-all duration-300 group-hover:w-full"></span>
              </div>
            ))}
          </div>

          {/* Cart + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/cart"
              className={`relative p-2 rounded-full transition-colors ${scrolled || !isHome ? "hover:bg-green-50 text-gray-700" : "hover:bg-white/10 text-white"}`}
            >
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {itemCount}
                </span>
              )}
            </Link>
            <Link
              to="/shop"
              className={`hidden lg:block px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                scrolled || !isHome
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-white text-green-700 hover:bg-green-50"
              }`}
            >
              Shop Now
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg ${scrolled || !isHome ? "text-gray-700" : "text-white"}`}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-green-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-green-50 text-green-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/shop"
              className="block mt-2 px-4 py-3 bg-green-600 text-white rounded-lg text-sm font-semibold text-center hover:bg-green-700 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
