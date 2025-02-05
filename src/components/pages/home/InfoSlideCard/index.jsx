import PropTypes from 'prop-types';
import './styles.css';
import { IoMdSettings } from "react-icons/io";


const InfoSlideCard = ({ selectedMarker }) => {


    return (
        <div className={`infoSlideCard ${selectedMarker?.id ? "open" : ""}`}>
            <div style={{ padding: '10px' }}>
                <div className='infoSlideCard-header'>
                    <h3>{selectedMarker?.make} {selectedMarker?.model}</h3>
                    <IoMdSettings size={20} color='black' />
                </div>

                <div className='errorCodes-container'>
                    {selectedMarker?.engine_errors.map((error, index) => (
                        <div key={index}>{error?.code} - {error?.description}</div>
                    ))}
                </div>
                <div className='details-container'>
                    <p>Last Contact: {selectedMarker?.last_contact} minutes ago</p>
                    <p>Status: {selectedMarker?.status}</p>
                    <p>Ignition: {selectedMarker?.ignition}</p>
                    <p>Battery Voltage: {selectedMarker?.battery_voltage} V</p>
                    <p>Fuel Level: {selectedMarker?.fuel_level}%</p>
                    <p>VIN: {selectedMarker?.vin}</p>
                </div>
            </div>
        </div>
    )

}


InfoSlideCard.propTypes = {
    selectedMarker: PropTypes.object,
}


export default InfoSlideCard;