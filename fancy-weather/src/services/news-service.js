
const getNews = async (q, lang) => {
  const url = `https://gnews.io/api/v3/search?q=${q}&lang=${lang}&token=6bb687833f9ebd6ec43876310e49df82`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export default getNews;
