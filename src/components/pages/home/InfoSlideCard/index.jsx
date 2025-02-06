import PropTypes from 'prop-types';
import { useState } from 'react';
import './styles.css';
import { IoMdSettings } from "react-icons/io";
import { FaCircleExclamation, FaClockRotateLeft } from "react-icons/fa6";


const InfoSlideCard = ({ selectedMarker, onSelectedTrip }) => {
    const [showContent, setShowContent] = useState('preview');
    let content;

    console.log(selectedMarker?.trips)

    switch (showContent) {
        case 'trips':
            content = (<div>
                {selectedMarker?.trips?.map((trip, index) => (
                    <div onClick={() => onSelectedTrip(trip)} key={index} style={{ padding: '20px' }}>
                        <h4>Start: {trip.start}</h4>
                        <h4>End: {trip.end}</h4>
                        <h4>Distance: {trip.distance} km</h4>
                        <h4>Duration: {trip.duration} minutes</h4>
                    </div>
                ))}
            </div>)

            break;
        case 'preview':
            content = (
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
                    <div className='infoSlideCard-icons-container'>
                        <div className='infoSlideCard-icon-container' onClick={() => selectedMarker?.trips && setShowContent('trips')}>
                            <FaClockRotateLeft size={30} style={{ marginRight: '8px' }} />
                            <h4>Trips</h4>
                        </div>
                        <div className='infoSlideCard-icon-container'>
                            <FaCircleExclamation size={30} style={{ marginRight: '8px' }} />
                            <h4>Events</h4>
                        </div>
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
            )
            break;
        case 'Idle':
            // Handle the 'Idle' status
            break;
        default:
            // Handle unknown status
            break;
    }




    return (
        <div className={`infoSlideCard ${selectedMarker?.id ? "open" : ""}`}>
            {content}
        </div>
    )

}


InfoSlideCard.propTypes = {
    selectedMarker: PropTypes.object,
}


export default InfoSlideCard;