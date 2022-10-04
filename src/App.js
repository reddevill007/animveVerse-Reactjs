import { useState, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Results from "./pages/Results";
import AnimeDetail from "./pages/AnimeDetail";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { SearchContext } from "./context/search";

function App() {
  const [animeData, setAnimeData] = useState([]);
  const [animeDetail, setAnimeDetail] = useState([]);

  // For setting all anime data
  const setData = (data) => {
    setAnimeData(data);
  };

  // For setting single anime derail
  const setDetail = (data) => {
    setAnimeDetail(data);
  };

  // Search Functionality
  const search = (searchTerm) => {
    return fetch(
      `https://api.jikan.moe/v4/anime?q=${searchTerm}&popularity&limit=20`
    ).then((res) => res.json());
  };

  return (
    <SearchContext.Provider
      value={{ search, animeData, setData, animeDetail, setDetail }}
    >
      <BrowserRouter>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<Results />} />
            <Route path="/anime-detail" element={<AnimeDetail />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </SearchContext.Provider>
  );
}

export default App;
