const BASE_URL = `https://api.themoviedb.org/`;
const KEY = `d91911ebb88751cf9e5c4b8fdf4412c9`;
export default class NewApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  fetchPopularArticles() {
    const url = `${BASE_URL}/movie/popular?api_key=${KEY}&language=en-US&page=${this.page}`;
    return fetch(url)
      .then(response => response.json())
      .then(({ results }) => {
        return results;
      });
  }

  fetchPopularArticlesPages() {
    const url = `${BASE_URL}/movie/popular?api_key=${KEY}&language=en-US&page=${this.page}`;
    return fetch(url).then(response => response.json());
  }

  insertGenresToMovieObj() {
    return this.fetchPopularArticles().then(data => {
      return this.fetchGenres().then(genresList => {
        return data.map(movie => ({
          ...movie,
          release_date: movie.release_date.split('-')[0],
          genres: movie.genre_ids
            .map(id => genresList.filter(el => el.id === id))
            .flat(),
        }));
      });
    });
  }
  get query() {
        return this.searchQuery;
      }
      set query(newQuery) {
        this.searchQuery = newQuery;
      }
      get pageNum() {
        return this.page;
      }
      set pageNum(newPage) {
        this.page = newPage;
      }
}

