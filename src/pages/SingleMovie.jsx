import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function SingleMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => console.error("Errore:", err));
  }, [id]);

  return (
    <div className="container my-5">
     
      {movie ? (
        <>
          <Link to="/movies" className="btn btn-outline-dark mb-4">
            ← Torna alla lista
          </Link>

          <div className="row">
            <div className="col-md-4">
              <img 
                src={movie.image} 
                alt={movie.title} 
                className="img-fluid rounded shadow" 
              />
            </div>
            <div className="col-md-8">
              <h1 className="display-4">{movie.title}</h1>
              <h4 className="text-muted mb-4">Regia di {movie.director}</h4>
              <div className="bg-light p-4 rounded">
                <h5>Sinossi</h5>
                <p className="lead">{movie.abstract || movie.description}</p>
              </div>
              <div className="mt-4">
                <span className="badge bg-primary me-2">{movie.genre}</span>
                <span className="text-muted">Anno: {movie.release_year}</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center">
         <p className="alert alert-warning">Caricamento film in corso</p>
        </div>
      )}
    </div>
  );
}