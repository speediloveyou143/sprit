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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/95 py-2 shadow-lg" : "bg-gray-900 py-2.5"
      } backdrop-blur-sm`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-14 lg:h-20">
          {/* Mobile: Hamburger Menu */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1.5 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className="h-8 w-8 rounded-full object-cover shadow-sm border-2 border-gray-700 transition-transform duration-300 hover:scale-105 md:h-10 md:w-10"
              />
              <span className="text-base lg:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300 tracking-tight">
                Sprint IT
              </span>
            </Link>
          </div>

          {/* Desktop: Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["Courses", "About", "Careers", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-gray-200 hover:text-white text-base font-medium transition-colors duration-5 relative group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
            ))}
          </div>

          {/* Desktop: Profile/Login */}
          <div className="hidden md:flex items-center space-x-6">
            {isLoggedIn && userRole ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-white text-base font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-full w-9 h-9 flex items-center justify-center shadow-md transition-all duration-200"
                  aria-label="User profile"
                >
                  {emailInitials}
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-3 w-52 bg-gray-800 rounded-lg shadow-xl z-50 overflow-hidden">
                    {dashboard && (
                      <Link
                        to={dashboard.path}
                        className="block px-4 py-3 text-gray-200 hover:bg-gray-700 hover:text-white transition-colors duration-200"
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
                      className="block w-full text-left px-4 py-3 text-gray-200 hover:bg-red-600 hover:text-white transition-colors duration-200"
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
                  className="text-gray-200 hover:text-white text-base font-medium transition-colors duration-200"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white px-5 py-2 rounded-full text-base font-medium shadow-md transition-all duration-200 hover:shadow-lg"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile: Button (Sign Up or Profile) */}
          <div className="md:hidden flex items-center">
            {isLoggedIn && userRole ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-white text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-full w-7 h-7 flex items-center justify-center shadow-sm transition-all duration-200"
                  aria-label="User profile"
                >
                  {emailInitials}
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-lg shadow-xl z-50 overflow-hidden">
                    {dashboard && (
                      <Link
                        to={dashboard.path}
                        className="block px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white transition-colors duration-200 text-sm"
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
                      className="block w-full text-left px-4 py-2 text-gray-200 hover:bg-red-600 hover:text-white transition-colors duration-200 text-sm"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/signup"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm transition-all duration-200"
              >
                Sign Up
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 transition-all duration-300`}>
        <div className="px-4 py-3 space-y-1">
          {["Courses", "About", "Careers", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="block px-4 py-2 text-gray-200 hover:text-white hover:bg-gray-800 rounded-lg text-sm font-medium transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className="border-t border-gray-800 pt-2">
            {isLoggedIn && userRole ? (
              <>
                {dashboard && (
                  <Link
                    to={dashboard.path}
                    className="block px-4 py-2 text-gray-200 hover:text-white hover:bg-gray-800 rounded-lg text-sm font-medium transition-colors duration-200"
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
                  className="block w-full text-left px-4 py-2 text-gray-200 hover:text-white hover:bg-red-600 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <div className="flex flex-col space-y-1">
                <Link
                  to="/signin"
                  className="block px-4 py-2 text-gray-200 hover:text-white hover:bg-gray-800 rounded-lg text-sm font-medium transition-colors duration-200 text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 rounded-lg text-sm font-medium text-center transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}