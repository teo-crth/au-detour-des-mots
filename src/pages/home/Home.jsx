import React from 'react';
import './Home.css';
import SectionCategories from '../../components/sectionBookCategories/SectionCategories';
import NewestBooks from '../../components/sectionNewestBooks/SectionNewestBooks';

const Home = () => {
  return (
    <>
      <h1 className='home-title'>Au détour des mots</h1>
      < SectionCategories />
      < NewestBooks />
    </>
  );
};

export default Home;