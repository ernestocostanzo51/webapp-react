import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function SingleMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const typeConfig = {
    Science_Fiction: { label : 'Scienze fiction' , color :'#A890F0'},
    Crime: {label : 'Crime', color : '#C03028'},
    Romance: {label : 'Romance', color: '#F85888'},
    Action: {label : 'Action',color: '#F08030'}
  }

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => console.error("Errore:", err));
  }, [id]);

  const config = movie && typeConfig[movie.genre] 
    ? typeConfig[movie.genre] 
    : { label: movie?.genre, color: '#6c757d' };


  return (
    <div className="container my-5">
     
      {
      
      movie
       ? (
        <>
          <Link to="/movies" className="btn btn-outline-dark mb-4">
            ← Torna alla lista
          </Link>

          <div className="row">
            <div className="col-md-4">
              <img 
                src={`http://localhost:3000/img/${movie.image}`} 
                alt={movie.title} 
                className="img-fluid rounded shadow" 
              />
            </div>
            <div className="col-md-8">
              <h1 className="display-4">{movie.title}</h1>
              <h4 className="text-muted mb-4">Regia di {movie.director}</h4>
              <div className="bg-light p-4 rounded">
                <h5>Sinossi</h5>
                <p className="lead">{movie.abstract}</p>
              </div>
              <div className="mt-4">
                <span 
                  className="badge" 
                  style={{ backgroundColor: config.color, padding: '8px 12px' }}>
                  {config.label}
                </span>
                <span className="text-muted p-4"> Anno: {movie.release_year}</span>
              </div>
              <p className="text-center display-5 mt-5">Recensioni utenti:</p>
              
              <table class="table table-striped table-hover mt-5">
                <thead>
                  <tr>
                      <th scope="col">Nome</th>
                      <th scope="col">Voto</th>
                      <th scope="col">Recensione</th>
                      <th scope="col">Publicato il</th>
                 </tr>

                </thead>
                <tbody>

                </tbody>

              </table>

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