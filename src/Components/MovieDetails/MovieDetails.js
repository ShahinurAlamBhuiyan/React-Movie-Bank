import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {  Button } from 'react-bootstrap'
import './MovieDetails.css'

const MovieDetails = () => {
    const [details, setDetails] = useState([])
    const apiKey = '870967436c1517d581daf3b245495790'
    const { id } = useParams();
    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [id])
    
    return (
        <div className="container">
            <div className="row pt-4 mt-5">
                <div className="col-md-6">
                    <img className='img-fluid' src={`https://image.tmdb.org/t/p/w1280/${details.poster_path}`} alt=""/>
                </div>
                <div className="col-md-6">
                    <h3>{details.title}</h3>
                    <h5>{details.tagline}</h5>
                    <h4>Language : {details.original_language}</h4>
                    <p>Time : {details.runtime} min</p>
                    <p>Release date : {details.release_date}</p>
                    <p>{details.overview}</p>
                    <Button variant='danger' ><a href={details.homepage} target='_blank'>Watch</a></Button>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;