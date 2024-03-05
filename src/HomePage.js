import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [timezone, setTimezone] = useState('Europe/Prague');

  useEffect(() => {
    const fetchData = async () => {
    
      const response = await fetch(`https://worldtimeapi.org/api/timezone/${timezone}`);
      const data = await response.json();


      setCurrentTime(data.utc_datetime);
    };

    fetchData();
  }, [timezone]);

  const handleTimeZoneChange = (event) => {
  
    setTimezone(event.target.value);
  };

  return (
    <div>
      <p>Hodnota datetime: {timezone}: {currentTime}</p>
      
      <label>Vyberte zónu: </label>
      <select value={timezone} onChange={handleTimeZoneChange}>
        <option value="America/New_York">New York</option>
        <option value="Europe/London">Londýn</option>
        <option value="Europe/Moscow">Moskva</option>
        <option value="Europe/Prague">Praha</option>
        <option value="Asia/Hong_Kong">Hong Kong</option>
        <option value="Asia/Jerusalem">Jeruzalém</option>
      </select>

    </div>
  );
};

export default HomePage;
