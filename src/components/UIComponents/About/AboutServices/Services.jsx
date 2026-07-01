import { motion } from "framer-motion";
import { FaHome,FaKey,FaBuilding,FaChartLine,FaFileSignature,FaHandshake } from "react-icons/fa";
import "./Services.css";

const services = [
  {
    icon: <FaHome />,
    title: "Buy Property",
    description:
      "Explore verified apartments, villas, plots, and luxury homes in prime locations.",
  },
  {
    icon: <FaHandshake />,
    title: "Sell Property",
    description:
      "List your property with us and connect with genuine buyers quickly and securely.",
  },
  {
    icon: <FaKey />,
    title: "Rent Property",
    description:
      "Find rental homes, apartments, and office spaces that fit your lifestyle and budget.",
  },
  {
    icon: <FaBuilding />,
    title: "Commercial Spaces",
    description:
      "Discover offices, retail stores, warehouses, and commercial investments.",
  },
  {
    icon: <FaChartLine />,
    title: "Investment Consulting",
    description:
      "Get expert advice on high-growth real estate opportunities and long-term investments.",
  },
  {
    icon: <FaFileSignature />,
    title: "Legal Assistance",
    description:
      "Documentation, agreements, registration, and legal verification made simple.",
  },
];

const Services = () => {
  return (
    <section className="services-section">

      <div className="services-header">
        <span>OUR SERVICES</span>

        <h2>
          Everything You Need for Your Property Journey
        </h2>

        <p>
          Whether you're buying your dream home, selling a property,
          renting an apartment, or investing in commercial real estate,
          our experienced team is here to guide you every step of the way.
        </p>
      </div>

      <div className="services-grid">

        {services.map((service, index) => (

          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 }}
          >

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <button>
              Learn More →
            </button>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default Services;