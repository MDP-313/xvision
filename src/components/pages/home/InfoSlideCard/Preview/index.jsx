import { FaCircleExclamation, FaClockRotateLeft } from "react-icons/fa6";
import PropTypes from 'prop-types';
import './styles.css';

const Preview = ({ data, onSetTab }) => {


    return (
        <div >
            <div className='errorCodes-container'>
                {data?.engine_errors.map((error, index) => (
                    <div key={index}>
                        <div className='error-container'>
                            <div>
                                <FaCircleExclamation color='orange' size={16} />
                            </div>
                            <p >
                                {error?.code} - {error?.description}
                            </p>
                        </div>
                    </div>


                ))}
            </div>
            <div className='icons-container'>
                <div className='icon-container' onClick={() => data?.trips && onSetTab('trips')}>
                    <FaClockRotateLeft size={30} style={{ marginRight: '8px' }} color='#30297d' />
                    <h4>Trips</h4>
                </div>
                <div className='icon-container' onClick={() => data?.trips && onSetTab('events')}>
                    <FaCircleExclamation size={30} style={{ marginRight: '8px' }} color='#30297d' />
                    <h4>Events</h4>
                </div>
            </div>
            <div className='car-data-container'>
                <p>Last Contact: {data?.last_contact} minutes ago</p>
                <p>Status: {data?.status}</p>
                <p>Ignition: {data?.ignition}</p>
                <p>Battery Voltage: {data?.battery_voltage} V</p>
                <p>Fuel Level: {data?.fuel_level}%</p>
                <p>VIN: {data?.vin}</p>

            </div>
        </div>
    )
}

Preview.propTypes = {
    data: PropTypes.object,
    onSetTab: PropTypes.func
}

export default Preview;