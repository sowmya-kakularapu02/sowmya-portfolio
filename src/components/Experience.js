import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    role: "Graduate Research Assistant",
    company: "Saint Louis University, Missouri, USA",
    duration: "Jan 2025 – May 2025",
    
    bullets: [
      "	Architected and refined backend systems using Spring Framework, optimizing RESTful APIs to improve data processing efficiency by 30% and reduce API response time by 20%, resulting in increased user engagement for the Loan Lending Project.",
"	Engineered RESTful APIs to enable real-time analytics and loan approval predictions, handling a 50% increase in concurrent users while maintaining a 95% accuracy rate in predictions, ensuring seamless frontend-backend communication."

    ],
  },
  
  {
    role: "Software Developer",
    company: "Wipro Technologies Limited, Hyderabad, India",
    duration: "May 2022 – Jun 2023",
    project: "Project: CitiBank's Secure Transaction processing system",
    bullets: [
      "	Engineered backend services using Java, Spring Boot, and MySQL for Citibank’s Secure Transaction Processing System, applying core software engineering principles and best practices in Object-Oriented Design to support high-volume transactions in a scalable financial system.",
"	Optimized SQL queries and integrated Redis caching to improve response times by 20%, enhancing the overall performance of backend processes",
" Developed interactive UI and APIs for Citibank’s secure system, enabling real-time transaction submissions and automated report generation, which reduced manual intervention by 30%.",
"	Collaborated in designing and implementing microservices deployed on AWS EC2 and Kubernetes",
" applying cloud technology and infrastructure-as-code practices to improve system reliability and scalability under heavy traffic.",
" Streamlined CI/CD workflows using Docker, Jenkins, and GitHub Actions, integrating source code control management to reduce manual deployment steps and cut deployment time by 15%.",
" Managed an event-driven architecture with RabbitMQ for processing over 200K events daily, while reinforcing system stability through comprehensive unit and integration testing with JUnit and Mockito."

    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Raudra Eduservices Private Limited, Hyderabad, India",
    duration: "Dec 2021 – May 2022",
    bullets: [
     "	Designed and deployed 10+ responsive web pages, improving page load speed by 30% and increasing mobile engagement.. Redesigned navigation flow and optimized front-end layouts with modern UI practices, reducing bounce rate by 20% and improving user retention on key web pages.",
"	Maintained 99.9% system uptime by proactively monitoring performance, troubleshooting production issues, and resolving 15+ critical bugs during rollout.",

    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto py-20 px-6 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-yellow-400 underline underline-offset-8">
          Experience
        </h2>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: idx % 2 === 0 ? -50 : 50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(253,224,71,0.3)] transition duration-300"
          >
            <div className="flex items-center gap-3 text-sky-400 mb-2">
              <FaBriefcase className="text-xl" />
              <h3 className="text-xl font-semibold">{exp.role}</h3>
            </div>
            <p className="text-gray-400 italic">{exp.company} | {exp.duration}</p>
            <p className="text-gray-300 font-medium mt-1 mb-3">{exp.project}</p>

            <motion.ul
              className="list-disc pl-6 text-gray-300 space-y-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              {exp.bullets.map((point, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {point}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
