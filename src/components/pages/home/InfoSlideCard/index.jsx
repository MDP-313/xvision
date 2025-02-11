import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import './styles.css';
import { IoMdSettings } from "react-icons/io";
import Preview from './Preview/index';
import TripsCard from './TripsCard';
import Events from './Events';
import { MdOutlineArrowBackIos } from "react-icons/md";


const InfoSlideCard = ({ selectedMarker, onSelectedTrip }) => {
    const [tab, setTab] = useState('preview');
    let content;


    useEffect(() => {
        if (selectedMarker) {
            setTab('preview')
        }
    }, [selectedMarker])

    switch (tab) {
        case 'preview':
            content = (
                <Preview data={selectedMarker} onSetTab={(e) => setTab(e)} />
            )
            break;
        case 'trips':
            content = (
                <TripsCard trips={selectedMarker?.trips} onSelectedTrip={onSelectedTrip} />
            )
            break;
        case 'events':
            content = (
                <Events data={selectedMarker?.events} />
            )
            break;
        default:
            break;
    }

    return (
        <div className={`infoSlideCard ${selectedMarker?.id ? "open" : ""}`}>
            {tab !== 'preview' && <button className='back-btn' onClick={() => setTab('preview')}>
                <MdOutlineArrowBackIos size={20} />
                Back
            </button>}
            <div className='infoSlideCard-header'>
                <h2>{selectedMarker?.make} {selectedMarker?.model}</h2>
                <IoMdSettings size={25} color='gray' />
            </div>
            {content}
        </div >
    )

}


InfoSlideCard.propTypes = {
    selectedMarker: PropTypes.object,
}


export default InfoSlideCard;