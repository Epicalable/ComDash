let apiKey = window.localStorage.getItem('OpenWeatherApi');
let city = window.localStorage.getItem('City');
export async function fetchWeather() {
    try {
        const response = await fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+apiKey
        );

        if (!response.ok) {
            throw new Error("No weather found.");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}
