const API_KEY = "69ea69a01feb02122931d38277908678";
const API_BASE = "https://api.themoviedb.org/3";

/* 
O que eu preciso pegar? 
 - Filmes originais da netflix
 - Filmes recomendados (trending)
 - Filmes em alta (top rated)
 - Filmes de Ação
 - FIlmes de comédia
 - Filmes de terror
 - Filmes de romance 
 - Documentários
*/

const Fetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais do Netflix",
        items: await Fetch(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}&with_original_language=en`
        ),
      },
      {
        slug: "trending",
        title: "Recomendados para você",
        items: await Fetch(
          `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "top-rated",
        title: "Em alta",
        items: await Fetch(
          `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "action",
        title: "Ação",
        items: await Fetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await Fetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await Fetch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await Fetch(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await Fetch(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
        ),
      },
    ];
  },

  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case "movie":
          info = await Fetch(
            `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;

        case "tv":
          info = await Fetch(
            `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
      }
    }

    return info;
  },
};
