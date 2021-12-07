import { useEffect, useState } from 'react';
import yelp from './yelpAPI';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const searchApi = async (term) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'new york', // need to set users location later
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMsg('Some thing went wrong! :(');
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMsg];
};
