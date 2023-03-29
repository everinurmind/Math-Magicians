import { useState, useEffect } from 'react';
import './FetchApi.css';

const API_URL = 'https://api.api-ninjas.com/v1/quotes';
const API_ID = {
  'Content-Type': 'application/json',
  'X-Api-Key': 'uLOd2FCqO1Un8QPxno1CMQ==a8rOVOftkTKXho7m',
};

function FetchQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL, { headers: API_ID });
        const data = await response.json();
        setQuotes(data);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (hasError) {
    return <p>Something went wrong. Please try again later.</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const { quote, author } = quotes[0];

  return (
    <div className="quotes">
      <p className="quote">
        &#34;
        {quote}
        &#34;
      </p>
      <p className="author">
        {author}
        {' '}
      </p>
    </div>
  );
}

export default FetchQuotes;
