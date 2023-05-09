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
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText =
            "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =
            "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage =
            "url('https://source.unsplash.com/1600x900/?" + name + "')";
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



// initialze of the variables 
let country = "us"
let apiKey = "2c925d05bbe34d23a7fb4f425749d9b9"

// grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// create the get request
const xhr = new XMLHttpRequest();

// use for the post request 
xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`, true);
// when response is ready
xhr.onload = function () {
    if (this.status === 200) {
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
    else {
        console.log("Some error occured")
    }
}

xhr.send()


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


