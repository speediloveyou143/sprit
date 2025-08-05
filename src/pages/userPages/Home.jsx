function Home() {
  return (
    <div className="min-h-screen from-blue-950 font-sans text-gray-100">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#111827] overflow-hidden">
        <div className="relative container mx-auto px-4 text-center z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 animate-fade-in">
              <span className="text-sm font-medium text-indigo-300">New Courses Added</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-down">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-300">
                Sprint IT Technologies
              </span>
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 leading-relaxed text-gray-300 animate-fade-in-up">
              Master new skills with <span className="font-semibold text-indigo-300">expert-led</span> courses designed for your career growth at Sprint IT Technologies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up">
              <button className="btn btn-primary btn-lg rounded-full px-8 py-4 shadow-lg hover:scale-[1.02] transition-all duration-300 font-semibold flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 border-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
                Enroll Now
              </button>
              <button className="btn btn-outline btn-lg rounded-full px-8 py-4 border-gray-400 hover:bg-white/5 transition-all duration-300 font-semibold text-gray-200">
                Explore Courses
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-0 right-0 flex justify-center animate-bounce">
          <svg className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-800 relative -mt-16 z-10 rounded-t-3xl shadow-xl border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "10K+", label: "Active Learners", color: "text-indigo-400" },
              { number: "95%", label: "Course Completion", color: "text-emerald-400" },
              { number: "50+", label: "Expert Instructors", color: "text-amber-400" },
              { number: "200+", label: "Courses Offered", color: "text-purple-400" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-700/50 rounded-xl hover:bg-gray-700 transition-colors duration-300 border border-gray-700">
                <p className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</p>
                <p className="text-gray-300 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Elevate Your <span className="text-indigo-400">Learning</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive tools to enhance your learning experience and achieve your goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: "Course Management",
                description: "Access and manage your courses with intuitive dashboards and progress tracking.",
                color: "text-indigo-400"
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                ),
                title: "Interactive Learning",
                description: "Engage with quizzes, assignments, and live sessions for a hands-on experience.",
                color: "text-purple-400"
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Community Support",
                description: "Connect with peers and instructors through forums and live Q&A sessions.",
                color: "text-pink-400"
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: "Progress Analytics",
                description: "Track your learning progress with detailed reports and performance insights.",
                color: "text-blue-400"
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Mobile Learning",
                description: "Learn on the go with our mobile-friendly platform and offline access.",
                color: "text-teal-400"
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 2-4 2-4 2 2.896 2 4zm0 0c0 1.104.896 2 2 2s2-.896 2-2-2-4-2-4-2 2.896-2 4zm-7 4c0 1.104-.896 2-2 2s-2-.896-2-2 2-4 2-4 2 2.896 2 4zm12 0c0 1.104.896 2 2 2s2-.896 2-2-2-4-2-4-2 2.896-2 4z" />
                  </svg>
                ),
                title: "Certification",
                description: "Earn industry-recognized certificates upon course completion.",
                color: "text-amber-400"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700"
              >
                <div className={`${feature.color} mb-6`}>{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by <span className="text-indigo-400">Learners</span> Worldwide
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Hear from students who advanced their careers with Sprint IT Technologies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Sprint IT Technologies helped me master web development in just 6 weeks!",
                name: "Sarah Miller",
                role: "Aspiring Developer",
                avatar: "https://randomuser.me/api/portraits/women/45.jpg"
              },
              {
                quote: "The interactive courses and analytics kept me motivated to finish strong.",
                name: "Michael Chen",
                role: "Data Analyst",
                avatar: "https://randomuser.me/api/portraits/men/33.jpg"
              },
              {
                quote: "The certificate I earned opened doors to new career opportunities!",
                name: "Priya Sharma",
                role: "Marketing Professional",
                avatar: "https://randomuser.me/api/portraits/women/69.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-700 p-8 rounded-xl hover:bg-gray-600 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-indigo-500/30"
                  />
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of learners advancing their skills with Sprint IT Technologies
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn btn-primary btn-lg rounded-full px-8 py-4 shadow-lg hover:bg-indigo-600 transition-colors duration-300 font-semibold bg-indigo-500 border-indigo-500">
                Start Learning - It's Free
              </button>
              <button className="btn btn-outline btn-lg rounded-full px-8 py-4 border-white text-white hover:bg-white/10 transition-colors duration-300 font-semibold">
                Browse Courses
              </button>
            </div>
            <p className="mt-6 text-sm opacity-80">
              No credit card required. Try our free courses today.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
}

export default Home;