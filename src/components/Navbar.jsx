import React from 'react'
import { Link } from "react-router-dom";
import {
    FaShoppingCart,
    FaSearch,
    FaDesktop,
    FaCommentAlt,
    FaFilm,
  } from "react-icons/fa";
const Navbar = () => {
  return (
    <header className=" w-full fixed top-0 z-50 bg-slate-50 shadow-md">
    <div className="section-container mx-auto px-4">
      <div className="flex items-center gap-8 h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div
            className="w-12 h-12 bg-black rounded-full"
            aria-label="Home"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden text-xl md:flex items-center gap-8">
          <Link to="/" className="text-black border-b-2 border-white">
            Home
          </Link>
          <Link
            to="/logo"
            className="text-black/70 hover:text-white transition-colors"
          >
            Logo
          </Link>
          <Link to="/contact">
            Contacts
          </Link>
        </nav>

      </div>
    </div>
  </header>
  )
}

export default Navbar