function Careers() {
    return (
      <div className="min-h-screen from-blue-950 font-sans text-gray-100 bg-[#111827]">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-[#111827] overflow-hidden">
          <div className="relative container mx-auto px-4 text-center z-10">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 animate-fade-in-down">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-300">
                  Join Our Team
                </span>
              </h1>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 leading-relaxed text-gray-300 animate-fade-in-up">
                Shape the future of education with Sprint IT Technologies. Explore career opportunities today.
              </p>
              <button className="btn btn-primary rounded-full px-6 py-3 hover:bg-indigo-600 transition-colors duration-300 font-semibold bg-indigo-500 border-indigo-500">
                View Open Positions
              </button>
            </div>
          </div>
        </section>
  
        {/* Why Join Us */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Join Sprint IT Technologies?</h2>
              <p className="text-xl text-gray-400">
                We're building more than just courses—we're creating a movement in tech education.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Mission-Driven Work",
                  description: "Contribute directly to democratizing tech education worldwide.",
                  icon: "🎯"
                },
                {
                  title: "Flexible Work",
                  description: "Remote-first culture with flexible hours to suit your lifestyle.",
                  icon: "🏡"
                },
                {
                  title: "Continuous Learning",
                  description: "Free access to all our courses and regular skill development sessions.",
                  icon: "📚"
                },
                {
                  title: "Competitive Benefits",
                  description: "Health insurance, generous PTO, and retirement plans.",
                  icon: "💰"
                },
                {
                  title: "Diverse Team",
                  description: "Work with talented colleagues from around the globe.",
                  icon: "🌎"
                },
                {
                  title: "Growth Opportunities",
                  description: "Clear career paths and support for professional development.",
                  icon: "📈"
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-700">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Job Openings Section */}
        <section className="py-20 bg-[#111827]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Current Openings</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We're looking for passionate individuals to join our mission of transforming education.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Course Instructor - Web Development",
                  description: "Teach and develop engaging web development courses for our learners.",
                  location: "Remote",
                  type: "Full-Time",
                  department: "Education"
                },
                {
                  title: "Content Developer",
                  description: "Create high-quality course materials and assessments for various programs.",
                  location: "Hybrid - USA",
                  type: "Part-Time",
                  department: "Curriculum"
                },
                {
                  title: "Student Support Specialist",
                  description: "Provide guidance and support to learners to ensure their success.",
                  location: "Remote",
                  type: "Full-Time",
                  department: "Student Services"
                },
                {
                  title: "Marketing Manager",
                  description: "Develop and execute marketing strategies to reach new audiences.",
                  location: "Remote",
                  type: "Full-Time",
                  department: "Marketing"
                },
                {
                  title: "UX/UI Designer",
                  description: "Improve learning experiences through thoughtful interface design.",
                  location: "Remote",
                  type: "Contract",
                  department: "Product"
                },
                {
                  title: "DevOps Engineer",
                  description: "Maintain and improve our learning platform infrastructure.",
                  location: "Remote",
                  type: "Full-Time",
                  department: "Engineering"
                }
              ].map((job, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-700">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{job.title}</h3>
                    <span className="bg-indigo-900 text-indigo-300 text-xs px-2 py-1 rounded-full">
                      {job.department}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {job.type}
                    </div>
                  </div>
                  <button className="btn btn-primary rounded-full px-6 py-2 w-full hover:bg-indigo-600 transition-colors duration-300 font-semibold bg-indigo-500 border-indigo-500">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Hiring Process */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Hiring Process</h2>
              <p className="text-xl text-gray-400">
                We want to make sure we're the right fit for each other.
              </p>
            </div>
            
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    step: "1",
                    title: "Application Review",
                    description: "We carefully review all applications and will contact you if there's a potential match.",
                    icon: "📄"
                  },
                  {
                    step: "2",
                    title: "Initial Screening",
                    description: "A 30-minute video call to discuss your background and the role in more detail.",
                    icon: "💬"
                  },
                  {
                    step: "3",
                    title: "Skills Assessment",
                    description: "A practical assignment or technical interview depending on the role.",
                    icon: "🧠"
                  },
                  {
                    step: "4",
                    title: "Team Interviews",
                    description: "Meet with potential teammates to assess mutual fit and collaboration style.",
                    icon: "👥"
                  },
                  {
                    step: "5",
                    title: "Final Decision",
                    description: "We make a decision and extend an offer to successful candidates.",
                    icon: "🎉"
                  },
                  {
                    step: "6",
                    title: "Onboarding",
                    description: "Comprehensive onboarding to set you up for success in your new role.",
                    icon: "🚀"
                  }
                ].map((process, index) => (
                  <div 
                    key={index} 
                    className={`bg-gray-800 p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-700 relative ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}
                  >
                    <div className="absolute -top-3 -left-3 bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      {process.step}
                    </div>
                    <div className="text-3xl mb-4">{process.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{process.title}</h3>
                    <p className="text-gray-400">{process.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
  
        {/* Employee Testimonials */}
        <section className="py-20 bg-[#111827]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Life at Sprint IT Technologies</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Hear from our team about what makes this place special.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "The most rewarding part is seeing students land their dream jobs after completing our courses.",
                  name: "Alex Morgan",
                  role: "Senior Instructor",
                  avatar: "👨‍🏫",
                  tenure: "3 years at Sprint IT"
                },
                {
                  quote: "The flexibility and trust from leadership allows me to do my best work while maintaining work-life balance.",
                  name: "Jamie Zhang",
                  role: "Content Developer",
                  avatar: "👩‍💻",
                  tenure: "2 years at Sprint IT"
                },
                {
                  quote: "I've grown more in my career here than anywhere else, thanks to the learning culture and supportive team.",
                  name: "Taylor Williams",
                  role: "Engineering Lead",
                  avatar: "👨‍🔧",
                  tenure: "4 years at Sprint IT"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-800 p-8 rounded-xl">
                  <div className="text-5xl mb-6">{testimonial.avatar}</div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-xs text-gray-500 mt-1">{testimonial.tenure}</p>
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
                Ready to Make an Impact?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Join Sprint IT Technologies and help empower learners worldwide.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="btn btn-primary btn-lg rounded-full px-8 py-4 shadow-lg hover:bg-indigo-600 transition-colors duration-300 font-semibold bg-white text-indigo-700 border-white">
                  View All Opportunities
                </button>
                <button className="btn btn-outline btn-lg rounded-full px-8 py-4 shadow-lg hover:bg-white hover:bg-opacity-10 transition-colors duration-300 font-semibold border-white text-white">
                  Learn About Our Culture
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Careers;