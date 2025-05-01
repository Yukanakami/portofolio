import Link from "next/link";
import { useState } from "react";

export default function Layout({ children }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <header className="bg-gray-800 text-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link href="/">Nyoman Maheka Portfolio</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/about" className="hover:text-gray-300">About</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-2xl focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? "✖" : "☰"}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 text-white flex flex-col space-y-4 py-4 px-6">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/about" className="hover:text-gray-300">About</Link>
            <Link href="/contact" className="hover:text-gray-300">Halo</Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-200">
        <div className="w-full bg-gray-800 shadow-lg rounded-lg p-6">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 text-sm py-4 mt-6">
        <div className="container mx-auto text-center">
          © {new Date().getFullYear()} Nyoman Maheka. All rights reserved.
        </div>
      </footer>
    </>
  );
}
