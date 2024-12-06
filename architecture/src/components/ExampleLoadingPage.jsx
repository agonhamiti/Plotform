import React, { useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner'; // Import the loading spinner

const ExampleLoadingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay of 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  if (loading) {
    return <LoadingSpinner />; // Show the loading spinner
  }

  return (
    <div>
      <h1>Example Loading Page Content</h1>
      <p>This content is displayed after the loading spinner.</p>
    </div>
  );
};

export default ExampleLoadingPage;
