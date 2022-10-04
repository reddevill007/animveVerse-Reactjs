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
