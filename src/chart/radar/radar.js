import { Chart as ChartJS, CategoryScale,Filler, LinearScale, PointElement, LineElement, RadialLinearScale, Title, Tooltip, Legend } from 'chart.js';
import React from 'react';
import './radar.css';
import { Radar as RadarChart } from 'react-chartjs-2';
import TempData from '../bar/data/Temp.json';
import HumData from '../bar/data/Hum.json';
import PerData from '../bar/data/Per.json';

ChartJS.register(CategoryScale, LinearScale,Filler, PointElement, LineElement, RadialLinearScale, Title, Tooltip, Legend);

 

const Radar = () => {
    return (
        <div className='Radar_container'>
            <span>Radar chart</span>
            <div className='Radar_content'>
                <RadarChart 
                    data={{
                        labels: TempData.map((data) => data.Month),
                        datasets: [
                            {
                                label: 'Temperature',
                                data: TempData.map((data) => data.value),
                                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                borderColor: 'rgba(255, 99, 132, 1)',
                                borderWidth: 1,
                                fill: true,
                            },
                            {
                                label: 'Humidity',
                                data: HumData.map((data) => data.value),
                                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                                borderColor: 'rgba(54, 162, 235, 1)',
                                borderWidth: 1,
                                fill: true,
                            },
                            {
                                label: 'Pressure',
                                data: PerData.map((data) => data.value),
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
