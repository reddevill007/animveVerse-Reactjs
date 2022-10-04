import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../context/search'
import { Typography, Link, Paper, ImageListItem, Grid } from '@material-ui/core'
import './AnimeCard.scss'
import styled from 'styled-components'

const AnimeCard = (props) => {
    const navigate = useNavigate();
    const search = useContext(SearchContext);

    const title = props.anime.title;
    const imageUrl = props.anime.images.jpg.large_image_url;
    // const synopsis = props.anime.synopsis.length > 50 ? `${props.anime.synopsis.substring(0, 50)}...` : props.anime.synopsis;
    const anime_id = props.anime.mal_id;
    const score = props.anime.score ? props.anime.score : '0';

    const onClickHandler = () => {
        fetch(`https://api.jikan.moe/v4/anime/${anime_id}`)
            .then((res) => res.json()
                .then((data) => {
                    search.setDetail(data);
                    localStorage.setItem('animeDetailData', JSON.stringify(data));
                    navigate(`/anime-detail`)
                }));
    };
    return (

        <TopBox>
            <TopCard >
                <ReviewBox>
                    <img src={imageUrl} alt={title} />
                    <p>{score}</p>
                </ReviewBox>
                <TopDetail>
                    <h3>{title.length > 20 ? `${title.substring(0, 20)}...` : title}</h3>
                    {/* <p>{manga.chapters ? manga.chapters : '0'} Chapters</p> */}
                    <button style={{ marginBottom: 0 }} onClick={onClickHandler}>Learn More</button>

                </TopDetail>

            </TopCard>
        </TopBox>

    )
}

export default AnimeCard

const TopBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;        
`;

const TopCard = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    align-items: center;
    width: 300px;
    height: 200px;
    border-radius: 15px;
    padding: 8px;
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.1)
    )
`;

const ReviewBox = styled.div`

    position: relative;
    height: 90%;

    img {
        height: 100%;
        max-width: 100px;
        object-fit: cover;
        border-radius: 10px;
    }

    p {
        position: absolute;
        bottom: 0px;
        right: 0px;
        border-radius: 10px;
        background: rgba(25, 118, 210, 0.788);
        border-top-right-radius: 0px;
        border-bottom-left-radius: 0px;
        padding: 3px;
}`;

const TopDetail = styled.div`
    display: flex;
    flex-direction: column;
    height: 90%;
    justify-content: flex-end;

    h3 {
        font-size: 18px;
        color: rgb(138, 124, 124);
        font-weight: 500;
    }

    p {
        color: rgba(25, 118, 210, 0.788);
    }
`;