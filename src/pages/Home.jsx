import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../context/search';
import { AiOutlineSearch } from 'react-icons/ai'
import { Grid } from '@material-ui/core';
import './Home.scss'
import TopAnime from '../components/TopAnime';
import TopManga from '../components/TopManga';
import Recommendation from '../components/Recommendation';

const Home = () => {
    const navigate = useNavigate()
    const search = useContext(SearchContext);
    const [input, setInput] = useState('');

    const [topAnime, setTopAnime] = useState([]);
    const [topManga, setTopManga] = useState([]);
    const [recommend, setRecommend] = useState([]);

    const getTopAnime = async () => {
        const temp = await fetch(
            `https://api.jikan.moe/v4/top/anime`
        ).then((res) => res.json());

        setTopAnime(temp.data?.slice(0, 10));
    };

    const getTopManga = async () => {
        const temp = await fetch(
            `https://api.jikan.moe/v4/top/manga`
        ).then((res) => res.json());

        setTopManga(temp.data.slice(0, 10));
    };

    const getRandomAnime = async () => {
        const temp = await fetch(
            `https://api.jikan.moe/v4/recommendations/anime`
        ).then((res) => res.json());
        console.log(temp.data.slice(0, 10));
        setRecommend(temp.data.slice(0, 10));
    };

    useEffect(() => {
        getTopAnime();
        getTopManga();
        getRandomAnime();
    }, [])

    const handleSearch = (event) => {
        event.preventDefault();
        search.search(input).then((data) => {
            // console.log(data.data);
            search.setData(data.data);
            localStorage.setItem('myData', JSON.stringify(data.data));
            navigate('/results');
        })
    }

    return (
        <Grid container direction='column' justifyContent='center' alignContent='center' alignItems='center'>
            <Grid item>
                <Grid item>
                    <form className='home__form' onSubmit={handleSearch}>
                        <div className='home__formControl'>
                            <input placeholder='Search for your favorite anime...' value={input} onChange={(event) => setInput(event.target.value)} className='home__input' />
                            <button type="submit" className='home__iconButton' varient="contained" color="primary" disabled={!input} onClick={handleSearch} >
                                <AiOutlineSearch />
                            </button>
                        </div>
                    </form>
                </Grid>
            </Grid>
            <TopAnime topAnime={topAnime} />
            <TopManga topManga={topManga} />
            <Recommendation recommend={recommend} />
        </Grid>
    )
}

export default Home