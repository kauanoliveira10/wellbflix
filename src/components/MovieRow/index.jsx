import "./MovieRow.css";

export default ({ title, items }) => {
   return (
      <div className="movie-row">
         <h2>{title}</h2>
         <div className="list-area">
            <div className="list">
               {items.results.length > 0 &&
                  items.results.map((item, key) => (
                     <div key={key} className="list-item">
                        <img
                           src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                           alt={item.original_title}
                        />
                     </div>
                  ))}
            </div>
         </div>
      </div>
   );
};
