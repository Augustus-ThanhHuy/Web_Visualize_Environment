import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import React from 'react';
import './donut.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const Donut = () => {
    return(
        <div className='Donut_container'>
            <span>Donut chart</span>
            <div className='Donut_container'>

            </div>
        </div>
    )

}
export default Donut