import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  Shield,
  Zap,
  GitBranch,
  Cpu,
  Globe,
  Lock,
  Layers,
} from "lucide-react";
import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: Code2,
      color: "#667eea",
      skills: [
        { name: "Node.js", level: 95 },
        { name: "NestJS", level: 90 },
        { name: "Python", level: 85 },
        { name: "Express.js", level: 95 },
        { name: "RESTful APIs", level: 95 },
        { name: "Microservices", level: 90 },
      ],
    },
    {
      title: "Database & Storage",
      icon: Database,
      color: "#764ba2",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MySQL", level: 95 },
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 90 },
        { name: "SQL", level: 95 },
        { name: "NoSQL", level: 85 },
      ],
    },
    {
      title: "Blockchain & Web3",
      icon: Shield,
      color: "#00d4ff",
      skills: [
        { name: "Ethereum", level: 90 },
        { name: "Celo", level: 85 },
        { name: "Starknet", level: 88 },
        { name: "Solidity", level: 85 },
        { name: "viemjs", level: 90 },
        { name: "web3js", level: 88 },
        { name: "Foundry", level: 85 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "#ff6b6b",
      skills: [
        { name: "AWS", level: 90 },
        { name: "Azure ML", level: 80 },
        { name: "Docker", level: 85 },
        { name: "CI/CD", level: 90 },
        { name: "Lambda", level: 88 },
        { name: "S3", level: 85 },
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: Cpu,
      color: "#4ecdc4",
      skills: [
        { name: "Graph Neural Networks", level: 85 },
        { name: "Network Analysis", level: 88 },
        { name: "Data Processing", level: 90 },
        { name: "Pattern Recognition", level: 85 },
        { name: "Analytics", level: 90 },
      ],
    },
    {
      title: "Tools & Others",
      icon: GitBranch,
      color: "#f39c12",
      skills: [
        { name: "Git", level: 95 },
        { name: "Cursor AI", level: 90 },
        { name: "Claude", level: 85 },
        { name: "Socket.io", level: 88 },
        { name: "Chart.js", level: 85 },
        { name: "Ant Design", level: 80 },
      ],
    },
  ];

  const achievements = [
    {
      title: "Starknet Hackerhouse 2024 Winner",
      description: "Built OpenIndexer with Graph Neural Networks",
      icon: Zap,
      color: "#00d4ff",
    },
    {
      title: "Pond Spam Detection Winner",
      description: "Secured #1 rank in PondGNN Competition",
      icon: Lock,
      color: "#ff6b6b",
    },
    {
      title: "880K+ Users Scaled",
      description: "Led development at BlockScratch",
      icon: Globe,
      color: "#4ecdc4",
    },
    {
      title: "40% Performance Boost",
      description: "Optimized database systems",
      icon: Layers,
      color: "#f39c12",
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Expertise across Web2 and Web3 technologies
          </p>
        </motion.div>

        <div className="skills-content">
          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="skill-category"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="category-header">
                  <div
                    className="category-icon"
                    style={{ backgroundColor: category.color }}
                  >
                    <category.icon size={24} />
                  </div>
                  <h3 className="category-title">{category.title}</h3>
                </div>

                <div className="skills-tags">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="skill-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.03,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <span className="skill-name">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="achievements-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="achievements-title">Key Achievements</h3>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  className="achievement-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div
                    className="achievement-icon"
                    style={{ backgroundColor: achievement.color }}
                  >
                    <achievement.icon size={24} />
                  </div>
                  <h4 className="achievement-title">{achievement.title}</h4>
                  <p className="achievement-description">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
