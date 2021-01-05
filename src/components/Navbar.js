import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import { MdFingerprint } from 'react-icons/md'
import { FiNavigation } from 'react-icons/fi'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.css';
import { IconContext } from 'react-icons/lib'

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color:'#fff'}}>
           <div className="navbar">
               <div className="navbar-container container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        <FiNavigation className="navbar-icon"/>
                        C4
                    </Link>
                    <div className="menu-icon" onClick={handleClick} >
                        {click ? <FaTimes/> : <FaBars/>}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                         <li className="nav-item">
                             <Link to='/'className="nav-links" onClick={closeMobileMenu}>
                                 Home
                             </Link>
                         </li>
                         <li className="nav-item">
                             <Link to='/services'className="nav-links" onClick={closeMobileMenu}>
                                 Services
                             </Link>
                         </li>
                         <li className="nav-item">
                             <Link to='/products'className="nav-links" onClick={closeMobileMenu}>
                                 Products
                             </Link>
                         </li>
                        
                         <li className="nav-btn">
                            {button ? (
                                <Link to='/contacts' className="btn-link">
                                    <Button buttonStyle='btn--outline'>Contacts Us</Button>
                                </Link>
                            ): (
                               <Link to='/contacts' className="btn-link" onClick={closeMobileMenu}>
                                   <Button buttonStyle='btn--outline'
                                       buttonSize='btn--mobile'
                                   >Contact Us</Button>
                               </Link> 
                            )}
                         </li>

                         <li className="nav-btn">
                            {button ? (
                                <Link to='/checkout' className="btn-link">
                                    <Button buttonStyle='btn--outline'>Checkout Out</Button>
                                </Link>
                            ): (
                               <Link to='/checkout' className="btn-link" onClick={closeMobileMenu}>
                                   <Button buttonStyle='btn--outline'
                                       buttonSize='btn--mobile'
                                   >Checkout Out</Button>
                               </Link> 
                            )}
                         </li>
                         
                    </ul>
               </div>
           </div>
           </IconContext.Provider> 
        </>
    )
}

export default Navbar
