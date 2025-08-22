import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock data with prices in Indian Rupees and updated image URLs
  const mockCourses = [
    {
      id: '1',
      title: 'Python Full Stack Development',
      description: 'Master Python, Django, React, and deployment techniques to build modern web applications from scratch.',
      price: '₹15,999',
      rating: '4.8',
      duration: '12 weeks',
      level: 'Intermediate',
      students: 2500,
      image: 'https://images.unsplash.com/photo-1649180556628-9ba704115795?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHl0aG9ufGVufDB8fDB8fHww',
    },
    {
      id: '2',
      title: 'Java Full Stack Development',
      description: 'Learn Java, Spring Boot, Angular, and database integration to create robust, scalable web applications.',
      price: '₹19,999',
      rating: '4.7',
      duration: '14 weeks',
      level: 'Intermediate',
      students: 1800,
      image: 'https://media.istockphoto.com/id/870344898/photo/3d-text-of-java.webp?a=1&b=1&s=612x612&w=0&k=20&c=j7l0I1bmoYU7m_HNgyRqG5YxlcSH9vXTaY4ihXf322U=',
    },
    {
      id: '3',
      title: 'AWS DevOps Engineer',
      description: 'Become an AWS DevOps expert with hands-on training in CI/CD, containerization, and cloud infrastructure.',
      price: '₹24,999',
      rating: '4.9',
      duration: '10 weeks',
      level: 'Advanced',
      students: 1200,
      image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXdzfGVufDB8fDB8fHww',
    },
    {
      id: '4',
      title: 'AI & ML Mastery',
      description: 'Dive into Artificial Intelligence and Machine Learning with Python, TensorFlow, and real-world projects.',
      price: '₹29,999',
      rating: '4.9',
      duration: '16 weeks',
      level: 'Advanced',
      students: 1500,
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: '5',
      title: 'React Native Mobile Development',
      description: 'Build cross-platform mobile applications with React Native and master mobile app deployment.',
      price: '₹18,999',
      rating: '4.6',
      duration: '10 weeks',
      level: 'Intermediate',
      students: 1900,
      image: 'https://images.unsplash.com/photo-1633356122102-3feb4f15b932?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3QlMjBuYXRpdmV8ZW58MHx8MHx8fDA%3D',
    },
  ];

  // Fetch courses from the API
  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_ORIGIN}/api/courses/get-all-courses`);
      console.log(response);
      setCourses([...response.data, ...mockCourses]);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch courses, showing default courses');
      setCourses(mockCourses);
      setLoading(false);
      console.error('Error fetching courses:', err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // Group courses by category for the category section
  const courseCategories = [
    {
      name: 'Web Development',
      icon: '💻',
      count: courses.filter(c =>
        c.title.toLowerCase().includes('web') ||
        c.title.toLowerCase().includes('full stack')
      ).length,
    },
    {
      name: 'Data Science',
      icon: '📊',
      count: courses.filter(c => c.title.toLowerCase().includes('data')).length,
    },
    {
      name: 'Mobile Apps',
      icon: '📱',
      count: courses.filter(c => c.title.toLowerCase().includes('mobile')).length,
    },
    {
      name: 'Cloud Computing',
      icon: '☁️',
      count: courses.filter(c => c.title.toLowerCase().includes('cloud') || c.title.toLowerCase().includes('aws')).length,
    },
    {
      name: 'UI/UX Design',
      icon: '🎨',
      count: courses.filter(c => c.title.toLowerCase().includes('design')).length,
    },
    {
      name: 'Cyber Security',
      icon: '🔒',
      count: courses.filter(c => c.title.toLowerCase().includes('security')).length,
    },
    {
      name: 'AI & ML',
      icon: '🤖',
      count: courses.filter(c => c.title.toLowerCase().includes('ai') || c.title.toLowerCase().includes('machine')).length,
    },
    {
      name: 'DevOps',
      icon: '🔄',
      count: courses.filter(c =>
        c.title.toLowerCase().includes('devops') ||
        c.title.toLowerCase().includes('aws') ||
        c.title.toLowerCase().includes('full stack')
      ).length,
    },
  ];

  return (
    <div className="min-h-screen font-sans text-gray-100 bg-[#111827]">
      {/* Hero Section */}
      <section className="relative pt-[100px] flex items-center justify-center bg-[#111827] overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 animate-fade-in-down">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-300">
                Explore Our Courses
              </span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-gray-300 animate-fade-in-up">
              Discover transformative learning experiences designed to advance your career.
            </p>
            {/* WhatsApp Us Button */}
            <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300">
              <a
                href="https://wa.me/8333855546?text=HEY%20HII%20WE%20NEED%20STANDUP%20HELP%20%26%20SUPPORT%20from%20SprintIT%20Technologies."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <i className="bi bi-whatsapp ico-g mr-2"></i> WhatsApp Us
              </a>
            </button>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {courseCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 cursor-pointer text-center"
              >
                <span className="text-3xl mb-3 block">{category.icon}</span>
                <h3 className="text-lg font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-gray-400">{category.count} courses</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Courses</h2>
            <Link to="/courses" className="text-indigo-400 hover:text-indigo-300 flex items-center text-sm font-medium">
              View all courses
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-400"></div>
              <p className="mt-4 text-gray-400">Loading courses...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-400">{error}</p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-300">Available Courses</h3>
              </div>
            </div>
          ) : null}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-indigo-500"
              >
                <div
                  className={`h-40 ${course.image ? '' : 'bg-gradient-to-br from-indigo-600 to-purple-500'} flex items-center justify-center text-white text-4xl font-bold`}
                >
                  {course.image ? (
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                  ) : (
                    course.title.split(' ')[0].charAt(0)
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold line-clamp-1">{course.title}</h3>
                    <span className="bg-indigo-600 text-white text-sm px-3 py-1 rounded-full whitespace-nowrap">
                      {course.price}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4 line-clamp-2 text-sm">{course.description}</p>

                  <div className="flex items-center text-sm text-gray-400 mb-4 flex-wrap gap-2">
                    <span className="flex items-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {course.rating || '4.5'}
                    </span>
                    <span className="mr-4">{course.duration}</span>
                    <span className="capitalize">{course.level}</span>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button className="helping flex items-center justify-center gap-2 rounded-lg px-4 py-3 bg-green-600 hover:bg-green-700 transition-colors duration-300 font-semibold text-white text-sm w-full">
                      <a
                        href={`https://wa.me/8333855546?text=HEY HII WE NEED COURSE SUPPORT from SprintIT Technologies for the${course.title}`}
                        
                        className="flex items-center justify-center gap-2"
                      >
                        <i className="bi bi-whatsapp ico-g mr-2"></i> WhatsApp Us
                      </a>
                    </button>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-400">
                      {course.students?.toLocaleString() || '0'} students
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                quote: 'The Python Full Stack course was a game-changer! I built a complete web app in just weeks.',
                name: 'Emily Rodriguez',
                role: 'Full Stack Developer',
                avatar: '👩',
              },
              {
                quote: 'The Java Full Stack course gave me the skills to land a senior developer role.',
                name: 'James Wilson',
                role: 'Java Developer',
                avatar: '👨',
              },
              {
                quote: 'AWS DevOps training was hands-on and practical. I’m now confident managing cloud infrastructure.',
                name: 'Priya Patel',
                role: 'DevOps Engineer',
                avatar: '👩‍💻',
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl">
                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Courses;