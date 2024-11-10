import React from 'react';
import './Card.css';
import { WiDust } from "react-icons/wi";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const CardDust = () => {
    const value = 40; 
    const text = '18 mg/m3';

    const styles = buildStyles({
        width: 100,
        height: 100,
        strokeLinecap: 'butt',
        textSize: '18px',
        textColor: '#353E40', 
        trailColor: '#EBE9F7', 
        backgroundColor: '#939185',
        pathColor: value > 50 ? '#CC2B52' : '#C0B8B6', 
    });
  return <div className='Card_dust'>
         <div className='Card__icon_dust'>
                <WiDust />
            </div>      
            <div className='Card__text'>
                <span>Dust</span>
            </div>
            <div className='Cirular' >
                <CircularProgressbar value={value}
                    text={text}
                    styles={styles}/>
            </div>
           
        </div>;
};

export default CardDust;
