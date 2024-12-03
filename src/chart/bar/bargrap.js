import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import React from 'react';
import { useState, useEffect } from 'react';
import './bar.css';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGrap = () => {

  const [tempData, setTempData] = useState([]); // State để lưu dữ liệu nhiệt độ
    const maxTemperature = 300; // Giá trị tối đa cho nhiệt độ

    useEffect(() => {
        // Khởi tạo dữ liệu nhiệt độ với giá trị ban đầu
        const initialData = TempData.map((item) => ({
            ...item,
            value: 0, // Giá trị khởi đầu là 0
        }));

        setTempData(initialData);

        // Tạo interval để cập nhật giá trị mỗi giây
        const interval = setInterval(() => {
            setTempData((prevData) =>
                prevData.map((item) => ({
                    ...item,
                    value: Math.min(item.value + 10, maxTemperature), // Tăng giá trị lên 10 nhưng không vượt quá maxTemperature
                }))
            );
        }, 1000); // Cập nhật mỗi giây

        // Dọn dẹp interval khi component unmount
        return () => clearInterval(interval);
    }, []);

  return (
    <div className='Bar_container'>
      <span>Bar Grap</span>
      <div className='Bar_content'>
       <Bar
          data={{
            labels: TempData.map((data) => data.Month),
            datasets: [
              {
                label: 'Temperature',
                data: tempData.map((data) => data.value),
                backgroundColor: 'rgba(255, 99, 132, 0.7)', 
                borderColor: 'rgba(255, 99, 132, 1)',       
                borderWidth: 1,                             
                barThickness: 25,                          
                borderRadius: 5,
              },
              {
                label: 'Humidity',
                data: HumData.map((data) => data.value),
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                barThickness: 25,
                borderRadius: 5,
              },
              {
                label: 'Persure',
                data: PerData.map((data) => data.value),
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
