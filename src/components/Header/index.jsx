import "./Header.css";

export default ({ bg }) => {
   return (
      <header className={bg ? "black-bg" : ""}>
         <div className="logo">
            <a href="#!">
               <img src="./src/assets/logo.png" alt="logo" />
            </a>
         </div>
         <div className="user">
            <a href="#!">
               <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                  alt="usuário"
               />
            </a>
         </div>
      </header>
   );
};
