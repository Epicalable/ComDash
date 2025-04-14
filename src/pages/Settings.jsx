import React, { useState, useEffect } from "react";
import { db, auth } from '../firebase';
import { doc,setDoc,getDoc} from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import "./Settings.css";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

    
const Settings = () => {
    const navigate = useNavigate(); // Hook to navigate programmaticall
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
            setUser(currentUser);
          } else { navigate("/login"); }// Redirect to login if not authenticated
        });
        return () => unsubscribe();
      }, []);
      
      useEffect(() => {
        if (user) { loadApiConfig(); }
      }, [user]);
      

    const goback = () => {
        navigate("/"); // Go back to Dashboard
    }

    const handleLogout = async () => {
      await signOut(auth);
      window.location.reload();
    };

    const [apiConfig, setApiConfig] = useState({
        openWeatherKey: '',
        newsApiKey: '',
        country: '',
        city: '',
      });
    
      const handleApiChange = (e) => {
        setApiConfig({ ...apiConfig, [e.target.name]: e.target.value });
      };
    
      const saveApiConfig = async () => {
        if (!user) return;
        const apiDocRef = doc(db, `users/${user.uid}/apiKeys/config`);
        await setDoc(apiDocRef, apiConfig);
        localStorage.setItem("OpenWeatherApi", apiConfig.openWeatherKey);
        localStorage.setItem("NewsApi", apiConfig.newsApiKey);
        localStorage.setItem("City", apiConfig.city);
        localStorage.setItem("BackG", apiConfig.country);
        localStorage.setItem('apiConfig', JSON.stringify(apiConfig));
        alert('API config saved!');
        navigate("/");
      };
      
      
      const loadApiConfig = async () => {
        if (!user) return;
        const apiDocRef = doc(db, `users/${user.uid}/apiKeys/config`);
        const snap = await getDoc(apiDocRef);
        if (snap.exists()) {
          setApiConfig(snap.data());
          localStorage.setItem('apiConfig', JSON.stringify(snap.data()));
        }
      };
      
      

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

                    <div id="bar-item">
                      <img src="https://github.com/user-attachments/assets/ddc1481e-22e7-45ab-b1cf-aa85a8a94992" id="Comicon" onClick={handleLogout}/>
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
                <p>Enter your settings below: <br/> (All info is stored on your local storage and on Firebase)</p>

                <div className="input-group">
                    <label>OpenWeather API:</label>
                    <input name="openWeatherKey" type="text" placeholder="OpenWeather API Key" value={apiConfig.openWeatherKey} onChange={handleApiChange}/>
                    <button onClick={() => window.open("https://home.openweathermap.org/subscriptions/unauth_subscribe/onecall_30/base", "_blank")}>?</button>
                </div>

                <div className="input-group">
                    <label>GNews API:</label>
                    <input name="newsApiKey" type="text" placeholder="NewsAPI Key" value={apiConfig.newsApiKey} onChange={handleApiChange} />
                    <button onClick={() => window.open("https://gnews.io/login", "_blank")}>?</button>
                </div>

                <div className="input-group">
                    <label>Your City:</label>
                    <input name="city" placeholder="City (e.g. New York)" value={apiConfig.city} onChange={handleApiChange}/>
                    <button onClick={() => alert('Enter current city Ex. Singapore, New York, Sydney, Paris')}>?</button>
                </div>

                <div className="input-group">
                    <label>Unsplash API:</label>
                    <input name="country" placeholder="Country (e.g. US)" value={apiConfig.country} onChange={handleApiChange}/>
                    <button onClick={() => window.open("https://unsplash.com/join", "_blank")}>?</button>
                </div>

                <button className="save-button" onClick={saveApiConfig}>Save</button>
            </div>
        </div>
    );
};

export default Settings;
