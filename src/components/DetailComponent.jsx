import React, { useEffect, useState } from 'react';
import HeaderComponent from './HeaderComponent';
import './DetailComponent.scss'
import styled from 'styled-components';

const DetailComponent = (props) => {
    const imgUrl = props.info.images.jpg.large_image_url;
    const aired = props.info.aired.string;
    const broadcast = props.info.broadcast.string;

    const { title, title_japanese, rating, score, url, episodes, background, popularity, status, mal_id, genres } = props.info;

    const [characters, setCharacters] = useState([]);
    const [image, setImage] = useState([]);
    const [similarAnime, setSimilarAnime] = useState([])

    const fetchAnimeCharacter = async () => {
        const temp = await fetch(
            `https://api.jikan.moe/v4/anime/${mal_id}/characters`
        ).then((res) => res.json());

        // console.log(temp.data.slice(0, 10));
        setCharacters(temp.data.slice(0, 20));
    };

    const fetchAnimeImages = async () => {
        const temp = await fetch(
            `https://api.jikan.moe/v4/anime/${mal_id}/pictures`
        ).then((res) => res.json());

        // console.log(temp.data);
        setImage(temp.data);
    };

    const fetchSimilarAnime = async () => {
        const temp = await fetch(
            `https://api.jikan.moe/v4/anime/${mal_id}/recommendations`
        ).then((res) => res.json());

        console.log(temp.data);
        setSimilarAnime(temp.data)
    };


    useEffect(() => {
        fetchAnimeCharacter();
        fetchAnimeImages();
        fetchSimilarAnime();
    }, []);


    return (
        <div className='detail__container' style={{ display: 'flex', flexDirection: 'column', gap: '10px', overflowX: 'hidden' }}>
            <HeaderComponent title={title} imgUrl={imgUrl} title_japanese={title_japanese} background={background} score={score} genres={genres} episodes={episodes} rating={rating} />
            <h6>{score}</h6>
            <p>#{popularity}</p>
            <p>{status}</p>
            <p>{broadcast}</p>
            <p>{aired}</p>
            <HeadContainer>
                <Head>Characters</Head>
            </HeadContainer>

            <a href={url}>My Anime List</a>
            <CharacterBox>
                {characters.map((person) => (
                    <CharacterCard key={person.character.mal_id}>
                        <ImgBox>
                            <img src={person.character.images.jpg.image_url} alt="" />
                        </ImgBox>
                        <CharacterDetail>
                            <h1>{person.character.name}</h1>
                            <p>{person.role}</p>
                        </CharacterDetail>
                    </CharacterCard>
                ))}
            </CharacterBox>

            <HeadContainer>
                <Head>Gallery</Head>
            </HeadContainer>

            <CharacterBox>
                {image.map((img) => (
                    <ImgBox key={img.mal_id}>
                        <img src={img.jpg.image_url} alt="" />
                    </ImgBox>
                ))}
            </CharacterBox>

            <HeadContainer>
                <Head>Similar Anime</Head>
            </HeadContainer>
            <CharacterBox>

                {similarAnime.map(similar => (
                    <CharacterCard key={similar.entry.mal_id}>
                        <ImgBox>
                            <img src={similar.entry.images.jpg.image_url} alt="" />
                        </ImgBox>
                        <CharacterDetail>
                            <h1>{similar.entry.title}</h1>

                        </CharacterDetail>
                    </CharacterCard>
                ))}
            </CharacterBox>


        </div>
    )
}

export default DetailComponent

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

const CharacterBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    gap: 20px;        
`;

const CharacterCard = styled.div`
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

const ImgBox = styled.div`

    height: 90%;

    img {
        height: 100%;
        border-radius: 10px;
    }
`;

const CharacterDetail = styled.div`
    display: flex;
    flex-direction: column;
    height: 90%;
    justify-content: flex-end;

    h1 {
        font-size: 18px;
        color: rgb(138, 124, 124);
        font-weight: 500;
    }

    p {
        color: rgba(25, 118, 210, 0.788);
    }
`;

const Gallery = styled.div`
    width: 300px;

    img {
        width: 100%;
        border-radius: 10px;
        object-fit: cover;
    }
`;
