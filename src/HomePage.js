import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://worldtimeapi.org/api/timezone/Europe/Prague');
      const data = await response.json();

      setCurrentTime(data.utc_datetime);
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>Hodnota datetime: {currentTime}</p>
    </div>
  );
};


export default HomePage;
