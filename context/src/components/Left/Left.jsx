import './Left.css';
import SunIcon from '../../../public/icon-sun.svg';
import MoonIcon from '../../../public/icon-moon.svg';
import React, { useContext } from 'react';
import { ThemeContext } from '../../App';


function Left() {
    const { theme, ChangeTheme } = useContext(ThemeContext);

    function handleOnChange(event) {
        const newTheme = event.target.checked ? 'dark' : 'light';
        ChangeTheme(newTheme);
    }

    return (
        <div className="left-container">
            {theme === 'light' && <img src={SunIcon} alt="Light Mode" />}
            {theme === 'dark' && <img src={MoonIcon} alt="Dark Mode" />}
            <label className="switch">
                <input type="checkbox" onChange={handleOnChange} checked={theme === 'dark'} />
                <span className="slider round"></span>
            </label>
        </div>
    );
}

export default Left;



