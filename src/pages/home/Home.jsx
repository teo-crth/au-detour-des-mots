import React from 'react';
import './Home.css';
import SectionBestRating from '../../components/sectionBestRating/SectionBestRating';
import SectionCategories from '../../components/sectionBookCategories/SectionCategories';
import SectionNewestBooks from '../../components/sectionNewestBooks/SectionNewestBooks';
import SearchBar from '../../components/searchBar/SearchBar';

const Home = () => {
  return (
    <>
      <h1 className='home-title'>Au détour des mots</h1>
      < SectionCategories />
      < SectionBestRating />
      < SectionNewestBooks />
    </>
  );
};

export default Home;