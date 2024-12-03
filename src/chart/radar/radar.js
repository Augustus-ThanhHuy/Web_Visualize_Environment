import { Chart as ChartJS, CategoryScale,Filler, LinearScale, PointElement, LineElement, RadialLinearScale, Title, Tooltip, Legend } from 'chart.js';
import React, { useEffect, useState } from 'react';
import './radar.css';
import { Radar as RadarChart } from 'react-chartjs-2';


ChartJS.register(CategoryScale, LinearScale,Filler, PointElement, LineElement, RadialLinearScale, Title, Tooltip, Legend);

const Radar = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your PHP API
    fetch('http://localhost/doan2.php') // Replace with your actual API URL
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
    return (
        <div className='Radar_container'>
            <span>Radar chart</span>
            <div className='Radar_content'>
                <RadarChart 
                    data={{
                        labels: data.map((entry) => entry.Month),
                        datasets: [
                            {
                                label: 'Temperature',
                                data: data.map((entry) =>   entry.Temperature),
                                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                borderColor: 'rgba(255, 99, 132, 1)',
                                borderWidth: 1,
                                fill: true,
                            },
                            {
                                label: 'Humidity',
                                data: data.map((entry) => entry.Humidity),
                                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                                borderColor: 'rgba(54, 162, 235, 1)',
                                borderWidth: 1,
                                fill: true,
                            },
                            {
                                label: 'Dust',
                                data: data.map((entry) => entry.Dust),
                                backgroundColor: 'rgba(54, 11, 235, 0.2)',
                                borderColor: 'rgba(54, 11, 235, 1)',
                                borderWidth: 1,
                                fill: true,
                            },
                        ],
                    }}
                   options ={ {
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Radar Chart Example',
                        },
                    },
                }}
                />
            </div>
        </div>
    );
};

export default Radar;
