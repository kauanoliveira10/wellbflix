import "./MovieRow.css";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { useState } from "react";

export default ({ title, items }) => {
   const [scrollX, setScrollX] = useState(0);

   const handleLeftArrow = () => {
      let x = scrollX + Math.round(window.innerWidth / 2);
      if (x > 0) {
         x = 0;
      }
      setScrollX(x);
   };

   const handleRightArrow = () => {
      let x = scrollX - Math.round(window.innerWidth / 2);
      let listWidth = items.results.length * 200;
      if (window.innerWidth - listWidth > x) {
         x = window.innerWidth - listWidth - 60;
      }
      setScrollX(x);
   };

   return (
      <div className="movie-row">
         <h2>{title}</h2>
         <div className="left" onClick={handleLeftArrow}>
            <NavigateBefore style={{ fontSize: 50 }}></NavigateBefore>
         </div>
         <div className="right" onClick={handleRightArrow}>
            <NavigateNext style={{ fontSize: 50 }}></NavigateNext>
         </div>
         <div
            className="list-area"
            style={{ marginLeft: scrollX, width: items.results.length * 210 }}
         >
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
