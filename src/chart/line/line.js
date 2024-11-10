import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import React from 'react';
import './line.css';
import TempData from '../bar/data/Temp.json';
import HumData from '../bar/data/Hum.json';
import PerData from '../bar/data/Per.json';

// Đăng ký các thành phần cho biểu đồ Line
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
    
    return (
        <div className='Line_container'>
            <span>Line chart</span>
            <div className='Line_content'>
                <Line
                    data={{
                        labels: TempData.map((data) => data.Month),
                        datasets: [
                            {
                                label: "Temperature",
                                data: TempData.map((data) => data.value),
                                backgroundColor: 'rgba(255, 99, 132, 0.7)', 
                                borderColor: 'rgba(255, 99, 132, 1)',
                                fill: false, // không tô màu dưới đường
                                tension: 0.1 // làm mịn các đường trong biểu đồ
                            },
                            {
                                label: "Humidity",
                                data: HumData.map((data) => data.value),
                                backgroundColor: 'rgba(54, 162, 235, 0.7)', 
                                borderColor: 'rgba(54, 162, 235, 1)',
                                fill: false, // không tô màu dưới đường
                                tension: 0.1 // làm mịn các đường trong biểu đồ
                            },
                            {
                                label: "Perssure",
                                data: PerData.map((data) => data.value),
                                backgroundColor: 'rgba(54, 11, 235, 0.7)', 
                                borderColor: 'rgba(54, 11, 235, 1)',
                                fill: false, // không tô màu dưới đường
                                tension: 0.1 // làm mịn các đường trong biểu đồ
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
}

export default LineChart;
