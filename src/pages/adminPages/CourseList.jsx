// src/components/CourseList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_ORIGIN}/api/courses/get-all-courses`);
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
      alert('Failed to fetch courses');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      try {
        const response = await axios.delete(`${import.meta.env.VITE_BACKEND_ORIGIN}/api/courses/delete-course/${id}`);
        alert(response.data.message);
        fetchCourses();
      } catch (error) {
        alert(error.response?.data?.error || 'Failed to delete course');
      }
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      <Link to="/create" className="btn btn-primary mb-3">Create New Course</Link>
      <div className="row">
        {courses.map((course) => (
          <div key={course.id} className="col-md-4 mb-3">
            <div className="card">
              <div className={`card-body ${course.image}`}>
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <p><strong>Duration:</strong> {course.duration}</p>
                <p><strong>Level:</strong> {course.level}</p>
                <p><strong>Students:</strong> {course.students}</p>
                <p><strong>Rating:</strong> {course.rating}</p>
                <p><strong>Instructor:</strong> {course.instructor}</p>
                <p><strong>Price:</strong> {course.price}</p>
                <Link to={`/dashboard/update-course/${course.id}`} className="btn btn-warning me-2">Update</Link>
                <button className="btn btn-danger" onClick={() => handleDelete(course.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;