import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Calendar from 'react-calendar';
import { fetchWeather } from "./weather"; // Import the function for weather
import "./DashBoard.css"; // Import the CSS file for styling

const DashBoard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [date, setDate] = useState(new Date());
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch weather data when the app loads
    async function getWeather() {
      const data = await fetchWeather();
      if (data) {
        setWeatherData(data);
        window.localStorage.setItem("City", data.name); // Store city in localStorage
      }
    }
    getWeather();

    // Fetch background image when the app loads
    getImage();

  }, []);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=singapore&units=metric&appid=b190a0605344cc4f3af08d0dd473dd25"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("API request failed");
        }
      })
      .then((data) => {
        setForecastData(data.list);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  }, []);

  function getNews() {
    // grab the news container
    let newsAccordion = document.getElementById('newsAccordion');
    let term = document.getElementById('country-search-bar').value;
    let source1 = document.getElementById('news-search-bar').value;
    let apiKey = window.localStorage.getItem('NewsApi');
    // create the get request
    const xhr = new XMLHttpRequest();
    { 
    // use for the post request
    xhr.open('GET', `https://gnews.io/api/v4/top-headlines?category=${source1}&lang=en&country=${term}&max=100&apikey=${apiKey}`, true)
    // when response is ready
    xhr.onload = function () {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            let news = `<div class="newscard">
                                    <div class="card-header" id="heading${index}">
                                        <h2 class="mb-0" color="white">${element["title"]}</h2>
                                    </div>
                                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                        <div class="card-body"><a href="${element['url']}" target="_blank"> Read more here </a> </div>
                                    </div>
                            </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    xhr.send() 
    } 
  }

  function getgoogle() {
    var term;
    term = document.getElementById('google-search-bar').value;
    if (term == "") {
        alert("Please Enter Something Before Asking Google!");
    } else {
        myWindow = window.open(`http://www.google.com/search?q=${term}`, "_blank")
    }
  }
  
  function getImage() {
    let cityw = window.localStorage.getItem('City');
    let bgim = window.localStorage.getItem("BackG");
    fetch("https://api.unsplash.com/photos/random?client_id=" + bgim + "&query=" + cityw + "&count=1&orientation=landscape")
      .then((response) => {
        if (!response.ok) {
          console.log("Error fetching image:", response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        const { regular } = data[0].urls;
        document.body.style.backgroundImage = `url("${regular}")`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
      })
      .catch((error) => document.body.style.backgroundImage = `url("https://images.unsplash.com/photo-1630387775844-b15d0f769972?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`);
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Update local storage whenever TODOs change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
  

  return (
    <div>
      <div class="sidebar">
            <div class="baricons">
                <img src="https://github.com/user-attachments/assets/9380b62b-8486-4f1d-a3bf-821bf120147c" id="Comicon"/>
                <div id="Dashbutton">
                    <img src="https://github.com/user-attachments/assets/8d0aba4c-99ce-4b49-b072-c4da4683a141"/>
                </div>
                <Link to="/Settings">
                    <div id="Setbutton">
                        <img src="https://github.com/user-attachments/assets/b5cfb272-5083-4d39-9265-67f6bf5335f4"/>
                    </div>
                </Link>
                
            </div>
            <div class="baraboutus">
                <div id="Setbutton">
                    <a href="https://github.com/Epicalable/ComDash" title="About Us"><img src="https://github.com/user-attachments/assets/e9530ede-b4bb-4842-a11a-bfcdeed6d236"/></a>
                </div>
            </div>
      </div>


      <div className="container">
        <div>

            {/* Weather Section */}
            <div className="weatherdiv">
              <div className="todayweather">
                <h3>{weatherData ? `Weather in ${weatherData.name} :` : "Loading..."}</h3>
                  {weatherData && (
                      <>
                      <h4>Temperature: {weatherData.main.temp}°C</h4>
                      <h4>
                      <img id="weathericon" src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}/>
                      <br />
                      Description: {weatherData.weather[0].description}
                      <br />
                      Currently Feels like: {weatherData.main.feels_like}°C
                      <br />
                      Min Temp: {weatherData.main.temp_min}°C || Max Temp: {weatherData.main.temp_max}°C
                      <br />
                      Humidity: {weatherData.main.humidity}%
                      <br />
                      Wind Speed: {weatherData.wind.speed} m/s
                      </h4>
                      </>
                )}
              </div>
              <h3>{weatherData ? `Weather Forecast for ${weatherData.name} :` : "Loading..."}</h3>
              <div className="weatherforecast">
                {error && <p style={{ color: "red" }}>{error}</p>}
                {forecastData.map((item, index) => (
                  <div className="forecast" key={index}>
                    <p><strong>Date & Time:</strong> {item.dt_txt}</p>
                    <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="Weather Icon" />
                    <h5><strong>Temperature:</strong> {item.main.temp}°C</h5>
                    <h5><strong>Feels like:</strong> {item.main.feels_like}°C</h5>
                    <h5><strong>Humidity:</strong> {item.main.humidity}%</h5>
                    <h5><strong>Wind Speed:</strong> {item.wind.speed} km/h</h5>
                  </div>
                ))}
              </div>
            </div> 
            <br />
                
            {/* Stock Section will be worked on later */}
            {/*<div className="stockdiv">
              <h3>Stocks</h3>
              <label id="stockPrice0"></label><br />
              <label id="stockPrice1"></label><br />
              <label id="stockPrice2"></label><br />
              <label id="stockPrice3"></label>
            </div>
            <br />*/}

            {/* Calander Section */}
            <div className="calenderdiv">
              <div className='calendar-container'>
                <Calendar onChange={setDate} value={date} />
              </div>
            </div>
        </div>

        <div>
          {/* Google search Section */}
          <div className="googlediv">
            <h3>Google Search Card</h3>
            <input className="searchbar" type="text" id="google-search-bar" placeholder="Search Google" />
            <button onClick={getgoogle} id="google-search-bar">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" x="0px" y="0px" viewBox="0 0 48 48"
                              enable-background="new 0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                          	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
                          	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
                          	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
                          	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
                          	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z">
                              </path>
                          </svg>
            </button>
          </div>
          <br />

          {/* Todo Section */}
          <div className="tododiv">
            <header className="App-header">
              <h3>Your To Do Tasks</h3>
              <div className="todo-input">
                <input
                  type="text" className="searchbar"
                  placeholder="Add a new task"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                />
                <button onClick={handleAddTodo} id="add-todo-button">
                <svg stroke="currentColor"
                          fill="currentColor" stroke-width="0" t="1551322312294" viewBox="0 0 1024 1024" version="1.1" pId="10297"
                          height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <defs></defs>
                          <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" pId="10298"></path>
                          <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" pId="10299"></path>
                      </svg>
                </button>
              </div>
              <div className="todolist">
                <ul>
                {todos.map((todo, index) => (
                  <li key={index}>
                    {todo}&nbsp;&nbsp;
                    <button id="add-todo-button" onClick={() => handleRemoveTodo(index)}>✔</button>
                  </li>
                ))}
              </ul>
              </div>
            </header>
          </div>

        </div>
              
        <div>
          {/* News Section */}
          <div className="newsdiv">
          <select class="search-bar" id="country-search-bar">
                        <option value="us" selected>USA</option>
                        <option value="sg">Singapore</option>
                        <option value="in">India</option>
                    </select><br />
                    <select class="search-bar" id="news-search-bar">
                        <option value="general" selected>General</option>
                        <option value="nation">National</option>
                        <option value="business">Business</option>
                        <option value="technology">Technology</option>
                        <option value="entertainment">Entertainment</option>
                    </select>
            <button onClick={getNews} id="news-search">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M19.875,3H4.125C2.953,3,2,3.897,2,5v14c0,1.103,0.953,2,2.125,2h15.75C21.047,21,22,20.103,22,19V5 C22,3.897,21.047,
                                  3,19.875,3z M19.875,19H4.125c-0.057,0-0.096-0.016-0.113-0.016c-0.007,0-0.011,0.002-0.012,0.008L3.988,5.046 
                                  C3.995,5.036,4.04,5,4.125,5h15.75C19.954,5.001,19.997,5.028,20,5.008l0.012,13.946C20.005,18.964,19.96,19,19.875,19z">
                              </path>
                              <path d="M6 7H12V13H6zM13 15L6 15 6 17 13 17 14 17 18 17 18 15 14 15zM14 11H18V13H14zM14 7H18V9H14z"></path>
                          </svg>
            </button>
            <div id="newsAccordion"></div> {/* This is where news will be displayed */}
          </div>
        </div>
      </div>
    </div>
      
  );
};

export default DashBoard;
