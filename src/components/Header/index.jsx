import PropTypes from 'prop-types';
import { BiSolidBellPlus } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";
import './styles.css';



const Header = ({ onOpenSideMenu }) => {
    return (
        <header className='header'>
            <div className='header-left'>
                <FaBars onClick={onOpenSideMenu} className='bars-icon' size={30} color='black' />
                <h1>Xvision</h1>
            </div>
            <div className='header-right'>
                <BiSolidBellPlus className='bell-icon' size={30} />
                <FiLogOut size={30} />
            </div>

        </header>
    );
};

Header.propTypes = {
    onOpenSideMenu: PropTypes.func
}

export default Header