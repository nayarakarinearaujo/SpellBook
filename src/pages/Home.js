import React from 'react';
import SpellList from '../components/SpellList';
import headerImage from '../images/imageback.jpg'; 

const Home = () => {
  return (
    <div>
      <header className="header">
        <img src={headerImage} alt="Spellbook Header" className="header-image" />
        <h1 className="header-title">Spellbook</h1>
      </header>
      <main className="main-content">
        <SpellList />
      </main>
    </div>
  );
};

export default Home;
