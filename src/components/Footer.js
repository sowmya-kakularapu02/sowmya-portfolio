import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-20 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Sowmya Kakularapu. All rights reserved.
        </p>
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/sowmya-kakularapu02"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/sowmya-kakularapu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
