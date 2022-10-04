import React from 'react';
import AnimeCard from './AnimeCard';
import styled from 'styled-components';

const AnimeList = (props) => {
    return (
        <SearchContainer>
            {props.data.map((anime) => (
                <AnimeCard key={anime.mal_id} anime={anime} />
            ))}
        </SearchContainer>
    )
}

export default AnimeList


const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
`;

const HeadContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 20px 0;
`;

const Head = styled.h1`
    border-radius: 10px;
    width: fit-content;
    text-align: center;
    padding: 15px;
    border: 2px solid #fff;
    color: #fff;
    background-image:  linear-gradient(
        0deg,
        rgba(173, 80, 46, 0.3),
        rgba(173, 80, 46, 0.6)
      ), url('https://i.kym-cdn.com/photos/images/original/000/595/246/309.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;