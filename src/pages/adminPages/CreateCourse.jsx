// src/components/CreateCourse.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateCourse = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: '',
    level: '',
    students: 0,
    rating: 0.0,
    instructor: '',
    price: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'students' ? parseInt(value) : name === 'rating' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_ORIGIN}/api/courses/create-course`, formData,{withCredentials:true});
      alert(response.data.message);
      navigate('/');
    } catch (error) {
      alert(error.response?.data?.error || 'Failed to create course');
    }
  };

  return (
    <div>
      <h1>Create Course</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="duration" className="form-label">Duration</label>
          <input
            type="text"
            className="form-control"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="level" className="form-label">Level</label>
          <input
            type="text"
            className="form-control"
            id="level"
            name="level"
            value={formData.level}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="students" className="form-label">Students</label>
          <input
            type="number"
            className="form-control"
            id="students"
            name="students"
            value={formData.students}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">Rating</label>
          <input
            type="number"
            step="0.1"
            className="form-control"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="instructor" className="form-label">Instructor</label>
          <input
            type="text"
            className="form-control"
            id="instructor"
            name="instructor"
            value={formData.instructor}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image (CSS class)</label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
        <Link to="/" className="btn btn-secondary ms-2">Cancel</Link>
      </form>
    </div>
  );
};

export default CreateCourse;