import { motion } from "framer-motion";
import { FaBullseye,FaEye,FaHandshake,FaShieldAlt,FaHome,FaLeaf } from "react-icons/fa";
import "./MissionVision.css";

const values = [
  {
    icon: <FaHandshake />,
    title: "Integrity",
    description:
      "We believe in honest communication, transparency, and long-term relationships."
  },
  {
    icon: <FaShieldAlt />,
    title: "Trust",
    description:
      "Every property is verified to ensure a secure buying and selling experience."
  },
  {
    icon: <FaHome />,
    title: "Customer First",
    description:
      "Our clients are at the center of every decision we make."
  },
  {
    icon: <FaLeaf />,
    title: "Innovation",
    description:
      "We use modern technology to simplify every step of your property journey."
  }
];

const MissionVision = () => {
  return (
    <section className="mission-section">

      <div className="section-heading">
        <span>OUR PURPOSE</span>
        <h2>Driven by Vision, Built on Trust</h2>
        <p>
          We strive to redefine the real estate experience through innovation,
          transparency, and exceptional customer service.
        </p>
      </div>

      <div className="mission-grid">

        <motion.div
          className="glass-card"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="icon-circle">
            <FaBullseye />
          </div>

          <h3>Our Mission</h3>

          <p>
            To make buying, selling, and renting properties effortless by
            connecting people with verified listings, trusted professionals,
            and innovative digital solutions.
          </p>
        </motion.div>

        <motion.div
          className="glass-card"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="icon-circle">
            <FaEye />
          </div>

          <h3>Our Vision</h3>

          <p>
            To become India's most trusted digital real estate marketplace,
            empowering every family to find the perfect place to call home.
          </p>
        </motion.div>

      </div>

      <div className="values-section">

        <h2>Core Values</h2>

        <div className="values-grid">

          {values.map((value, index) => (

            <motion.div
              key={index}
              className="value-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="value-icon">
                {value.icon}
              </div>

              <h3>{value.title}</h3>

              <p>{value.description}</p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default MissionVision;