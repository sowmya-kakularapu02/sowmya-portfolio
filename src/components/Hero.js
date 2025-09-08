import { TypeAnimation } from 'react-type-animation';
import { FiDownload } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Lottie from 'lottie-react';
import animationData from '../assets/hero-animation.json';
import '../Hero.css';

<div className="mt-10 md:mt-0 md:ml-12">
  <Lottie animationData={animationData} loop={true} className="w-[400px] h-auto md:w-[500px]" />
</div>



export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-16 bg-gray-900 text-white"
    >
      <div className="max-w-xl text-center md:text-left md:mr-10 space-y-6">
        {/* Welcome Badge */}
        <p className="text-2xl md:text-3xl font-bold text-yellow-400">
   Welcome to my Portfolio
</p>


<h1 className="text-5xl font-extrabold text-yellow-300 leading-tight">
  Hi! I'm{" "}
  <TypeAnimation
    sequence={[
      "Sowmya Reddy Kakularapu", // your animated text
      2000, // wait for 2 seconds
      "", // clear text
    ]}
    wrapper="span"
    cursor={false}
    repeat={Infinity}
    className="text-white"
  />
   <span className="wave">👋</span>
</h1>
        <h2 className="text-2xl font-semibold text-gray-200">
          Software Developer | Java | Python | Spring Boot | React.js | AWS
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-base leading-relaxed">
          I’m a Software Developer skilled in building scalable web applications using Java, Spring Boot, React.js, and MySQL.
          Experienced in RESTful API development, cloud deployment (AWS), and Agile-based full-stack delivery.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="/Sowmya_Kakularapu_Resume.pdf"
            target="_blank"
            className="flex items-center gap-2 border border-yellow-400 text-yellow-400 px-5 py-2 rounded hover:bg-yellow-300 hover:text-black transition"
          >
            <FiDownload /> Resume
          </a>
          <a
            href="https://linkedin.com/in/sowmyareddykakularapu"
            target="_blank"
            className="flex items-center gap-2 border border-yellow-400 text-yellow-400 px-5 py-2 rounded hover:bg-yellow-300 hover:text-black transition"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/sowmya-kakularapu02"
            target="_blank"
            className="flex items-center gap-2 border border-yellow-400 text-yellow-400 px-5 py-2 rounded hover:bg-yellow-300 hover:text-black transition"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>

         <div className="mt-10 md:mt-0 md:ml-12">
  <Lottie animationData={animationData} loop={true} className="w-[400px] h-auto md:w-[500px]" />
</div>
    </section>
  );
}

