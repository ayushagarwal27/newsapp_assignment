export const searchQueryAPI = (searchQuery) =>
  `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${NEWS_API_KEY}`;

export const searchByDateAPI = (date) =>
  `https://newsapi.org/v2/everything?from=${date}&to=${date}&sources-bbc-news&domains=bbc.co.uk&pageSize=20&apiKey=${NEWS_API_KEY}`;

export const searchBySourceAPI = (source) =>
  `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${NEWS_API_KEY}`;

export const searchByCategoryAPI = (category) =>
  `https://newsapi.org/v2/top-headlines?category=${category}&country=de&apiKey=${NEWS_API_KEY}`;

const NEWS_API_KEY = "d3ce92e6e93d4ff681149e74cf83f90c";
