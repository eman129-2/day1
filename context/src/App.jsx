
import Left from './components/Left/Left';
import Right from './components/Right/Right';
import React, { useState, createContext } from 'react';
import './App.css';

export const ThemeContext = createContext(null);

function App() {
    const [theme, setTheme] = useState('light');
    const [userData, setUserData] = useState(null);
    function ChangeTheme(value) {
        setTheme(value);
    }

    const handleSearch = async (username) => {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUserData(data);
    };

    return (
        <ThemeContext.Provider value={{ theme, ChangeTheme }}>
            <div className={`app-container ${theme}`}>
            <header className="header">
            <div className="toggle-container">
                {/* Your dark/light mode toggle */}
                <div className="header-container">
    <Left /> {/* This is the toggle switch component */}
</div>
            </div>
        </header>

        <main>
            <div className="search-container">
                {}
            </div>
            <div className="search-results">
                {}
            </div>
        </main>
                <Right userData={userData} onSearch={handleSearch} />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;