import React, { useEffect, useState } from "react";

export default function WeatherForecast() {
  const [isLoading, setLoadingStatus] = useState(true);
  const [forecasts, setForecasts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("weatherforecast");
      const data = await response.json();
      setForecasts(data);
      setLoadingStatus(false);
    })();
  }, []);

  if (isLoading)
    return (
      <p>
        <em>Loading...</em>
      </p>
    );

  return (
    <div>
      <h1 id="tabelLabel">Weather forecast</h1>
      <p>This component demonstrates fetching data from the server.</p>

      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((forecast) => (
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
