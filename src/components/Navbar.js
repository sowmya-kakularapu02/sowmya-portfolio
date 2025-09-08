
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white shadow z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left - Name */}
        <div className="text-xl font-bold text-white-400">
          Sowmya Reddy Kakularapu
        </div>
        

        {/* Right - Navigation Links */}
        <ul className="flex space-x-8 font-medium text-white-200">
          {[
            <a href="#home" className="text-white hover:text-yellow-300">Home</a>,
            { name: 'Home', href: '#home' },
            { name: 'About', href: '#about' },
            { name: 'Skills', href: '#skills' },
            { name: 'Experience', href: '#experience' },
            { name: 'Education', href: '#education' },
            { name: 'Projects', href: '#projects' },
            { name: 'Contact', href: '#contact' },
          ].map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:underline hover:underline-offset-4 hover:text-yellow-400 transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

