import apiKey from '../../config';
import axios from 'axios';
export default class Search {
  constructor(query) {
    this.query = query;
  }
  async weatherSearch() {
    try {
      let src =
        typeof this.query == 'string'
          ? `https://api.openweathermap.org/data/2.5/weather?q=${this.query}&appid=${apiKey}`
          : `https://api.openweathermap.org/data/2.5/weather?lat=${this.query[0]}&lon=${this.query[1]}&appid=${apiKey}`;
      let weatherData = await axios(src);
      this.responseData = {
        id: weatherData.data.id,
        description: weatherData.data.weather[0].main,
        icon: weatherData.data.weather[0].icon,
        temperature: weatherData.data.main.temp,
        humidity: weatherData.data.main.humidity,
        pressure: weatherData.data.main.pressure,
        wind: weatherData.data.wind.speed,
      };
      return this.responseData;
    } catch (error) {
      alert(`an error occured of the type ${error}`);
    }
  }
}
