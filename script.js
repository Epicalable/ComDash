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
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};
document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});
document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.search();
        }
    });
weather.fetchWeather("Singapore");
/*End of WeatherCard JS Code*/


/*Start of NewsCard JS Code*/
function getNews() {
    // initialze of the variables 
    let apiKey = "2c925d05bbe34d23a7fb4f425749d9b9"
    // grab the news container
    let newsAccordion = document.getElementById('newsAccordion');
    // create the get request
    const xhr = new XMLHttpRequest();
    let term = document.getElementById('searchTerm').value;
    // use for the post request 
    xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=${term}&apiKey=${apiKey}`, true)
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
function NewsApiHelp() {
    var myWindow;
    myWindow = window.open("https://newsapi.org/docs/endpoints/top-headlines", "_blank")
}
/*End of NewsCard JS Code*/


/*Start of TasksCard JS Code*/
var lists = []
function addList() {
    var list = document.getElementById('list');
    var val = list.value;
    if (val == "") {
        alert("Please enter something first!");
    } else {
        lists.push(val.trim());
        list.value = '';
        displayList();
    }
}
function displayList() {
    var data = '';
    if (lists.length < 6) {
        for (var i = 0; i < lists.length; i++) {
            data += "<li class='list-group-item'><button class='pull-right' onclick='removeList(" + i + ")'>"+"<svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z'></path></svg>"+"<span class='glyphicon glyphicon-trash' ></span ></button > " + lists[i] + "</li > ";
        }
    }
    else {
        alert("Task Limit is 5 please refresh the page!");
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

function display_c() {
    var refresh = 1000; // Refresh rate in milli seconds
    mytime = setTimeout('display_ct()', refresh)
}

function display_ct() {
    var CDate = new Date()
    NewDate = CDate.toLocaleTimeString();
    document.getElementById('ct').innerHTML = NewDate;
    display_c();
}
/*End of CalanderCard JS Code*/


/*Start of LinksCard JS Code*/
function getGoogle() {
    var term, myWindow;
    term = document.getElementById('searchTerm').value;
    myWindow = window.open("http://www.google.com/search?q=" + term, "_blank")
}
function getGithub() {
    myWindow = window.open("https://github.com/Epicalable", "_blank")
}
function getYoutube() {
    myWindow = window.open("https://www.youtube.com/", "_blank")
}
/*End of LinksCard JS Code*/