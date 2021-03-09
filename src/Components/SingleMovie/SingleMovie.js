import React from 'react';
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const SingleMovie = (props) => {
    // console.log(props.movie);
    const { id, title, poster_path } = props.movie;

    return (
        <div className="col-md-3 my-3">
            <Card>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280/${poster_path}`} />
                <Card.Body>
                    <div className="text-center">
                        <Card.Title>{title}</Card.Title>
                        <Link to={`/movie/${id}`}>
                            <Button variant="danger">Show Details</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleMovie;