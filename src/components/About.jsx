import React from "react";
import { motion } from "framer-motion";
import { Award, Target, Users, Zap } from "lucide-react";
import "./About.css";

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "Starknet Hackerhouse 2024 Winner",
      description:
        "Built OpenIndexer, a powerful on-chain data indexing solution using Graph Neural Networks",
      // image: "/images/sybil-network-visualization.png",
      hasImage: false,
    },
    {
      icon: Target,
      title: "Pond Spam Detection Winner",
      description:
        "Secured #1 rank in PondGNN Competition for spam token detection on Ethereum blockchain",
    },
    {
      icon: Users,
      title: "15+ Projects Delivered",
      description:
        "Successfully delivered multiple full-stack and blockchain projects for various clients",
    },
    {
      icon: Zap,
      title: "100% Client Satisfaction",
      description:
        "Maintained perfect client satisfaction rate across all delivered projects",
    },
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Passionate about building the future of decentralized applications
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-content">
              <p className="about-description">
                I'm an{" "}
                <span className="gradient-text-web3">
                  Innovative Full Stack Developer
                </span>{" "}
                with 5+ years of experience, specializing in Node.js to build
                secure and efficient backend architectures for decentralized
                applications.
              </p>

              <p className="about-description">
                My expertise spans across{" "}
                <span className="gradient-text">
                  Web2 and Web3 technologies
                </span>
                , from traditional full-stack development to cutting-edge
                blockchain solutions. I've successfully led teams, scaled
                applications to serve hundreds of thousands of users, and
                delivered high-performance solutions that drive real business
                value.
              </p>

              <p className="about-description">
                As a <span className="gradient-text">collaborative leader</span>
                , I ensure seamless integration with frontend teams to elevate
                user engagement and operational efficiency in high-stakes
                environments. My passion lies in solving complex technical
                challenges and building scalable, maintainable systems.
              </p>
            </div>

            <motion.div
              className="about-stats"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat">
                <span className="stat-number">3</span>
                <span className="stat-label">Awards Won</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-highlights"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="highlights-title">Key Achievements</h3>
            <div className="highlights-grid">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  className="highlight-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="highlight-icon">
                    <highlight.icon size={24} />
                  </div>
                  <h4 className="highlight-title">{highlight.title}</h4>
                  <p className="highlight-description">
                    {highlight.description}
                  </p>
                  {highlight.hasImage && (
                    <div className="highlight-image">
                      <img
                        src={highlight.image}
                        alt="Sybil Network Clusters Visualization"
                        className="achievement-image"
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
