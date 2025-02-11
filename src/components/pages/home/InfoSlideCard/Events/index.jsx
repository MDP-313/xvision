import PropTypes from 'prop-types';
import { FaCircleExclamation, } from "react-icons/fa6";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { MdOutlineOndemandVideo } from "react-icons/md";
import './styles.css';

const Events = ({ data }) => {

    return (
        <>
            <div className='event-card-header'>
                <FaCircleExclamation size={30} color='#30297d' />
                <h4 style={{ marginLeft: '12px' }}>Events</h4>
            </div>
            <div className='events-date-picker'>
                <BiSolidLeftArrow color='#30297d' />
                <p>02/12/2025</p>
                <BiSolidRightArrow color='#30297d' />
            </div>
            {data?.map((event) => (
                <div key={event.id} className='event-container'>
                    <div className='label-shadow'>
                        <h4>Brake</h4>
                    </div>
                    <p>04:13:26</p>
                    <MdOutlineOndemandVideo size={25} color='green' />
                </div>
            ))}
        </>

    )

}

Events.propTypes = {
    data: PropTypes.array
}

export default Events;