import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import InputForm from './components/InputForm';
import MapDisplay from './components/MapDisplay';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Travel Destination Finder</h1>
        <InputForm />
        <MapDisplay />
      </div>
    </Provider>
  );
};

export default App;
