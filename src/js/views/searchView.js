import { elements } from '../../base';

export const readCurrentInput = () =>
  //read value for input field
  elements.inputElement.value;

export const clearInputField = () => {
  //clear input field
  elements.inputElement.value = '';
};

export const clearUI = () => {
  //clear everything on curently on display
  elements.mainContent.innerHTML = '';
  elements.asideDescription.innerHTML = '';
};

export const updateWeatherDetails = (object) => {
  //1.create html snipet for main content
  const mainContent = ` <h1 class="main__content__header">${Math.floor(
    object.temperature - 273.15
  )}°C</h1>
          <div class="main__content__description">
            <h3 class="main__content__description__city">${object.name}</h3>
            <p class="main__content__description__date">
              08:23-Monday 3,Sept."19
            </p>
          </div>
          <div class="main__content__icon">
            <div class="main__content__icon__R">
              <img src="http://openweathermap.org/img/w/${
                object.icon
              }.png" alt="icon" />
            </div>
            <p class="main__content__description__date p">${
              object.description
            }</p>
          </div>`;
  //2.create html snippet for description
  const weatherDescription = ` <li class="cities__item cities__item--move">
  Pressure <span class="percentages">${object.pressure} Pa</span>
  </li>
  <li class="cities__item cities__item--move">
  Humidity <span class="percentages">${object.humidity}%</span>
  </li>
  <li class="cities__item cities__item--move">
  Wind Speed <span class="percentages">${object.wind} Knots</span>`;
  elements.mainContent.insertAdjacentHTML('afterbegin', mainContent);
  elements.weatherDescription.insertAdjacentHTML(
    'afterbegin',
    weatherDescription
  );
  //add both to dom
};
