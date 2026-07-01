import "./Review.css";
import { motion } from "framer-motion";
import { FaStar,FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const client1 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvT4L1Y7FUT3vRpPLaUSNQs2KTh2Kp_Nc4aT6FGLriEA&s=10";
const client2 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTvu1rwBSTsRWnxk9qrM_UEORI3ePg--fPT6yNB38pXA&s=10";
const client3 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJG_aNiHoWDDR65FaLOKUPt7dMt01GleVFNHnVf00aQ&s=10";
const client4 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBuHoyA1fxtbjJXtxgzSCYf5NOZOO2OI9y2YolKhuuvA&s=10";


const review = [
  {
    image: client1,
    name: "Rahul Sharma",
    role: "Home Buyer",
    review:
      "The entire buying process was seamless. The team helped me find my dream home within my budget. Highly recommended!",
  },
  {
    image: client2,
    name: "Priya Verma",
    role: "Property Investor",
    review:
      "Professional service with verified property listings. Their market knowledge helped me make the right investment.",
  },
  {
    image: client3,
    name: "Amit Kumar",
    role: "Apartment Owner",
    review:
      "Selling my apartment was incredibly easy. The property received excellent visibility and was sold much faster than expected.",
  },
  {
    image: client4,
    name: "Sneha Reddy",
    role: "First-Time Buyer",
    review:
      "Their team guided me through every step, from selecting the property to documentation. Excellent customer support.",
  },
];

const Review = () => {
  return (
    <section className="tevie">

      <motion.div
        className="review-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>Reviews</span>

        <h2>What Our Clients Say</h2>

        <p>
          Thousands of families trust us to help them find, buy, sell,
          and invest in properties across the country.
        </p>

      </motion.div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="review-slider"
      >

        {review.map((item, index) => (

          <SwiperSlide key={index}>
            <FaQuoteLeft className="quote-icon" />
            <motion.div
            
              className="review-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >

              <img
                src={item.image}
                alt={item.name}
                className="client-image"
              />

              <div className="stars">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              <p className="review">
                "{item.review}"
              </p>

              <h3>{item.name}</h3>

              <span>{item.role}</span>

            </motion.div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>
  );
};

export default Review;