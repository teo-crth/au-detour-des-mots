import React from 'react';
import './Home.css';
import SectionBestRating from '../../components/sectionBestRating/SectionBestRating';
import SectionCategories from '../../components/sectionBookCategories/SectionCategories';
import SectionNewestBooks from '../../components/sectionNewestBooks/SectionNewestBooks';

const Home = () => {
  return (
    <>
      <h1>Au détour des mots</h1>
      < SectionBestRating />
      < SectionNewestBooks />
      < SectionCategories />
    </>
  );
};

export default Home;