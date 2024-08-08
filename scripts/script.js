let bgim = window.localStorage.getItem("BackG");
document.body.style.backgroundImage = `url('`+bgim+`')`;

/*Start of WeatherCard JS Code*/
let weather = {
    apiKey: window.localStorage.getItem('OpenWeatherApi'),
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apiKey)
            .then((response) => {
                if (!response.ok) {
                    alert("No weather found.");
                    throw new Error("No weather found.");
                }
                return response.json();
            })
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity, feels_like, temp_min, temp_max } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = `Weather in ${name}`;
        document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}.png`;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = `${temp}°C`;
        document.querySelector(".feels_like").innerText = `Currently Feels like: ${feels_like}°C`;
        document.querySelector(".tempminmax").innerText = `Temp Min: ${temp_min}°C || Temp Max: ${temp_max}°C`;
        document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
        document.querySelector(".wind").innerText = `Wind Speed: ${speed} km/h`;
        document.querySelector(".weather").classList.remove("loading");
    },
    search: function () {
        this.fetchWeather(document.getElementById('weather-search-bar').value);
    },
};
document.getElementById('get_weather_button').addEventListener("click", function () {
    weather.search();
});
document
    .getElementById('weather-search-bar')
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.search();
        }
    });
weather.fetchWeather(window.localStorage.getItem('City'));
function OpenWeatherHelp() {
    var myWindow;
    myWindow = window.open("https://openweathermap.org/weather-conditions#Icon-list", "_blank")
}
/*End of WeatherCard JS Code*/


window.onload = getNewsnow();

/*Start of NewsCard JS Code*/
function getNewsnow() {
    // initialze of the variables 
    let apiKey = window.localStorage.getItem('NewsApi');
    // grab the news container
    let newsAccordion = document.getElementById('newsAccordion');
    // create the get request
    const xhr = new XMLHttpRequest();
    let term = window.localStorage.getItem("Country");
    if (term == "") {
        alert("Please Enter Country Abbrevation (EX.SG,US,AU) Before Requesting For News Headlines!");
    } else {
        // use for the post request 
        xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=${term}&apiKey=${apiKey}&pageSize=100`, true)
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
function NewsApiHelp() {
    myWindow = window.open("https://newsapi.org/docs/endpoints/top-headlines", "_blank")
}
/*End of NewsCard JS Code*/


/*Start of NewsCard JS Code*/
function getNews() {
    // initialze of the variables 
    let apiKey = window.localStorage.getItem('NewsApi');
    // grab the news container
    let newsAccordion = document.getElementById('newsAccordion');
    // create the get request
    const xhr = new XMLHttpRequest();
    let term = document.getElementById('news-search-bar').value;
    if (term == "") {
        alert("Please Enter Country Abbrevation (EX.SG,US,AU) Before Requesting For News Headlines!");
    } else { 
       // use for the post request 
        xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=${term}&apiKey=${apiKey}&pageSize=100`, true)
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
function NewsApiHelp() {
    myWindow = window.open("https://newsapi.org/docs/endpoints/top-headlines", "_blank")
}
/*End of NewsCard JS Code*/


/*Start of TasksCard JS Code*/
let todos = [];
const inputDOM = document.getElementById("inputTodo");
const addDOM = document.getElementById("addTodo");
const listDOM = document.getElementById("Tasklist");
const setLocalStorage = () =>
    localStorage.setItem("todoLists", JSON.stringify(todos));

const showTodo = () => {
    listDOM.innerHTML = "";
    let getTodos = JSON.parse(localStorage.getItem("todoLists"));
    if (getTodos !== null) {
        todos = getTodos;
        for (var i = 0; i < todos.length; i++) {
            let { todo } = todos[i];
            listDOM.innerHTML += `<li id="list${i}">${todo}<button onclick=removeTodo(${i})>✔</button></li>`;
        }
    }
};
const addTodo = () => {
    let data = inputDOM.value;
    if (!data) {
        alert("Please Enter Your Task Before Submiting!");
    } else {
        todos.push({
            todo: data,
        });
        inputDOM.value = "";
        setLocalStorage();
        showTodo();
    }
};
const removeTodo = i => {
    todos.splice(i, 1);
    setLocalStorage();
    showTodo();
};
showTodo();
/*End of TasksCard JS Code*/


/*Start of CalanderCard JS Code*/
let calendar = document.querySelector('.calendar')
const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0)
}
getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}
generateCalendar = (month, year) => {
    let calendar_days = calendar.querySelector('.calendar-days')
    let calendar_header_year = calendar.querySelector('#year')
    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    calendar_days.innerHTML = ''
    let currDate = new Date()
    if (!month) month = currDate.getMonth()
    if (!year) year = currDate.getFullYear()
    let curr_month = `${month_names[month]}`
    month_picker.innerHTML = curr_month
    calendar_header_year.innerHTML = year
    // get first day of month
    let first_day = new Date(year, month, 1)
    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div')
        if (i >= first_day.getDay()) {
            day.classList.add('calendar-day-hover')
            day.innerHTML = i - first_day.getDay() + 1
            day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`
            if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('curr-date')
            }
        }
        calendar_days.appendChild(day)
    }
}
let month_picker = calendar.querySelector('#month-picker')
month_picker.onclick = () => {
    month_list.classList.add('show')
}
let currDate = new Date()
let curr_month = { value: currDate.getMonth() }
let curr_year = { value: currDate.getFullYear() }
generateCalendar(curr_month.value, curr_year.value)
/*End of CalanderCard JS Code*/


/*Start of LinksCard JS Code*/
function getGoogle() {
    var term;
    term = document.getElementById('GooglesearchTerm').value;
    if (term == "") {
        alert("Please Enter Something Before Asking Google!");
    } else {
        myWindow = window.open(`http://www.google.com/search?q=${term}`, "_blank")
    }
}
function getGithub() {
    myWindow = window.open("https://github.com/Epicalable", "_blank")
}
function getYoutube() {
    myWindow = window.open("https://www.youtube.com/", "_blank")
}
function getReddit() {
    myWindow = window.open("https://www.reddit.com/", "_blank")
}
function getInsta() {
    myWindow = window.open("https://www.instagram.com/", "_blank")
}
/*End of LinksCard JS Code*/