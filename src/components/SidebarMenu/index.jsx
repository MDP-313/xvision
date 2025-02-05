import { useState } from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import { MdAddLocation, MdDashboard } from "react-icons/md";
import { PiMonitorPlayBold } from "react-icons/pi";
import { FaExclamationCircle, FaChartBar } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";




const SidebarMenu = ({ open }) => {

    const [hovered, setHovered] = useState(false);
    const isSidebarOpen = open || hovered;


    return (
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
            <ul>
                <li onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}>
                    <div>
                        <MdAddLocation size={30} color='black' />
                    </div>
                    <h4 className='item-title'>Location</h4>

                </li>
                <li onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}>
                    <div>
                        <MdDashboard size={30} color='black' /></div>
                    <h4 className='item-title'>Dashboard</h4>

                </li>
                <li onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}>
                    <div>
                        <PiMonitorPlayBold size={30} color='black' />
                    </div>
                    <h4 className='item-title'>Media</h4>
                </li>
                <li onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}>
                    <div>
                        <FaExclamationCircle size={30} color='black' />
                    </div>
                    <h4 className='item-title'>Events</h4>
                </li>
                <li onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}>
                    <div>
                        <FaChartBar size={30} color='black' />
                    </div>
                    <h4 className='item-title'>Reports</h4>
                </li>
                <li className='settings' onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}>
                    <div>
                        <IoMdSettings size={30} color='black' />
                    </div>
                    <h4>Settings</h4>
                </li>

            </ul>

        </div>
    )
}


SidebarMenu.propTypes = {
    open: PropTypes.bool
}



export default SidebarMenu;