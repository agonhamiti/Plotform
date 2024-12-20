import React, { useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner'; // Import the loading spinner

const TeamModal = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay of 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  if (loading) {
    return <LoadingSpinner />; // Show the loading spinner
  }

  return (
    <div>
      <h1>Team Modal Content</h1>
      {/* Your modal content goes here */}
    </div>
  );
};

export default TeamModal;
