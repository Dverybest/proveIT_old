import React, { useState } from 'react';
import styles from './navbar.module.css';
// import logo from '../../assets/pIT.png';
import { Link, withRouter } from 'react-router-dom';

const NavBar = ({ getStarted, backgroundColor, style }) => {

    let customStyle = backgroundColor ? { color: 'white', fontSize: 18 } : {}
    const [toggleNav, setToggleNav] = useState(false)

    return (
        <div style={{ backgroundColor: backgroundColor || 'transparent' }}>
            <nav className={styles.navbar} style={style ? style : {}}>
                {/* <img className={styles.logo} alt='logo' src={logo} /> */}
                <div className={styles.brand} style={backgroundColor ?{ fontSize:25,color:'#fff' }:{}}>
                    &lt;ProveIT/&gt;
                    {/* <img alt="logo" src={logo} className={styles.logo}/> */}
                </div>
                <div className={styles.links}>
                    <Link style={customStyle} to="/">Home</Link>
                    <Link style={customStyle} to="/">About</Link>
                    <Link style={customStyle} to="/">Learn</Link>
                    {/* {
                        !style &&
                        <button onClick={() => getStarted()} className={styles.navButton}>Get Started</button>
                    } */}
                </div>

                <span className={styles.icon} onClick={() => setToggleNav(!toggleNav)} style={backgroundColor ? { color: 'white' } : {}}>&#9776;</span>
                {
                    toggleNav &&
                    <div id={styles.my_sidenav}>
                        <span className="icon"  onClick={() => setToggleNav(!toggleNav)}>&times;</span>
                        <Link style={customStyle} to="/">HOME</Link>
                        <Link style={customStyle} to="/">ABOUT</Link>
                        <Link style={customStyle} to="/">LEARN</Link>
                        {/* {
                            !style &&
                            <button onClick={() => {
                                getStarted();
                                toggleNav&&setToggleNav(false)
                            }}>Get Started</button>
                        } */}
                    </div>
                }
            </nav>
        </div>
    )
}

export default withRouter(NavBar);