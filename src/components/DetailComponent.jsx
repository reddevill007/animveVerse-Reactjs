import React, { useEffect, useState } from 'react';
import HeaderComponent from './HeaderComponent';
import './DetailComponent.scss'

const DetailComponent = (props) => {
    const imgUrl = props.info.images.jpg.large_image_url;
    const aired = props.info.aired.string;
    const broadcast = props.info.broadcast.string;

    const { title, title_japanese, rating, score, url, episodes, background, popularity, status, mal_id, genres } = props.info;

    // const [character, setCharacter] = useState([]);

    // const fetchAnimeCharacter = async () => {
    //     const temp = await fetch(
    //         `https://api.jikan.moe/v4/anime/${mal_id}/characters`
    //     ).then((res) => res.json());

    //     // console.log(temp.data[0].character);
    //     setCharacter(temp.data[0].character);
    // };

    // useEffect(() => {
    //     fetchAnimeCharacter();
    //     console.log(character)
    // }, [character]);

    // console.log(character)

    return (
        <div className='detail__container' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <HeaderComponent title={title} imgUrl={imgUrl} title_japanese={title_japanese} background={background} score={score} genres={genres} episodes={episodes} rating={rating} />
            <h3>{rating}</h3>
            <h6>{score}</h6>
            <p>#{popularity}</p>
            <p>{status}</p>
            <p>{broadcast}</p>
            <p>{aired}</p>
            <h2>Characters</h2>

            <a href={url}>My Anime List</a>
            {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
                {character.map(person => (
                    <div key={person?.mal_id} className='top-box' >
                        {person?.name}
                    </div>
                ))}
            </div> */}
        </div>
    )
}

export default DetailComponent