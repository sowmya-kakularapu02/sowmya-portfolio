import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }
    alert("Message submitted successfully!");
    setFormData({ name: '', email: '', message: '' });
    // Optional: integrate with email service (EmailJS, Formspree, backend API, etc.)
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto py-20 px-6 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-yellow-400 underline underline-offset-8">
          Contact
        </h2>
        <p className="text-gray-400 mt-2">Let's connect! Send me a message or reach out on LinkedIn.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* 📩 Contact Info */}
        <motion.div
          className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <ContactItem
            icon={<FaMapMarkerAlt />}
            label="Location"
            value="Missouri, USA"
          />
          <ContactItem
            icon={<FaEnvelope />}
            label="Email"
            value="sowmyakakularapu66@gmail.com"
            link="mailto:sowmyakakularapu66@gmail.com"
          />
          <ContactItem
            icon={<FaLinkedin />}
            label="LinkedIn"
            value="linkedin.com/in/sowmyareddykakularapu"
            link="https://linkedin.com/in/sowmyareddykakularapu"
          />
          <ContactItem
            icon={<FaGithub />}
            label="GitHub"
            value="github.com/sowmya-kakularapu02"
            link="https://github.com/sowmya-kakularapu02"
          />
        </motion.div>

        {/* 📝 Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 space-y-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded hover:bg-yellow-300 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value, link }) {
  return (
    <motion.div
      className="flex items-center gap-4 hover:text-yellow-400 transition duration-300 cursor-pointer"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-xl text-sky-400">{icon}</div>
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-base font-medium text-white hover:underline">
            {value}
          </a>
        ) : (
          <p className="text-base font-medium text-white">{value}</p>
        )}
      </div>
    </motion.div>
  );
}


