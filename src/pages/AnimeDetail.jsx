import { Typography } from '@material-ui/core';
import React, { useEffect, useContext, useState } from 'react'
import DetailComponent from '../components/DetailComponent';
import { SearchContext } from '../context/search'


const AnimeDetail = () => {
    const search = useContext(SearchContext);
    const [dataExists, setDataExists] = useState(true);

    useEffect(() => {
        if (search.animeDetail === undefined || search.animeDetail.length === 0) {
            try {
                // Parsing string data of local string to json
                search.setDetail(JSON.parse(localStorage.getItem('animeDetailData')));
                setDataExists(true);
            } catch (error) {
                console.log(error);
                setDataExists(false);
            }
        }
        // console.log(search.animeDetail);
    }, [search]);

    return (
        <div>
            {(dataExists && <DetailComponent info={search.animeDetail.data} />) || <Typography variant='h4' component='h2'>No data exists</Typography>}
        </div>
    )
}

export default AnimeDetail