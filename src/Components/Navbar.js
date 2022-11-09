import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from './anbako-mock-white.png';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }else {
            setButton(true)
        }
    };



    window.addEventListener('resize', showButton);

  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <img src={logo} alt="Logo Anbako" className='logo-Anbako'/>
             <i className="fab fa-typo3">
            </i>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}>
                </i>
            </div>  
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/overMij' className='nav-links' onClick={closeMobileMenu}>
                        Over mij
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/diensten' className='nav-links' onClick={closeMobileMenu}>
                        Diensten
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/emma_login' className='nav-links-mobile' onClick={closeMobileMenu}>
                        MyEmma login
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>MyEmma login</Button>}
        </div>
    </nav>
    </>
  )
}

export default Navbar