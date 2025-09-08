import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

import sluImage from '../assets/10132021-bm-slu-file-03 copy.jpeg';
import jntuImage from '../assets/JNTUH copy.jpeg';// Replace with your actual image

const education = [
  {
    degree: "Master of Science in Computer and Information Sciences",
    university: "Saint Louis University, Missouri, USA",
    year: "Aug 2023 – May 2025",
    image: sluImage,
  },
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    university: "Jawaharlal Nehru Technological University, India",
    year: "Jul 2018 –May 2022",
    image: jntuImage,
  },
];

export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto py-20 px-6 text-white">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-yellow-400 underline underline-offset-8">
          Education
        </h2>
      </div>

      {/* Cards */}
      <motion.div
        className="space-y-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col md:flex-row items-center gap-6 bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(253,224,71,0.3)] transition duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* 🎓 Animated Image */}
            <motion.img
              src={edu.image}
              alt={`${edu.university} campus`}
              className="w-full md:w-64 h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-500"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />

            {/* 📘 Animated Text */}
            <motion.div
              className="text-left md:text-left flex-1"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-2 text-sky-400">
                <FaGraduationCap className="text-lg" />
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
              </div>
              <p className="text-gray-300">{edu.university}</p>
              <p className="text-gray-400 italic mt-1">{edu.year}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
