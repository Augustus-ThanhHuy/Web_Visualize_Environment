import { memo } from 'react';
import './index.css'; 

import Sidebar from '../sidebar/sidebar';
import Sensor from '../sensor/sensor';

const MasterLayout = ({ children, ...props }) => {
    return (
        <div className="master-layout" {...props}>
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="content">
                <div className='content__sensor'>
                     <Sensor />
                </div>
                <div className='content__children'>
                     {children}

                </div>
            </div>
        </div>
    );
};

export default memo(MasterLayout);
