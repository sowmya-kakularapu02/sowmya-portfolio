import {
  FaJava, FaReact, FaAws, FaGitAlt,
} from 'react-icons/fa';
import {
  SiSpringboot, SiHibernate, SiMongodb, SiMysql, SiJavascript, SiPostman, SiDocker,
  SiJenkins, SiPython, SiJest, SiHtml5, SiCss3, SiBootstrap, SiKubernetes,
} from 'react-icons/si';
import { TbSql } from 'react-icons/tb';
import { motion } from 'framer-motion';

export default function Skills() {
  const sectionVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="skills" className="max-w-6xl mx-auto py-20 px-6 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-yellow-400 underline underline-offset-8">
          Skills
        </h2>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}

      >
        <SkillCategory title="Programming Languages" skills={[
          { icon: <FaJava />, label: 'Java/J2EE' },
          { icon: <SiPython />, label: 'Python' },
          { icon: <TbSql />, label: 'SQL' },
          { icon: <SiJavascript />, label: 'JavaScript' },
        ]} />

        <SkillCategory title="Frameworks & Libraries" skills={[
          { icon: <SiSpringboot />, label: 'Spring Boot' },
          { icon: <SiHibernate />, label: 'Hibernate' },
          { icon: <FaReact />, label: 'React.js' },
          { icon: <SiPostman />, label: 'Postman' },
        ]} />

        <SkillCategory title="Web Technologies" skills={[
          { icon: <SiHtml5 />, label: 'HTML5' },
          { icon: <SiCss3 />, label: 'CSS3' },
          { icon: <SiBootstrap />, label: 'Bootstrap' },
        ]} />

        <SkillCategory title="Databases" skills={[
          { icon: <SiMysql />, label: 'MySQL' },
          { icon: <SiMongodb />, label: 'MongoDB' },
        ]} />

        <SkillCategory title="Tools & DevOps" skills={[
          { icon: <FaGitAlt />, label: 'Git/GitHub' },
          { icon: <SiDocker />, label: 'Docker' },
          { icon: <SiJenkins />, label: 'Jenkins' },
        ]} />

        <SkillCategory title="Testing" skills={[
          { icon: <SiJest />, label: 'Jest' },
        ]} />

        <SkillCategory title="Cloud Platforms" skills={[
          { icon: <FaAws />, label: 'AWS EC2 / S3' },
          { icon: <SiKubernetes />, label: 'Kubernetes' },
        ]} />

        <SkillCategory title="Concepts" skills={[
          { label: 'RESTful APIs' },
          { label: 'JWT Authentication' },
          { label: 'Role-Based Access Control' },
          { label: 'Agile Methodology' },
        ]} />
      </motion.div>
    </section>
  );
}

// ✅ SkillCategory with scroll-triggered fade-in + hover animation
function SkillCategory({ title, skills }) {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg p-6 shadow-lg"
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h3 className="text-xl font-semibold text-sky-400 mb-4 text-center">{title}</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 text-gray-300 px-4 py-2 rounded-md transition-all duration-300
                       hover:shadow-[0_0_12px_rgba(253,224,71,0.4)] hover:text-yellow-400 cursor-pointer"
          >
            {skill.icon && <span className="text-yellow-400 text-xl">{skill.icon}</span>}
            <span className="text-base font-medium">{skill.label}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
