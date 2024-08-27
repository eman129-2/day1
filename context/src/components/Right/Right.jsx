import React, { useState } from 'react';
import LocationIcon from '../../../public/icon-location.svg';
import TwitterIcon from '../../../public/icon-twitter.svg';
import WebsiteIcon from '../../../public/icon-website.svg'
import './Right.css';
function Right({ userData, onSearch }) {
    const [username, setUsername] = useState('');

    const handleInputChange = (event) => {
        setUsername(event.target.value);
    };

    const handleSearch = () => {
        onSearch(username);
    };

    return (
        <div className="right-container">
            <input
                type="text"
                placeholder="Search GitHub username"
                value={username}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}className='search'>Search</button>

            {userData && (
                <div className="user-info">
                    <img src={userData.avatar_url} alt="User Avatar" />
                    <h2>{userData.name || userData.login}</h2>
                    <p>{userData.bio || "This profile has no bio"}</p>
                    <div className="user-stats">
                        <span>Repos: {userData.public_repos}</span>
                        <span>Followers: {userData.followers}</span>
                        <span>Following: {userData.following}</span>
                    </div>
                    
                    <div className="additional-info">
                    <p>
        <img src={LocationIcon} alt="Location" className="icon" />
        {userData.location || "Location not available"}
    </p>
    <p>
        <img src={TwitterIcon} alt="Twitter" className="icon" />
        {userData.twitter_username ? (
            <a href={`https://twitter.com/${userData.twitter_username}`}>
                {userData.twitter_username}
            </a>
        ) : (
            "Twitter not available"
        )}
    </p>    
    <p>
        <img src={WebsiteIcon} alt="Website" className="icon" />
        {userData.blog ? (
            <a href={userData.blog} target="_blank" rel="noopener noreferrer">
                {userData.blog}
            </a>
        ) : (
            "Blog not available"
        )}
    </p>                  
                    </div>

                </div>
            )}
        </div>
    );
}

export default Right;



    