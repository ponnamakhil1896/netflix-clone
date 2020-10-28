import React, { useEffect, useState } from 'react';
import axios from './axios';

function Row({title , fetchUrl}) {
    const [movies,setMovies] = useState([]);

    useEffect(() => {
        //RUN once and dont run again
        async function fecthData() {
            const request = await axios.get(fetchUrl);
            console.log(request);
            return request;
        }
        fecthData();
    }, []);
    return(
        <div>
            <h2>{title}</h2>
            {/*container => posters*/}
        </div>
    )
}

export default Row;