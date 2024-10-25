import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLocation, setDestinations } from '../features/tripSlice';
import axios from 'axios';

const InputForm = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLocation(inputValue));

    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: `Suggest travel destinations based on: ${inputValue}` }],
      }, {
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`, // Asegúrate de que esta variable está definida
          'Content-Type': 'application/json',
        },
      });

      const destinationsText = response.data.choices[0].message.content;
      const destinationsArray = destinationsText.split(',').map(dest => dest.trim());

      // Geocoding Logic Here

      setInputValue('');
    } catch (error) {
      console.error("Error fetching data from OpenAI:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Where do you want to travel?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        aria-label="Travel destination input"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;
