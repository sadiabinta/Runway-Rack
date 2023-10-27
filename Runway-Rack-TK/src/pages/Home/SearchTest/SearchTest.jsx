import React, { useEffect, useState } from 'react';
import { app } from '../../../firebase/firebase.config';
import { getAuth } from 'firebase/auth';

const auth = getAuth(app);
const SearchTest = ({ inputId, placeholder }) => {
    const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);
  const [autocompleteService, setAutocompleteService] = useState(null);

  useEffect(() => {
    let active = true;

    const initAutocompleteService = () => {
      if (window.google) {
        setAutocompleteService(new window.google.maps.places.AutocompleteService());
      }
    };

    if (!autocompleteService) {
      initAutocompleteService();
    }

    if (inputValue === '') {
      setOptions(value ? [value] : []);
      return () => { active = false; };
    }

    const fetch = (request, callback) => {
      autocompleteService.getPlacePredictions(request, callback);
    };

    fetch({ input: inputValue }, (results) => {
      if (active) {
        setOptions(value ? [value, ...results] : results);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, autocompleteService]);

  useEffect(() => {
    if (typeof window !== 'undefined' && !document.querySelector('#google-maps')) {
      const script = document.createElement('script');
      script.async = true;
      script.id = 'google-maps';
      script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_googleApiKey}&libraries=places`;
      script.onload = () => {
        // Once the Google Maps API script has loaded, initialize the autocompleteService
        initAutocompleteService();
      };
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div>
      <input
        type="text"
        id={inputId}
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ul>
        {options.map((option, index) => (
          <li key={index}>{option.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchTest;