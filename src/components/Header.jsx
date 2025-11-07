import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const marqueeText =
    "🌐 Welcome to Vicky's Cyber Space • Building bold experiences with a retro heart • "
      .repeat(3);

  return (
    <motion.header
      className={`header ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="header-top-glow" />

      <div className="header-container">
        <motion.div
          className="logo"
          whileHover={{ rotate: [-2, 2, -2, 0] }}
          transition={{ duration: 0.6 }}
        >
          <span className="logo-icon" role="img" aria-hidden="true">
            💾
          </span>
          <span className="logo-text">Vicky's Cyber Space</span>
        </motion.div>

        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="nav-link"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        <motion.button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </motion.button>
      </div>

      <div className="header-status-bar">
        <div className="marquee-wrapper" aria-hidden="true">
          <div className="marquee-track">
            <span>{marqueeText}</span>
          </div>
        </div>
        <div className="status-indicator">
          <span className="status-light" />
          <span className="status-text">ONLINE</span>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
