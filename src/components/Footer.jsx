function Footer() {
    return (
      <footer className="py-12 bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-300">
                  Sprint IT Technologies
                </span>
              </h3>
              <p className="text-gray-400">
                Empowering learners with cutting-edge courses to achieve career success.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/courses" className="text-gray-400 hover:text-indigo-300 transition-colors duration-300">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-400 hover:text-indigo-300 transition-colors duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="/careers" className="text-gray-400 hover:text-indigo-300 transition-colors duration-300">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-indigo-300 transition-colors duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email:sprintittechnologies@gmail.com</li>
                <li>Phone:8333855546</li>
                <li>Address:Building kannuri vihar 110/111,CKB Layout, Marthahalli, Banglore ,560037</li>
              </ul>
            </div>
  
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  {
                    name: "Twitter",
                    icon: (
                      <svg className="w-6 h-6 text-indigo-400 hover:text-indigo-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.531A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    ),
                    link: "https://twitter.com",
                  },
                  {
                    name: "LinkedIn",
                    icon: (
                      <svg className="w-6 h-6 text-indigo-400 hover:text-indigo-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79zm-6.24-8.37c.92 0 1.67-.75 1.67-1.67 0-.92-.75-1.67-1.67-1.67-.92 0-1.67.75-1.67 1.67 0 .92.75 1.67 1.67 1.67zm0 1.11v8.37h2.79v-8.37h-2.79z" />
                      </svg>
                    ),
                    link: "https://linkedin.com",
                  },
                ].map((social, index) => (
                  <a key={index} href={social.link} className="transition-colors duration-300">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Sprint IT Academy. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;