import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Code2,
  Zap,
  Database,
  Cpu,
} from "lucide-react";
import "./Hero.css";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Full Stack Developer",
    "Blockchain Engineer",
    "Tech Lead",
    "Founding Engineer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

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

  const stats = [
    { icon: Code2, value: "5+", label: "Years Experience" },
    { icon: Database, value: "15+", label: "Projects Delivered" },
    { icon: Zap, value: "3", label: "Awards Won" },
    { icon: Cpu, value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="badge-text">🚀 Available for opportunities</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Hi, I'm <span className="gradient-text">Vicky</span>
          </motion.h1>

          <motion.div
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="role-text">
              {roles.map((role, index) => (
                <span
                  key={role}
                  className={`role ${index === currentRole ? "active" : ""}`}
                >
                  {role}
                </span>
              ))}
            </span>
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            Innovative Full Stack Developer with 5+ years of experience,
            specializing in
            <span className="gradient-text-web3"> Node.js</span> and
            <span className="gradient-text-web3">
              {" "}
              Blockchain technology
            </span>{" "}
            to build secure and efficient architectures for decentralized
            applications.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#experience"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-social"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1 }}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="visual-container">
            <div className="floating-card card-1">
              <Code2 size={20} />
              <span>Building</span>
            </div>
            <div className="floating-card card-2">
              <Database size={20} />
              <span>Blockchain</span>
            </div>
            <div className="floating-card card-3">
              <Zap size={20} />
              <span>Web3</span>
            </div>
            <div className="floating-card card-4">
              <Cpu size={20} />
              <span>AI/ML</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-stats"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <div className="stats-container">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-item"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + index * 0.1 }}
            >
              <stat.icon size={24} className="stat-icon" />
              <div className="stat-content">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
