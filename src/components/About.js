"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold tracking-tight mb-4">About Me</h2>
      <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
        With a foundation built on years of diverse, hands-on experience—from modding Java game clients to engineering with modern frameworks like React and Next.js—I am a developer driven by curiosity and a love for the craft. My background has given me a unique perspective on problem-solving and a passion for creating efficient, high-quality applications. I am constantly learning and seeking new challenges to expand my expertise.
      </p>
    </motion.div>
  );
};

export default About;
