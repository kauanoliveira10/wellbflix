import "./FeaturedMovie.css";

export default ({ item }) => {
   let firstDate = new Date(item.first_air_date);

   let genres = [];
   for (let i in item.genres) {
      genres.push(item.genres[i].name);
   }

   return (
      <section
         className="featured"
         style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
         }}
      >
         <div className="vertical">
            <div className="horizontal">
               <div className="name">{item.original_name}</div>
               <div className="details">
                  <div className="points">
                     {item.vote_average.toFixed(1)} pontos
                  </div>
                  <div className="year">{firstDate.getFullYear()}</div>
                  <div className="seasons">
                     {item.number_of_seasons} temporada
                     {item.number_of_seasons != 1 ? "s" : ""}
                  </div>
               </div>
               <div className="description">{item.overview}</div>
               <div className="buttons">
                  <a className="watch-btn" href={`/watch/${item.id}`}>
                     ▶︎ Assistir
                  </a>
                  <a className="my-list-btn" href={`/list/add/${item.id}`}>
                     + Minha lista
                  </a>
               </div>
               <div className="genres">
                  <strong>Gêneros: </strong>
                  {genres.join(", ")}
               </div>
            </div>
         </div>
      </section>
   );
};
