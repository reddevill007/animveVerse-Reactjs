import React from 'react'
import styled from 'styled-components'

const TopManga = ({ topManga }) => {
    return (
        <div>
            <HeadContainer>
                <Head>Top Manga</Head>
            </HeadContainer>
            <TopBox>
                {topManga.map(manga => (
                    <TopCard key={manga.mal_id}>
                        <ReviewBox>
                            <img src={manga.images.jpg.image_url} alt="" />
                            <p>&#9733; {manga.score}</p>
                        </ReviewBox>
                        <TopDetail>
                            <h3>{manga.title.length > 20 ? `${manga.title.substring(0, 20)}...` : manga.title}</h3>
                            <p>{manga.chapters ? manga.chapters : '0'} Chapters</p>
                        </TopDetail>

                    </TopCard>
                ))}
            </TopBox>
        </div>
    )
}

export default TopManga

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