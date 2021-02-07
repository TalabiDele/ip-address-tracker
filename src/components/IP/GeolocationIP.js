import React, { useState, useEffect } from "react";
import axios from "axios";

const GeolocationIP = () => {
  console.log('working')
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, steData] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL).then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <div>

    </div>
  )
};

export default GeolocationIP;
