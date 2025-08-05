function About() {
  return (
    <div className="min-h-screen from-blue-950 font-sans text-gray-100 bg-[#111827]">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#111827] overflow-hidden">
        <div className="relative container mx-auto px-4 text-center z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 animate-fade-in-down">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-300">
                About Sprint IT Technologies
              </span>
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 leading-relaxed text-gray-300 animate-fade-in-up">
              Empowering the next generation of tech professionals through innovative education.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-400 mb-4">
                  Founded in 2015, Sprint IT Technologies began as a small initiative to bridge the gap between traditional education and industry needs in the tech sector.
                </p>
                <p className="text-gray-400 mb-4">
                  What started as weekend workshops has grown into a comprehensive learning platform serving over 50,000 students worldwide.
                </p>
                <p className="text-gray-400">
                  Our mission is simple: to provide accessible, high-quality tech education that prepares learners for real-world challenges.
                </p>
              </div>
              <div className="bg-gray-800 rounded-xl overflow-hidden h-80 flex items-center justify-center">
                <div className="text-6xl">🚀</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50,000+", label: "Students Enrolled" },
              { number: "120+", label: "Countries Reached" },
              { number: "98%", label: "Satisfaction Rate" },
              { number: "85%", label: "Career Advancement" }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl">
                <div className="text-4xl font-bold text-indigo-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate educators and industry experts dedicated to your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Dr. Sarah Johnson", role: "Founder & CEO", bio: "Former Google Engineering Lead", emoji: "👩‍💼" },
              { name: "Michael Chen", role: "CTO", bio: "Specializes in AI/ML systems", emoji: "👨‍💻" },
              { name: "Priya Patel", role: "Head of Curriculum", bio: "Education specialist with 15+ years experience", emoji: "📚" },
              { name: "David Wilson", role: "Student Success", bio: "Dedicated to learner outcomes", emoji: "🎯" }
            ].map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-700 text-center p-8">
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-indigo-400 mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
                <div className="mt-4 flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-indigo-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-indigo-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Excellence", 
                description: "We maintain the highest standards in curriculum design and instruction.", 
                icon: "⭐" 
              },
              { 
                title: "Accessibility", 
                description: "Quality education should be available to everyone, regardless of background.", 
                icon: "🌍" 
              },
              { 
                title: "Innovation", 
                description: "We continuously evolve our methods to stay at the forefront of tech education.", 
                icon: "💡" 
              },
              { 
                title: "Community", 
                description: "Learning happens best in supportive, collaborative environments.", 
                icon: "🤝" 
              },
              { 
                title: "Impact", 
                description: "We measure success by the real-world outcomes of our students.", 
                icon: "🎯" 
              },
              { 
                title: "Integrity", 
                description: "Honesty and transparency guide all our interactions.", 
                icon: "🔍" 
              }
            ].map((value, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;