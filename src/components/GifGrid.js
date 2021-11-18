import React from 'react'

export const GifGrid = ({category}) => {

    const getGifs = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=batman&limit=10&api_key=AnCjC7Tgzj8tJO9Jj91ImRnw3mdlMsqp'
        const resp = await fetch(url);
        const {data} = await resp.json();



        console.log(data);
    }

    getGifs();

    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}
