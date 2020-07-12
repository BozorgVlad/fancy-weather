export default class GeoService {
  ipAPIKey = '5f26d9a1982402';
  geoAPIKey = '1721d93465e24df49752cc89a4ac08dd';
  ipUrl = `https://ipinfo.io?token=${this.ipAPIKey}`;

  async getLocation() {
    const res = await fetch(this.ipUrl);
    const data = await res.json();
    return data.loc;
  }

  async requestGeo(coordinates, lang) {
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${coordinates}&language=${lang}&key=${this.geoAPIKey}`
      const res = await fetch(url);
      const data = await res.json();
      return data;
  }

  async getGeoData(lang, location) {
    const geoData = await this.requestGeo(location, lang);
    return geoData;
  }

  async getLocationTitle(lang, location) {
    const data = await this.getGeoData(location, lang);
    const { city, country, county, state } = data.results[0].components;
    if (!county && !city) {
      return `${data.results[0].formatted}`;
    }
    if (!city) {
      return `${county}, ${country}`;
    }
      return `${city}, ${country}`;
  }

  async setCrdsFromInput(lang, location) {
    const data = await this.getGeoData(location, lang);
    return data.results[0].geometry;
  }


  async getWeather(lat, lon, lang) {
    const APIkey = 'f27faead3bd5cefd7d4e6173c67f026b';
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&
    exclude=hourly,minutely&appid=${APIkey}&lang=${lang}`
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
}