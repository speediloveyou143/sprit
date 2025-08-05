function Contact() {
    return (
      <div className="min-h-screen from-blue-950 font-sans text-gray-100 bg-[#111827]">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-[#111827] overflow-hidden">
          <div className="relative container mx-auto px-4 text-center z-10">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 animate-fade-in-down">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-300">
                  Get In Touch
                </span>
              </h1>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 leading-relaxed text-gray-300 animate-fade-in-up">
                We'd love to hear from you. Reach out for questions, partnerships, or just to say hello.
              </p>
            </div>
          </div>
        </section>
  
        {/* Contact Form */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                      <select
                        id="subject"
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-300"
                      >
                        <option value="">Select a subject</option>
                        <option value="support">Support</option>
                        <option value="sales">Sales</option>
                        <option value="partnership">Partnership</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                      <textarea
                        id="message"
                        rows="5"
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Your message..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary rounded-full px-6 py-3 w-full hover:bg-indigo-600 transition-colors duration-300 font-semibold bg-indigo-500 border-indigo-500"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-indigo-600 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Phone</h3>
                        <p className="text-gray-400">8333855546</p>
                        <p className="text-gray-400">Mon-Fri, 9am-5pm IST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-indigo-600 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Email</h3>
                        <p className="text-gray-400">sprintittechnologies@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-indigo-600 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Office</h3>
                        <p className="text-gray-400">Building kannuri vihar 110/111,CKB Layout,</p>
                        <p className="text-gray-400">Marthahalli, Banglore ,560037</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12">
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      {[
                        { name: "Twitter", icon: "🐦", url: "#" },
                        { name: "LinkedIn", icon: "🔗", url: "#" },
                        { name: "Facebook", icon: "👍", url: "#" },
                        { name: "Instagram", icon: "📷", url: "#" },
                        { name: "YouTube", icon: "▶️", url: "#" }
                      ].map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          className="bg-gray-800 hover:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center text-xl transition-colors duration-300"
                          aria-label={social.name}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Map Section */}
        <section className="py-0 bg-[#111827]">
          <div className="container mx-auto px-0">
            <div className="bg-gray-800 rounded-xl overflow-hidden h-96">
              {/* Map placeholder - you would replace this with your actual map component */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-900">
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-white mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-white mb-2">Our Location</h3>
                  <p className="text-gray-300">123 Tech Park Drive, San Francisco</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Contact;