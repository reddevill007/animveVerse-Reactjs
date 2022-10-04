import React from 'react';
import styled from 'styled-components';
import { AiFillHome } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'


const Navigation = () => {
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate('/')
    };

    return (
        <Navbox>
            <IconBox>
                <ul>
                    <li onClick={onClickHandler} ><AiFillHome /> Home</li>
                    <li><AiFillHome /> News</li>
                    <li><AiFillHome /> About</li>
                    <li><AiFillHome /> Manga</li>
                </ul>
            </IconBox>
        </Navbox>
    )
}

export default Navigation

const Navbox = styled.div`
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    border: 2px solid #fff;
    border-radius: 15px;
    padding: 20px;
    z-index: 10;
    background-image:  linear-gradient(
        0deg,
        rgba(173, 80, 46, 0.3),
        rgba(173, 80, 46, 0.6)
    ), url('https://cdnb.artstation.com/p/marketplace/presentation_assets/000/565/291/large/file.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;


const IconBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;

    ul {
        display: flex;
        justify-content: center;
        gap: 40px;
        align-items: center;
        color: #fff;
        list-style: none;
    }
`;