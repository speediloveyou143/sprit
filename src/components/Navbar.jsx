import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from '../public/WhatsApp Image 2025-08-03 at 21.04.43.jpeg';

export default function Navbar(props) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const userData = props?.data;
  const isLoggedIn = !!userData?.userRole;
  const userRole = userData?.userRole;
  console.log(userRole);
  const userEmail = userData?.userEmail || "";
  const emailInitials = userEmail.slice(0, 2).toUpperCase();
  const handleSignOut = () => {
    localStorage.clear();
    window.location.href = "/signin";
  };

  const getDashboardLink = () => {
    switch (userRole) {
      case "user":
        return { path: "/student-dashboard", label: "Student Dashboard" };
      case "admin":
        return { path: "/dashboard", label: "Admin Dashboard" };
      default:
        return null;
    }
  };

  const dashboard = getDashboardLink();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900 py-3" : "bg-gray-900 py-2"
      } shadow-md`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile: Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md p-1"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Sprint IT Technologies Logo"
                className="h-[60px] w-[60px] rounded-full object-cover shadow-md border-2 border-gray-700 hidden md:block"
              />
              <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-200">
                Sprint IT Technologies
              </span>
            </Link>
          </div>

          {/* Desktop: Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/courses"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-150"
            >
              Courses
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-150"
            >
              About
            </Link>
            <Link
              to="/careers"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-150"
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-150"
            >
              Contact
            </Link>
          </div>

          {/* Desktop: Profile/Login */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn && userRole ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-white text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full p-1 hover:bg-gray-700 transition-all duration-200 w-9 h-9 flex items-center justify-center bg-gray-700"
                >
                  {emailInitials}
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-50">
                    {dashboard && (
                      <Link
                        to={dashboard.path}
                        className="block px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white rounded-t-md transition-colors duration-150"
                      >
                        {dashboard.label}
                      </Link>
                    )}
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-gray-200 hover:bg-red-500 hover:text-white rounded-b-md transition-colors duration-150"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-150"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-md transition-all duration-150"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile: Button (Get Started or Profile) */}
          <div className="md:hidden relative">
            {isLoggedIn && userRole ? (
              <div>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-white text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full p-1 hover:bg-gray-700 transition-all duration-200 w-8 h-8 flex items-center justify-center bg-gray-700"
                >
                  {emailInitials}
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-md shadow-lg z-50">
                    {dashboard && (
                      <Link
                        to={dashboard.path}
                        className="block px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white rounded-t-md transition-colors duration-150"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {dashboard.label}
                      </Link>
                    )}
                    <button
                      onClick={() => {
                        handleSignOut();
                        setDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-200 hover:bg-red-500 hover:text-white rounded-b-md transition-colors duration-150"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/signup"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-md transition-all duration-150"
              >
                Get Started
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu (Hamburger) */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} bg-gray-900 border-t border-gray-800`}>
        <div className="px-4 py-3 space-y-2">
          <Link
            to="/courses"
            className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md text-sm font-medium transition-colors duration-150"
            onClick={() => setMobileMenuOpen(false)}
          >
            Courses
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md text-sm font-medium transition-colors duration-150"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/careers"
            className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md text-sm font-medium transition-colors duration-150"
            onClick={() => setMobileMenuOpen(false)}
          >
            Careers
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md text-sm font-medium transition-colors duration-150"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="border-t border-gray-800 pt-2">
            {isLoggedIn && userRole === "user" ? (
              <>
                {dashboard && (
                  <Link
                    to={dashboard.path}
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md text-sm font-medium transition-colors duration-150"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {dashboard.label}
                  </Link>
                )}
                <button
                  onClick={() => {
                    handleSignOut();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-red-600 rounded-md text-sm font-medium transition-colors duration-150"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md text-sm font-medium transition-colors duration-150"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 rounded-md text-sm font-medium text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}