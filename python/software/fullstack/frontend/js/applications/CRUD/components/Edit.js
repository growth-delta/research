import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Edit = ({ respondentId }) => {
  const [formData, setFormData] = useState({
    emailAddress: '',
    age: '',
    gender: '',
    Q1: '',
    Q2: '',
    Q3: ''
  });

  useEffect(() => {
    fetchSurveyData();
  }, [respondentId]);

  const fetchSurveyData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/surveys/${respondentId}`);
      const surveyData = response.data;

      setFormData(surveyData);
    } catch (error) {
      console.error('Error fetching survey data:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:8000/api/surveys/${respondentId}`, formData);
      alert('Data updated successfully!');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center">Edit</h1>
      <div className="max-w-md mx-auto p-10">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="emailAddress" className="text-sm mb-2 block">
              Email Address
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="text-sm mb-2 block">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="text-sm mb-2 block">
              Gender
            </label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Q1" className="text-sm mb-2 block">
              Q1
            </label>
            <input
              type="text"
              id="Q1"
              name="Q1"
              value={formData.Q1}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Q2" className="text-sm mb-2 block">
              Q2
            </label>
            <input
              type="text"
              id="Q2"
              name="Q2"
              value={formData.Q2}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Q3" className="text-sm mb-2 block">
              Q3
            </label>
            <input
              type="text"
              id="Q3"
              name="Q3"
              value={formData.Q3}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Edit;
