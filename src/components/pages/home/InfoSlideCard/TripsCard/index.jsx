import PropTypes from 'prop-types';
import { FaClockRotateLeft } from "react-icons/fa6";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import './styles.css';


const TripsCard = ({ trips, onSelectedTrip }) => {

    return (
        <>
            <div className='trip-card-header'>
                <FaClockRotateLeft size={30} style={{ marginRight: '8px' }} color='#30297d' />
                <h4>Trips</h4>
            </div>
            <div className='date-picker'>
                <BiSolidLeftArrow color='#30297d' />
                <p>02/12/2025</p>
                <BiSolidRightArrow color='#30297d' />
            </div>
            {trips?.map((trip) => (
                <div key={trip.id} className='trip-container' onClick={() => onSelectedTrip(trip)}>
                    <div className='flex-row' >
                        <p>Start: {trip?.start}</p>
                        <p>End: {trip?.end}</p>
                    </div>
                    <div className='flex-row'>
                        <p>Distance: {trip.distance}km</p>
                        <p>Duration: {trip.duration}m</p>
                    </div>
                </div>
            ))}
        </>
    )
}



TripsCard.propTypes = {
    trips: PropTypes.object,
    onSelectedTrip: PropTypes.func
};




export default TripsCard;