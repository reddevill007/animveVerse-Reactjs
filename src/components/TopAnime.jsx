import React, { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../context/search'

const TopAnime = ({ topAnime }) => {
    const navigate = useNavigate();
    const search = useContext(SearchContext);

    const onClickHandler = (id) => {
        fetch(`https://api.jikan.moe/v4/anime/${id}`)
            .then((res) => res.json()
                .then((data) => {
                    search.setDetail(data);
                    localStorage.setItem('animeDetailData', JSON.stringify(data));
                    navigate(`/anime-detail`)
                }));
    };
    return (
        <div>
            <HeadContainer>
                <Head>Top Anime</Head>
            </HeadContainer>
            <TopBox>
                {topAnime.map(anime => (
                    <TopCard key={anime.mal_id}>
                        <ReviewBox>
                            <img src={anime.images.jpg.image_url} alt="" />
                            <p>&#9733; {anime.score}</p>
                        </ReviewBox>
                        <TopDetail>
                            <h3>{anime.title.length > 20 ? `${anime.title.substring(0, 20)}...` : anime.title}</h3>
                            <p>{anime.episodes} episodes</p>
                            <AnimeBtn style={{ marginBottom: 0 }} onClick={() => { onClickHandler(anime.mal_id) }}>Learn More</AnimeBtn>
                        </TopDetail>
                    </TopCard>
                ))}
            </TopBox>
        </div>
    )
}

export default TopAnime

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
      ), url('https://wallpaperaccess.com/full/1097651.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

const TopBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
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
    }
`;

const TopDetail = styled.div`
    display: flex;
    flex-direction: column;
    height: 90%;
    justify-content: flex-end;
    gap: 5px;

    h3 {
        font-size: 18px;
        color: rgb(138, 124, 124);
        font-weight: 500;
    }

    p {
        color: rgba(25, 118, 210, 0.788);
    }
`;

const AnimeBtn = styled.button`
    border-radius: 7px;
    padding: 7px;
    color: black;
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.1)
    );
    border: 2px solid #fff;
`