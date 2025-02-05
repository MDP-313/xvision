import { useState } from 'react';

import { Outlet } from 'react-router-dom';
import { Header, SidebarMenu } from '../../components';
import './styles.css';


const Root = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <div className='wrapper'>
                <Header onOpenSideMenu={() => setIsMenuOpen(!isMenuOpen)} />
                <main>
                    <SidebarMenu open={isMenuOpen} />
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default Root;