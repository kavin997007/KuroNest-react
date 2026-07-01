import { motion } from "framer-motion";
import { FaCheckCircle,FaHome,FaUserTie,FaShieldAlt,FaMoneyBillWave,FaHeadset,FaMapMarkedAlt } from "react-icons/fa";
import "./WhyChooseUs.css";

const features = [
  {
    icon: <FaHome />,
    title: "Verified Listings",
    description:
      "Every property goes through a verification process before being listed."
  },
  {
    icon: <FaUserTie />,
    title: "Expert Agents",
    description:
      "Work with experienced professionals who understand the local market."
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Transactions",
    description:
      "We prioritize transparency and security throughout the buying process."
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Best Market Prices",
    description:
      "Competitive pricing and expert guidance to maximize your investment."
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Customer Support",
    description:
      "Our support team is always ready to answer your questions."
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Prime Locations",
    description:
      "Explore properties in top residential and commercial locations."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="choose-section">

      <div className="choose-container">

        <motion.div
          className="choose-image"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img src="https://openminds.co.in/wp-content/uploads/2020/06/2-2.jpg" alt="Why Choose Us" />
        </motion.div>

        <motion.div
          className="choose-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <span className="section-tag">
            WHY CHOOSE US
          </span>

          <h2>
            Your Trusted Partner in Real Estate
          </h2>

          <p>
            Whether you're buying your first home, investing in commercial
            property, or searching for a rental, we combine local expertise,
            verified listings, and exceptional customer service to help you
            make confident decisions.
          </p>

          <div className="feature-list">

            {features.map((feature, index) => (

              <motion.div
                className="feature-card"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>

                <div>
                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>
                </div>

                <FaCheckCircle className="check-icon" />

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default WhyChooseUs;