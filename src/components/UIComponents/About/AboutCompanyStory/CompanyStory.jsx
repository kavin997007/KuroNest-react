import { motion } from "framer-motion";
import "./CompanyStory.css";

const timeline = [
  {
    year: "2015",
    title: "Company Founded",
    description:
      "Started with a vision to simplify the real estate buying experience."
  },
  {
    year: "2018",
    title: "500+ Happy Families",
    description:
      "Successfully helped hundreds of families find their dream homes."
  },
  {
    year: "2022",
    title: "Nationwide Expansion",
    description:
      "Expanded our services to major cities across India."
  },
  {
    year: "2026",
    title: "10,000+ Properties",
    description:
      "One of the fastest-growing real estate marketplaces."
  }
];

function CompanyStory() {
  return (
    <section className="company">

      <div className="company-container">

        <motion.div
          className="company-image"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >
          <img src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=tinysrgb&dpr=1&w=500" alt="Company" />
        </motion.div>

        <motion.div
          className="company-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <span className="section-tag">
            OUR STORY
          </span>

          <h2>
            Building Trust, One Home at a Time
          </h2>

          <p>
            At DreamHome Realty, we believe buying a property should be one of
            life's most exciting experiences—not one of the most stressful.
            Since our inception, we have connected thousands of buyers,
            sellers, investors, and renters with verified properties across
            India.
          </p>

          <p>
            Our mission is to create a transparent, secure, and technology-driven
            real estate marketplace where customers can confidently discover
            their next home or investment opportunity.
          </p>

          <div className="company-highlights">

            <div>
              <h3>10K+</h3>
              <span>Properties Listed</span>
            </div>

            <div>
              <h3>8K+</h3>
              <span>Happy Clients</span>
            </div>

            <div>
              <h3>250+</h3>
              <span>Professional Agents</span>
            </div>

          </div>

        </motion.div>

      </div>

      <div className="timeline">

        <h2>Our Journey</h2>

        {timeline.map((item, index) => (

          <motion.div
            className="timeline-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * .2 }}
          >

            <div className="year">
              {item.year}
            </div>

            <div className="timeline-content">

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default CompanyStory;