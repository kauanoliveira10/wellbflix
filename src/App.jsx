import { useEffect, useState } from "react";

import Tmdb from "./Tmdb";
import Header from "./components/Header";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Footer from "./components/Footer";

import "./App.css";

function App() {
   const [movieList, setMovieList] = useState([]);
   const [featureData, setFeaturedata] = useState(null);
   const [bgHeader, setBgHeader] = useState(false);

   useEffect(() => {
      const loadAll = async () => {
         // Pegando a lista total
         let list = await Tmdb.getHomeList();
         setMovieList(list);

         // Pegando o filme em destaque (featured)
         let originals = list.filter((i) => i.slug === "originals");
         let randomChosen = Math.floor(
            Math.random() * originals[0].items.results.length--
         );
         let movieChosen = originals[0].items.results[randomChosen];
         let chosenInfo = await Tmdb.getMovieInfo(movieChosen.id, "tv");
         movieChosen = originals[0].items.results[randomChosen];

         setFeaturedata(chosenInfo);
      };

      loadAll();
   }, []);

   useEffect(() => {
      const scrollListener = () => {
         if (window.scrollY > 10) {
            setBgHeader(true);
         } else {
            setBgHeader(false);
         }
      };

      window.addEventListener("scroll", scrollListener);

      return () => {
         window.removeEventListener("scroll", scrollListener);
      };
   }, []);

   return (
      <div className="page">
         <Header bg={bgHeader} />
         {featureData && <FeaturedMovie item={featureData} />}

         <section className="lists">
            {movieList.map((item, key) => (
               <MovieRow key={key} title={item.title} items={item.items} />
            ))}
         </section>

         <Footer></Footer>
         {movieList.length <= 0 && (
            <div className="loading">
               <img src="https://i.gifer.com/8Etj.gif" alt="carregando" />
            </div>
         )}
      </div>
   );
}

export default App;
