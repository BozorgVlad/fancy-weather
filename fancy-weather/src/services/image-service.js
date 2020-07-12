export default class ImageService {
  constructor(query) {
    this.APIkey = 'Y5X0wZ635PBeoMPScLI0QCZQGf5GRr-ZdFKv6aAV8a4';
    this.query = query;
    this.url = `https://api.unsplash.com/photos/random?query=${this.query}&client_id=${this.APIkey}`;
  }

  async getLinkToImage() {
    const res = await fetch(this.url);
    const data = await res.json();
    console.log(this.url);
    return data.urls.regular;
  }
}
