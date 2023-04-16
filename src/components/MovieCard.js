import React from "react";
import { Link } from 'react-router-dom';
function MovieCard({ title, description, posterURL, rating, movie }) {
    return (
      <div>
        <h2>{title}</h2>
        <img src={posterURL} alt={title} />
        <p>{description}</p>
        <p>Rating: {rating}</p>
        <iframe src={movie.trailerLink} title={`${movie.title} Trailer`} width="560" height="315" frameBorder="0" allowFullScreen></iframe>
      <Link to="/">Back to Home</Link>
      </div>
    );
  }
  export default MovieCard;