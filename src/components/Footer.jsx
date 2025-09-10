import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Code2, Heart } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/vickychaudhary",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/vikas-chaudhary-1b3478153/",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://x.com/vicky_vc47", label: "Twitter" },
    {
      icon: Mail,
      href: "mailto:vikaschaudhary.vc47@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="footer-section">
            <div className="footer-brand">
              <div className="brand-logo">
                <Code2 size={24} />
                <span className="brand-name gradient-text">Vikas</span>
              </div>
              <p className="brand-description">
                Full Stack Developer & Blockchain Engineer passionate about
                building the future of decentralized applications.
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Connect</h4>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <div className="contact-info">
              <p className="contact-item">
                <Mail size={16} />
                vikaschaudhary.vc47@gmail.com
              </p>
              <p className="contact-item">
                <span className="availability-dot"></span>
                Available for opportunities
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Vikas Chaudhary. All rights reserved.
            </p>
            <p className="made-with">
              Made with <Heart size={16} className="heart-icon" /> using React &
              Framer Motion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
