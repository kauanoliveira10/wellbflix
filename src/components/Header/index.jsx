import "./Header.css";

export default ({ bg }) => {
   return (
      <header className={bg ? "black-bg" : ""}>
         <div className="logo">
            <a href="#!">
               <img
                  src="https://lh3.googleusercontent.com/fife/AMPSemdlk3wgagdNRDM9kAmY1ml57VoQZ0i97R_2K8OdL9f0M1sfuT_ljm5RUxqprxJneuv8_bSeLf6PB-QPp6W1HaRnsXj9tPY8R_Qsy3kKCyg4GthfSzBMA6r0swVE-6bT4Jy3jIbxBnl6uwCg1MSyYAwUi-xqI99m8kbDcAxvq8M4b_TTVRBTFbDiWwkEqS3sYCnR6i2aGfQKiJL6BLbYHSbg601IrX1eToWReVKfgPBbeCaqB4nvX4DvM7qiLID7YcXf43tC3ZlEtGLpO1PeZlHjLub2WXX4KXzUrqAJIKmE0bjgHOD7-WMxsT7OrUVHjZ5pusT-3QCmUMXNcBf0Ie6I21ZUg79teyPF4N80BZk-viQQFA9Mc4IxeTAL0-kk3wmR44cXkhuIvQhKAP3C37bAnAVcY1Bu9DyoaGRdalpYEWdSXP6KUbTs2nRPfxmjlBVLLPfu4TXTQBIl69Alaw6yhz7U6LF89M8vOBMd_GKWSJn2n09iBiWkM67futkYXcB5Ajp-Ydd3WZ6Zn5yzWHq4VP6eE-HXnbp7eRsd74Ut-2u1fqd5sut8wE5l4fUlSnid8Z1me0nwvNjbrKqPOnKSJ5gsf9XrgQU8hu21BaeSD_Wgpy2hA74mDbmho09t9lIKjgoqjbM3KxvX0Q6jNHJYA_zodTewMgGEBE9iy5C8uAoFrF-M0uM0R9v99j-cHi8Eg_CrH-BOcjjY8rENLBg5S_3yMa0FCt9sMpnKDph6-F7zZtE7iL3e4wpemqJQB7wrT3mZwFUpuSh2N7s678re9bNx_ejlc2plwxnzLDZCsHkNSkle4huiLhz14Xa03gDdf80jQ-wuJUccTHboFyuylqZWaQHC7WIfu-OFe35E8be6H3CyXXhqPAahpMNkItFEYO2tanwgf_lpQV1KUwZX0Jkn8npRYq-ya5NLGtVsL4_Wl-iIHqkNJCbPidvgrg2NMdVbsG0LA7oY2HftRLk6YAM0H1j1OiNQlfsTcm_vBGhjJmjEzY6dooQLTDdH2oaJBZ_myq9quwXZinaOR7GiVosQFz-JaMvJVWNNO4YviE0SLyub3lre=w1920-h976"
                  alt="logo"
               />
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
