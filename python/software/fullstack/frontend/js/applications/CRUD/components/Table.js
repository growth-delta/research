import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SurveyTable = () => {
  const [surveys, setSurveys] = useState([]);
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    fetchSurveys();
    fetchCsrfToken();
  }, []);

  const fetchSurveys = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/surveys/');
      setSurveys(response.data);
    } catch (error) {
      console.error('Error retrieving surveys:', error);
    }
  };

  const fetchCsrfToken = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/csrf-token/');
      setCsrfToken(response.data.csrfToken);
      axios.defaults.headers.common['X-CSRFToken'] = response.data.csrfToken;
    } catch (error) {
      console.error('Error retrieving CSRF token:', error);
    }
  };

  const deleteSurvey = async (respondentId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/surveys/${respondentId}/`);
      fetchSurveys();
    } catch (error) {
      console.error('Error deleting survey:', error);
    }
  };

  return (
    <div className="overflow-auto p-10">
      <table className="sortable table table-compact table-zebra w-full">
        <thead>
          <tr>
            <th>Respondent ID</th>
            <th>Email Address</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Q1</th>
            <th>Q2</th>
            <th>Q3</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(surveys) && surveys.length > 0 ? (
            surveys.map((survey) => (
              <tr className="hover" key={survey.respondentId}>
                <td>{survey.respondentId}</td>
                <td>{survey.emailAddress}</td>
                <td>{survey.age}</td>
                <td>{survey.gender}</td>
                <td>{survey.Q1}</td>
                <td>{survey.Q2}</td>
                <td>{survey.Q3}</td>
                <td>
                  <Link to={`/edit/${survey.respondentId}`} className='btn btn-ghost font-bold'>
                    Edit
                  </Link>
                </td>
                <td>
                  <button className='btn btn-error text-white font-bold' onClick={() => deleteSurvey(survey.respondentId)}>
                    Delete
                  </button>
                  {/* Add an Edit button here with appropriate functionality */}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8}>No surveys found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SurveyTable;
