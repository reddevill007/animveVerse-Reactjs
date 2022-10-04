import React from 'react';
import styled from 'styled-components';
import './DetailComponent.scss'


const HeaderComponent = (props) => {

    const genraImg = {
        "Comedy": "https://i.pinimg.com/originals/15/a7/df/15a7df11dda8f73466840de4d9ec7859.jpg",
        "Adventure": "https://cdn.animeukiyo.com/wp-content/uploads/2021/07/made-in-abyss-.webp"
    }

    const Blurbox = styled.div`
        width: 100vw;
        background-image: url(${props.imgUrl});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    `;

    const Blur = styled.div`
        width: 100%;
        height: 100%;
        padding: 10px;
        display: flex;
        gap: 20px;
        backdrop-filter: blur(28px);

        .info {
            display: flex;
            flex-direction: column;
            p.ep {
                color: rgba(25, 118, 210, 0.788);
            }
        }

        h1 {
            color: rgba(25, 118, 210, 0.788);
            font-size: 40px;
            letter-spacing: 2px;
            margin-bottom: 10px;
        }

        h2 {
            color: #fff;
            font-size: 30px;
            margin-bottom: 10px;
        }

        h3 {
            color: #fff;
            font-size: 23px;
            margin-bottom: 10px;
        }

        p {
            color: #18120f;
            max-width: 130ch;
            line-height: 1.5;
            margin-bottom: 10px;
        }
    `;

    const ImageBox = styled.div`
        position: relative;

        p {
            position: absolute;
            bottom: -5px;
            right: 0px;
            border-radius: 15px;
            background: rgba(25, 118, 210, 0.788);
            border-top-right-radius: 0px;
            border-bottom-left-radius: 0px;
            padding: 3px;
        }
    `;

    const GenresBox = styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    `;

    const Button = styled.button`
        border: none;
        outline: none;
        background-image: linear-gradient(
            0deg,
            rgba(173, 80, 46, 0.3),
            rgba(173, 80, 46, 0.6)
          ),
          url(${genraImg.Comedy});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        padding: 10px 20px;
        font-size: 20px;
        border-radius: 3px;
        border: 1px solid #fff;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
  
        &:hover {
            box-shadow: 0px 0px 10px 0px rgba(237, 111, 57, 1);
        }
    `;

    const imgName = props.genres.name;


    return (
        <Blurbox className='blur__box'>
            <Blur>
                <ImageBox className="img__box">
                    <img src={props.imgUrl} alt={props.title} />
                    <p>{props.score}</p>
                </ImageBox>
                <div className="info">
                    <h2>{props.title_japanese}</h2>
                    <h1>{props.title}</h1>
                    <p>{props.background}</p>
                    <p className='ep'>{props.episodes} episodes</p>
                    <h3>Genres</h3>
                    <GenresBox>
                        {props.genres.map((genre) => (
                            <Button style={{
                                backgroundImage: `linear-gradient(
                                0deg,
                                rgba(173, 80, 46, 0.3),
                                rgba(173, 80, 46, 0.6)
                              ),
                              url(${genraImg.Comedy})`
                            }} key={genre.mal_id}>{genre.name}</Button>
                        ))}
                    </GenresBox>
                    <p>rated: {props.rating}</p>
                </div>
            </Blur>
        </Blurbox>
    )
}

export default HeaderComponent