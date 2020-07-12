import thunderstorm from '../assets/weather-icons/thunderstorms.svg';
import drizzle from '../assets/weather-icons/drizzle.svg';
import rain from '../assets/weather-icons/rain.svg';
import snow from '../assets/weather-icons/snow.svg';
import mist from '../assets/weather-icons/mist.svg';
import clouds from '../assets/weather-icons/cloudy.svg';
import clearDay from '../assets/weather-icons/clear-day.svg';

export const convertCrdsToMinute = (crds) => {
  const arrCrds = crds.toString().split('.');
  const min = `0.${arrCrds[1]}`;
  const minutes = Math.floor(min * 60);
  if (!minutes) {
    return `${arrCrds[0]} ° 0`;
  }
  return `${arrCrds[0]} ° ${minutes}'`;
};

export const translateWord = (lang, arr) => {
  switch (lang) {
    case 'en':
      return arr[0];
    case 'ru':
      return arr[1];
    default:
      return arr[2];
  }
};

export const deleteAllNumbers = (str) => {
  const time = str.replace(/[^A-Za-zА-Яа-яЁё]/g, '');
  if (time === 'd') {
    return 'day';
  }
  return 'night';
};

export const convertToFarenh = (temp) => Math.floor((temp * 1.8) + 32);

export const displayWeatherIcon = (id) => {
  if (id >= 200 && id < 300) {
    return thunderstorm;
  } if (id >= 300 && id < 400) {
    return drizzle;
  } if (id >= 500 && id < 600) {
    return rain;
  } if (id >= 600 && id < 700) {
    return snow;
  } if (id >= 700 && id < 800) {
    return mist;
  } if (id > 800) {
    return clouds;
  }
  return clearDay;
};
