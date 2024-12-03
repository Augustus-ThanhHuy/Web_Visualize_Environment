import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import React, { useState, useEffect } from 'react';
import './line.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // Fetch data from your PHP API
    fetch('http://localhost/doan2.php') // Replace with your actual API URL
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='Line_container'>
      <span>Line chart</span>
      <div className='Line_content'>
        <Line
          data={{
            labels: data.map((entry) => entry.ThoiGian), // Replace with the actual label field in your data
            datasets: [
              {
                label: "Temperature",
                data: data.map((entry) => entry.Temperature),
                backgroundColor: 'rgba(255, 99, 132, 0.7)',
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: false,
                tension: 0.1,
              },
              {
                label: "Humidity",
                data: data.map((entry) => entry.Humidity),
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                borderColor: 'rgba(54, 162, 235, 1)',
                fill: false,
                tension: 0.1,
              },
              {
                label: "Dust",
                data: data.map((entry) => entry.Dust),
                backgroundColor: 'rgba(54, 11, 235, 0.7)',
                borderColor: 'rgba(54, 11, 235, 1)',
                fill: false,
                tension: 0.1,
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: 'top',
              },
              title: {
                display: true,
                text: 'Line Chart',
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default LineChart;
