import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
export default function Movies(){
    const [movies, setMovies] = useState([]);
    

  useEffect(() => {
    
    fetch("http://localhost:3000/movies") 
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => console.error("Errore nel recupero film:", err));
  }, []);
    return(
    <div className="container">
      <h2 className="my-4">Lista Film</h2>
      <div className="row g-4">
        {movies.map((movie) => (
          <div className="col-md-4" key={movie.id}>
            <div className="card h-100">
              <img 
                src={`http://localhost:3000/img/${movie.image}`} 
                className="card-img-top" 
                alt={movie.title} 
                style={{ height: '300px', objectFit: 'cover' }} />
              <div className="card-body">
                <div className="mb-3">
                <strong>Voto:</strong> {movie.avg_vote} 
               {+movie.avg_vote >= 1 && <span style={{ color: "gold" }}>★</span>}
    {+movie.avg_vote >= 2 && <span style={{ color: "gold" }}>★</span>}
    {+movie.avg_vote >= 3 && <span style={{ color: "gold" }}>★</span>}
    {+movie.avg_vote >= 4 && <span style={{ color: "gold" }}>★</span>}
    {+movie.avg_vote >= 5 && <span style={{ color: "gold" }}>★</span>}
                </div>
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text text-muted">{movie.director}</p>
                <NavLink to={`/movies/${movie.id}`} className="btn btn-primary">Vedi Dettagli</NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      {movies.length === 0 && (
        <p className="alert alert-warning">Caricamento film in corso o nessun film trovato...</p>
      )}
    </div>
    )
    
}