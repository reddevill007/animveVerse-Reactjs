import React, { useEffect, useContext, useState } from 'react';
import AnimeList from '../components/AnimeList';
import { SearchContext } from '../context/search';
import { Box, Typography } from '@material-ui/core';

const Results = () => {
    const search = useContext(SearchContext);
    const [dataExists, setDataExists] = useState(true);

    useEffect(() => {
        if (search.animeData === undefined || search.animeData.length === 0) {
            try {
                // Parsing string data of local string to json
                search.setData(JSON.parse(localStorage.getItem('myData')));
                setDataExists(true);
            } catch (error) {
                console.log(error);
                setDataExists(false);
            }
        }
        // console.log(search.animeData);
    }, [search]);
    return (
        <Box mt={2}>
            {(dataExists && <AnimeList data={search.animeData} />) || <Typography variant='h4'>Data does not exists</Typography>}
        </Box>
    )
}

export default Results