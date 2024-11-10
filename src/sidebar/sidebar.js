import './sidebar.css';
import Logo from '../img/logo.jpg';
import React from 'react';
import { BsBarChart } from "react-icons/bs";
import { AiOutlineLineChart } from "react-icons/ai";
import { Link, useLocation  } from 'react-router-dom'; 
import { AiOutlinePieChart } from "react-icons/ai";
import { AiOutlineRadarChart } from "react-icons/ai";
const Sidebar = () =>{
  const location = useLocation();
  return(
    <div ClassName='sidebars'>
      <div className='sidebars_child'>
        <div className='logo'>
        <img src={Logo} alt='' height={64} width={64}  />
        <span>
          <span>Visual</span>
            ization
          </span>
      </div>

      {/* Menu */}
      <div className='menu'>
        <Link to="/" className={`menuItem ${location.pathname === '/' ? 'active' : ''}`}> 
            <div>
              <BsBarChart />
            </div>
            <span>BarGrap</span>
          </Link>
        <Link to="/line" className={`menuItem ${location.pathname === '/line' ? 'active' : ''}`}> 
            <div>
              <AiOutlineLineChart />
            </div>
            <span>LineGrap</span>
          </Link>
        <Link to="/donut" className={`menuItem ${location.pathname === '/donut' ? 'active' : ''}`}> 
            <div>
              <AiOutlinePieChart />
            </div>
            <span>DonutGrap</span>
          </Link>
        <Link to="/radar" className={`menuItem ${location.pathname === '/radar' ? 'active' : ''}`}> 
            <div>
              <AiOutlineRadarChart />
            </div>
            <span>RadarGrap</span>
          </Link>
          <div></div>
      </div>
        </div>
    </div>
  )
}

export default Sidebar;
