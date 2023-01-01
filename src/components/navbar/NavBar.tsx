import React, { useState } from "react";
import { Link } from "react-router-dom";
import ohio from '../../assets/aboutohio.png';
import align_right from '../../assets/align-right.svg';
import align_left from '../../assets/align-left.svg';
import './NavBar.css';

function NavBar() {
    const [active, setActive] = useState(false);
    return (
        <>
            <div className="nav-bar">
                <div className="nav-bar-left">
                    <img src={ohio} />
                </div>
                <div className="nav-bar-right">
                    <Link to='/'>Home</Link>
                    <Link to='/team'>Team</Link>
                    <Link to='/about'>About</Link>
                </div>
                <div className="nav-bar-dropdown">
                    <img onClick={() => setActive(!active)} className={!active ? "align_left no": "align_left"} src={align_left} />
                    <img onClick={() => setActive(!active)} className={active ? "align_right no": "align_right"} src={align_right} />
                </div>
            </div>
            {active &&
                (
                    <div className={active? 'nav-mobile': 'nav-mobile drop'}>
                <Link onClick={() => setActive(!active)} to='/'>- Home</Link>
                <Link onClick={() => setActive(!active)} to='/team'>- Team</Link>
                <Link onClick={() => setActive(!active)} to='/about'>- About</Link>
            </div>
                )
            }
            
        </>
    );
}

export default NavBar;