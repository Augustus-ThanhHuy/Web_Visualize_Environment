import CardDust from './CardDust/Card';
import CardHumidity from './CardHumidity/Card';
import CardPressure from './CardPressure/Card';
import CardTemperature from './CardTemperature/Card';
import './index.css';
import React from 'react';

const Sensor = () => {

  return (
   <div>
    <div className='sensor__content'>
      Sensor
    </div>
     <div className='sensor__card'>
      <div className='sensor__card__colum'>
       <CardTemperature/>
       <CardHumidity/>
      </div>
      <CardDust/>
       <CardPressure/>
    </div>
   </div>
  );
};

export default Sensor;
