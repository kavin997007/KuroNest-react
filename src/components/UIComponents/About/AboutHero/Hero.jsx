import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import "./Hero.css"

const Hero = () => {
  return (
    <section className='about-hero'>
        <div className='about-overlay'>
            <motion.h1 
                initial={{opacity: 0, y: 40}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8}}
            >
            Find Your Dream Properties
            </motion.h1>

            <motion.p
                initial={{opacity: 0}}
                animate={{opacity:1}}
                transition={{delay:0.3}}
            >
                Connecting people with their perfect properties through trust,
                transparency, and innovation.
            </motion.p>

            <motion.div 
                className="about-hero-buttons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                <button className="about-primary-btn">Explore Properties</button>

                <Link to="/contact" className="about-secondary-btn">
                    Contact Us
                </Link>
            </motion.div>
        </div>
    </section>
  )
}

export default Hero
