import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  ExternalLink,
  Code2,
  Database,
  Zap,
  Users,
} from "lucide-react";
import "./Experience.css";

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const experiences = [
    {
      company: "Blockscratch (Now Lomen)",
      position: "Founding Engineer",
      duration: "Aug 2023 - May 2025",
      location: "Remote",
      type: "Full-time",
      description:
        "Led development and scaled BlockScratch to 880K+ users and facilitated 9.3M+ on-chain transactions and increasing.",
      highlights: [
        "Scaled platform to 880K+ users with 9.3M+ on-chain transactions",
        "Implemented TryHold$ integration for seamless crypto transactions",
        "Migrated entire database to PostgreSQL with redesigned schema architecture",
        "Designed PulsePrediction application flow using Node.js and Web3",
        "Developed Solidity smart contracts using Hardhat and Graph Protocol subgraphs",
        "Built real-time chat application with Socket.io and WebSockets",
        "Created cryptocurrency analytics dashboard using Chart.js and Ant Design",
      ],
      technologies: [
        "Node.js",
        "Web3",
        "Solidity",
        "PostgreSQL",
        "Socket.io",
        "Chart.js",
        "Hardhat",
      ],
      icon: Code2,
      color: "#00d4ff",
    },
    {
      company: "iProgrammer Solutions",
      position: "Tech Lead",
      duration: "Mar 2021 - Current",
      location: "Remote",
      type: "Full-time",
      description:
        "Designed and implemented a multi-tenant loyalty platform connecting retailers with end customers.",
      highlights: [
        "Built multi-tenant loyalty platform with tenant-aware database connections",
        "Optimized performance using Redis caching, rate limiting, and bulk SQL operations",
        "Developed JWT-based authentication with RBAC and per-tenant authorization",
        "Designed serverless workflows using AWS Lambda, S3, and Aurora",
        "Set up CI/CD pipelines with automated testing and real-time monitoring",
        "Architected scalable middleware solution integrating multiple POS clients",
        "Built serverless data pipeline using SQS, EventBridge, and AWS Lambdas",
        "Mentored junior developers and led cross-functional design reviews",
      ],
      technologies: [
        "Node.js",
        "AWS",
        "Redis",
        "MySQL",
        "JWT",
        "Lambda",
        "SQS",
        "EventBridge",
      ],
      icon: Database,
      color: "#667eea",
    },
    {
      company: "Neurealm",
      position: "Software Engineer",
      duration: "Jun 2021 - Mar 2023",
      location: "Remote",
      type: "Full-time",
      description:
        "Developed full-stack web applications to process, analyze, and visually render data efficiently.",
      highlights: [
        "Developed full-stack web applications for data processing and visualization",
        "Managed time-sensitive updates with zero downtime deployments",
        "Built and debugged CRUD APIs using Node.js and Express.js",
        "Worked on Angular 8 and Angular Material for UI development",
        "Practiced DML operations using MySQL for data management",
      ],
      technologies: [
        "Node.js",
        "Express.js",
        "Angular 8",
        "MySQL",
        "JavaScript",
        "HTML/CSS",
      ],
      icon: Zap,
      color: "#764ba2",
    },
  ];

  const nextExperience = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevExperience = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + experiences.length) % experiences.length
    );
  };

  const currentExp = experiences[currentIndex];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Building scalable solutions and leading teams in the tech industry
          </p>
        </motion.div>

        <div className="experience-content">
          <motion.div
            className="experience-navigation"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="nav-dots">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  className={`nav-dot ${
                    index === currentIndex ? "active" : ""
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <div className="nav-arrows">
              <button
                className="nav-arrow"
                onClick={prevExperience}
                disabled={currentIndex === 0}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                className="nav-arrow"
                onClick={nextExperience}
                disabled={currentIndex === experiences.length - 1}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>

          <div className="experience-carousel">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="experience-card"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="card-header">
                  <div className="company-info">
                    <div
                      className="company-icon"
                      style={{ backgroundColor: currentExp.color }}
                    >
                      <currentExp.icon size={24} />
                    </div>
                    <div className="company-details">
                      <h3 className="company-name">{currentExp.company}</h3>
                      <h4 className="position">{currentExp.position}</h4>
                    </div>
                  </div>
                  <div className="experience-meta">
                    <div className="meta-item">
                      <Calendar size={16} />
                      <span>{currentExp.duration}</span>
                    </div>
                    <div className="meta-item">
                      <MapPin size={16} />
                      <span>{currentExp.location}</span>
                    </div>
                    <div className="meta-item">
                      <span className="type-badge">{currentExp.type}</span>
                    </div>
                  </div>
                </div>

                <div className="card-content">
                  <p className="experience-description">
                    {currentExp.description}
                  </p>

                  <div className="highlights-section">
                    <h5 className="highlights-title">Key Achievements</h5>
                    <ul className="highlights-list">
                      {currentExp.highlights.map((highlight, index) => (
                        <motion.li
                          key={index}
                          className="highlight-item"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="technologies-section">
                    <h5 className="technologies-title">Technologies Used</h5>
                    <div className="technologies-grid">
                      {currentExp.technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          className="tech-tag"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
