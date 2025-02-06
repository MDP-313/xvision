import { FaCar } from 'react-icons/fa6';
import PropTypes from 'prop-types';
import './styles.css';

const ItemCard = ({ item, selected, onSelect }) => {

    return (
        <div
            onClick={() => onSelect(item)}
            className={`item-card-container ${selected ? 'selected' : ''}`}
        >
            <div>
                <h3>
                    {item?.make} {item?.model}
                </h3>
                <p>{item?.address}</p>
            </div>
            <div>
                <p>15 min ago</p>
                <FaCar />
            </div>
        </div>
    );
};

ItemCard.propTypes = {
    item: PropTypes.object,
    selected: PropTypes.bool,
    onSelect: PropTypes.func,
};

export default ItemCard;
