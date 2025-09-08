import { motion } from 'framer-motion';
import profilePic from '../assets/SowmyaPic.jpg'; // replace with your actual image path

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto py-20 px-6 text-white flex flex-col md:flex-row items-center gap-10"
    >
      {/* Animated Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex-shrink-0"
      >
        <img
          src={profilePic}
          alt="SowmyaPic.jpg"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
        />
      </motion.div>
      

      {/* Animated Text */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.4 }}

        className="max-w-2xl"
      >
      <h2 className="text-4xl font-bold text-white-600 underline underline-offset-8 mb-8">
  About Me
</h2>


        <p className="text-lg text-gray-300 leading-relaxed">
        <p className="text-lg text-gray-300 leading-relaxed">
        I am a results-oriented Java Full Stack Developer with a Master’s degree in Computer and Information Sciences from Saint Louis University. 
        I bring hands-on experience in designing and developing scalable web applications using Java, Spring Boot, RESTful APIs, and MySQL. 
        During my time at Wipro Technologies, I worked on enterprise-grade billing and customer service platforms, contributing to backend development, API integration, and secure data handling.
        I’m proficient in frontend technologies like React.js and have deployed cloud-based applications using Docker and AWS. With a strong foundation in Agile and CI/CD practices, I am committed to building reliable, efficient, and maintainable software solutions.
        
</p>
</p>
      </motion.div>
    </section>
  );
}
