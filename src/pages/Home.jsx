import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../context/search';
import { FormControl, Input, IconButton, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import './Home.scss'
import TopAnime from '../components/TopAnime';
import TopManga from '../components/TopManga';

const Home = () => {
    const navigate = useNavigate()
    const search = useContext(SearchContext);
    const [input, setInput] = useState('');

    const [topAnime, setTopAnime] = useState([]);
    const [topManga, setTopManga] = useState([]);

    const getTopAnime = async () => {
        const temp = await fetch(
            `https://api.jikan.moe/v4/top/anime`
        ).then((res) => res.json());

        setTopAnime(temp.data.slice(0, 10));
    };

    const getTopManga = async () => {
        const temp = await fetch(
            `https://api.jikan.moe/v4/top/manga`
        ).then((res) => res.json());

        setTopManga(temp.data.slice(0, 10));
    };

    useEffect(() => {
        getTopAnime();
        getTopManga();
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
                    <form className='home__form'>
                        <FormControl type="submit" className='home__formControl'>
                            <Input placeholder='Search for your favorite anime...' value={input} onChange={(event) => setInput(event.target.value)} className='home__input' />
                            <IconButton className='home__iconButton' varient="contained" color="primary" type='submit' disabled={!input} onClick={handleSearch}>
                                <SearchIcon />
                            </IconButton>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
            <TopAnime topAnime={topAnime} />
            <TopManga topManga={topManga} />
        </Grid>
    )
}

export default Home