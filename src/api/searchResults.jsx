import { useEffect, useState } from 'react';
import yelp from './yelpAPI';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const searchApi = async (term, locationTerm, long, lati) => {
    try {
      const response = await yelp.get('/search', locationTerm ? {
        params: {
          limit: 50,
          term,
          location: locationTerm, // need to set users location later
        },
      }
        : {
          params: {
            limit: 50,
            term,
            longitude: long,
            latitude: lati, // need to set users location later
          },
        });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMsg('Some thing went wrong! :(');
    }
  };

  useEffect(() => {
    searchApi(null, 'new york');
  }, []);

  return [searchApi, results, errorMsg];
};
