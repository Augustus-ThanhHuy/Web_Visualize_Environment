import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import React from 'react';
import { useState, useEffect } from 'react';
import './bar.css';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGrap = () => {

  const [data, setData] = useState([]);

  useEffect(() =>{
    fetch('http://localhost/doan2.php')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='Bar_container'>
      <span>Bar Grap</span>
      <div className='Bar_content'>
       <Bar
          data={{
            labels: data.map((entry) => entry.ThoiGian),
            datasets: [
              {
                label: 'Temperature',
                data: data.map((entry) => entry.Temperature),
                backgroundColor: 'rgba(255, 99, 132, 0.7)', 
                borderColor: 'rgba(255, 99, 132, 1)',       
                borderWidth: 1,                             
                barThickness: 25,                          
                borderRadius: 5,
              },
              {
                label: 'Humidity',
                data: data.map((entry) => entry.Humidity),
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                barThickness: 25,
                borderRadius: 5,
              },
              {
                label: 'Dust',
                data: data.map((entry) => entry.Dust),
                backgroundColor: 'rgba(54, 11, 235, 0.7)',
                borderColor: 'rgba(54, 11, 235, 1)',
                borderWidth: 1,
                barThickness: 25,
                borderRadius: 5,
              },
            ],
          }}
          options={{
            responsive: false,
            maintainAspectRatio: false,
            scales: {
              x: {
                type: 'category',
                ticks: {
                  font: {
                    size: 14,
                    weight: 'bold',     
                  },
                  color: '#333',      
                },
              },
              y: {
                beginAtZero: true,
                ticks: {
                  font: {
                    size: 14,
                    weight: 'bold',     
                  },
                  color: '#333',       
                },
              },
            },
            plugins: {
              legend: {
                labels: {
                  font: {
                    size: 16,
                    weight: 'bold',     
                  },
                  color: '#222',        
                },
              },
            },
          }}
          width={700}
          height={300}
        />

      </div>
    </div>
  );
};

export default BarGrap;
