import React from 'react';
import './Home.css';
import SectionCategories from '../../components/sectionBookCategories/SectionCategories';
import NewestBooks from '../../components/sectionNewestBooks/SectionNewestBooks';

const Home = () => {
  return (
    <>
      <h1>Au détour des mots</h1>
      < NewestBooks />
      < SectionCategories />
    </>
  );
};

export default Home;