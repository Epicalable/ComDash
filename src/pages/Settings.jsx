import React, { useState, useEffect } from "react";
import "./Settings.css";
import { useNavigate } from "react-router-dom";
    
const Settings = () => {
    const [weather, setWeather] = useState("");
    const [news, setNews] = useState("");
    const [city, setCity] = useState("");
    const [background, setBackground] = useState("");
    const navigate = useNavigate(); // Hook to navigate programmaticall

    useEffect(() => {
        setWeather(localStorage.getItem("OpenWeatherApi") || "b190a0605344cc4f3af08d0dd473dd25");
        setNews(localStorage.getItem("NewsApi") || "dffc1c2d7e1b50ff1ffd3a919d7d483b");
        setCity(localStorage.getItem("City") || "Singapore");
        setBackground(localStorage.getItem("BackG") || "X2qWCLQ3QwM1mIy6IwUbuMSV-dmeJM-aOYWTmNzPOqw");
    }, []);

    const saveSettings = () => {
        localStorage.setItem("OpenWeatherApi", weather);
        localStorage.setItem("NewsApi", news);
        localStorage.setItem("City", city);
        localStorage.setItem("BackG", background);
        alert("Settings saved!");
        navigate("/"); // Go back to Dashboard
    };

    const goback = () => {
        navigate("/"); // Go back to Dashboard
    }

    return (
        <div className="settings-container">
            <div className="sidebar">
                <div className="baricons">
                    <img src="https://github.com/user-attachments/assets/9380b62b-8486-4f1d-a3bf-821bf120147c" alt="Comicon" className="comicon" />

                    <div className="bar-item">
                        <img src="https://github.com/user-attachments/assets/8d0aba4c-99ce-4b49-b072-c4da4683a141" alt="Dashboard Icon" onClick={goback} />
                    </div>

                    <div className="bar-item">
                        <img src="https://github.com/user-attachments/assets/b5cfb272-5083-4d39-9265-67f6bf5335f4" alt="Settings Icon" />
                    </div>
                </div>
                <div className="baraboutus">
                    <a href="https://github.com/Epicalable/ComDash" title="About Us">
                        <img src="https://github.com/user-attachments/assets/e9530ede-b4bb-4842-a11a-bfcdeed6d236" alt="About Us Icon" />
                    </a>
                </div>
            </div>

            <div className="settings-box">
                <label>SETTINGS:</label>
                <p>Edit your settings below (All info is stored on your local storage)</p>

                <div className="input-group">
                    <label>OpenWeather API:</label>
                    <input type="text" value={weather} onChange={(e) => setWeather(e.target.value)} />
                    <button onClick={() => window.open("https://openweathermap.org/", "_blank")}>?</button>
                </div>

                <div className="input-group">
                    <label>GNews API:</label>
                    <input type="text" value={news} onChange={(e) => setNews(e.target.value)} />
                    <button onClick={() => window.open("https://gnews.io/", "_blank")}>?</button>
                </div>

                <div className="input-group">
                    <label>Your City:</label>
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                    <button onClick={() => alert('Enter current city Ex. Singapore, New York, Sydney, Paris')}>?</button>
                </div>

                <div className="input-group">
                    <label>Unsplash API:</label>
                    <input type="text" value={background} onChange={(e) => setBackground(e.target.value)} />
                    <button onClick={() => window.open("https://unsplash.com/developers", "_blank")}>?</button>
                </div>

                <button className="save-button" onClick={saveSettings}>Save</button>
            </div>
        </div>
    );
};

export default Settings;
