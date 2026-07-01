import "./FAQ.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "How do I schedule a property visit?",
    answer:
      "Simply browse the property you are interested in, click the 'Schedule Visit' button, and choose a convenient date and time. Our team will confirm your appointment."
  },
  {
    question: "Are all property listings verified?",
    answer:
      "Yes. Every listing goes through a verification process to ensure the information is accurate, genuine, and up to date."
  },
  {
    question: "Can I list my property on your platform?",
    answer:
      "Absolutely! Register as a property owner, complete the listing details, upload images, and our team will review and publish your property."
  },
  {
    question: "Do you provide home loan assistance?",
    answer:
      "Yes. We work with trusted banking partners to help customers explore suitable home loan options with competitive interest rates."
  },
  {
    question: "How can I contact your support team?",
    answer:
      "You can reach us through the Contact page, email, or our customer support helpline. We are available to assist you throughout your property journey."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">

      <motion.div
        className="faq-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>FREQUENTLY ASKED QUESTIONS</span>

        <h2>Everything You Need to Know</h2>

        <p>
          Find answers to the most common questions about buying,
          selling, renting, and investing in real estate.
        </p>
      </motion.div>

      <div className="faq-container">

        {faqData.map((item, index) => (

          <motion.div
            key={index}
            className="faq-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >

            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>

              {activeIndex === index ? (
                <FaMinus />
              ) : (
                <FaPlus />
              )}
            </button>

            <AnimatePresence>

              {activeIndex === index && (

                <motion.div
                  className="faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >

                  <p>{item.answer}</p>

                </motion.div>

              )}

            </AnimatePresence>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default FAQ;