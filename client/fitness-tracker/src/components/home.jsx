


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = ({ data }) => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/exercise/');
        setExercises(response.data);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Exercise List</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {exercises.map((exercise) => (
          <li
            key={exercise.id}
            className="p-4 rounded-md shadow-md"
            style={{
              backgroundImage: `url('${exercise.image_link}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <strong className="block text-xl mb-2">{exercise.name}</strong>
            <p className="text-gray-600">{exercise.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;


