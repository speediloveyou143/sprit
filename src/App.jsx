import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import AppLayout from "./layouts/AppLayout";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/userPages/Home";
import AdminDashboard from "./pages/adminPages/AdminDashboard";
import StudentDashboard from "./pages/studentPages/StudentDashboard";
import Pricing from "./pages/userPages/Pricing";
import About from "./pages/userPages/About";
import Contact from "./pages/userPages/Contact";
import Careers from "./pages/userPages/Careers";
import Courses from "./pages/userPages/Courses";
import CourseList from "./pages/adminPages/CourseList";
import UpdateCourse from "./pages/adminPages/UpdateCourse";
import CreateCourse from "./pages/adminPages/CreateCourse";


// Simple Page Not Found component
const NotFound = () => (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h2>404 - Page Not Found</h2>
    <p>You don't have access to this page.</p>
  </div>
);

export default function App() {
  const [userRole, setUserRole] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = Cookies.get('user_id');
      console.log(userId) // Get user_id from cookies
      if (userId) {
        try {
          const response = await axios.get(`${import.meta.env.VITE_BACKEND_ORIGIN}/api/users/user/${userId}`, {
            withCredentials: true, // Include cookies in the request
          });
          setUserRole(response.data.user.role);
          setUserEmail(response.data.user.email);
          setUserId(response.data.user.id);
        } catch (error) {
          console.error('Error fetching user data:', error);
          setUserRole(null);
          setUserEmail(null);
          setUserId(null);
        }
      }
      setLoading(false);
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout userId={userId} userRole={userRole} userEmail={userEmail} />}>
          <Route index element={<Home />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/careers" element={<Careers />} />
        </Route>

        <Route
          path="/dashboard/*"
          element={
            userRole === 'admin' ? (
              <AdminDashboard />
            ) : (
              <NotFound />
            )
          }
        >
          <Route path="create-course" element={<CreateCourse/>} />
          <Route path="update-course/:id" element={<UpdateCourse/>} />
          <Route path="all-courses" element={<CourseList />} />
        </Route>

        <Route
          path="/student-dashboard/*"
          element={
            userRole === 'user' ? (
              <StudentAttendance/>
            ) : (
              <NotFound/>
            )
          }
        >
          {/* <Route path="student-view-attendance" element={<StudentAttendance />} /> */}
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}