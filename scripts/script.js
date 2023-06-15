/*Start of WeatherCard JS Code*/
let weather = {
    apiKey: "b190a0605344cc4f3af08d0dd473dd25",
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
        document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}')`;
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
weather.fetchWeather("Singapore");
function OpenWeatherHelp() {
    var myWindow;
    myWindow = window.open("https://openweathermap.org/weather-conditions#Icon-list", "_blank")
}
/*End of WeatherCard JS Code*/


/*Start of NewsCard JS Code*/
function getNews() {
    // initialze of the variables 
    let apiKey = "2c925d05bbe34d23a7fb4f425749d9b9"
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
var lists = []
function addList() {
    var list = document.getElementById('list');
    var val = list.value;
    if (val == "") {
        alert("Please Enter Your Task Before Submiting!");
    } else {
        lists.push(val.trim());
        list.value = '';
        displayList();
    }
}
function displayList() {
    var data = '';
    for (var i = 0; i < lists.length; i++) {
        data += "<li class='list-group-item'><button class='pull-right' onclick='removeList(" + i + ")'>" + "<svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z'></path></svg>" + "<span class='glyphicon glyphicon-trash' ></span ></button > " + lists[i] + "</li > ";
    }
    document.getElementById('result').innerHTML = data;
}
function removeList(list) {
    lists.splice(list, 1);
    displayList();
}
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
/*End of LinksCard JS Code*/



/*Start of Skyvisual JS Code*/
var ctx = document.getElementById("sunriseset").getContext("2d"),
    gr = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height),
    sky = new Image();

sky.onload = go;
sky.src = "http://i.stack.imgur.com/qhQhQ.jpg";

function go() {

    // some style setup
    ctx.font = "15px sans-serif";
    gr.addColorStop(0, "#ffc");
    gr.addColorStop(0.75, "gold");
    gr.addColorStop(1, "orange");
    ctx.shadowColor = "#ffa";
    var centerX = ctx.canvas.width * 0.5,   // center of arc
        bottomY = ctx.canvas.height + 16,   // let center be a bit below horizon
        radiusX = ctx.canvas.width * 0.52, // radius, 80% of width in this example
        radiusY = ctx.canvas.height * 0.8;  // radius, 90% of height in this example

    // define sunrise and sunset times (in 24-hour clock, can be fractional)
    var time = 7, sunrise = 7, sunset = 19;

    (function loop() {
        var normTime = getTime();                                  // get normalized time
        var angle = getAngle(normTime);                            // get angle in radians
        var x = centerX + radiusX * Math.cos(angle);               // calcuate point
        var y = bottomY + radiusY * Math.sin(angle);
        drawSky(normTime);                                         // draw sky gradient
        drawSun(x, y);                                             // draw sun at point
        drawTime();                                                // render time
        requestAnimationFrame(loop)
    })();
    function getTime() {
        // produces a normalized pseduo-time
        var dt = new Date();
        time = dt.getHours();
        if (time > 23) time = 0;
        return (time - sunrise) / (sunset - sunrise);
    }
    function getAngle(normTime) {
        return Math.PI + Math.PI * normTime
    }
    function drawSun(x, y) {
        ctx.beginPath();
        ctx.moveTo(x + 16, y);
        ctx.arc(x, y, 16, 0, 6.28);
        ctx.fillStyle = gr;
        ctx.shadowBlur = 20;
        ctx.fill();
    }
    function drawTime() {
        ctx.fillStyle = "#fff";
        ctx.shadowBlur = 0;
        ctx.fillText("Sky-Visualisation Time(Hours): " + time.toFixed(0), 10, 20);
    }
    function drawSky(t) {
        t = Math.max(0, Math.min(1, t));
        var iw = sky.width,
            w = ctx.canvas.width,
            x = 60 + (iw - 120) * t;
        ctx.drawImage(sky, x, 0, 1, sky.height, 0, 0, w, ctx.canvas.height);
    }
}
/*End of Skyvisual JS Code*/