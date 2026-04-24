import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function SingleMovie() {

  const { id } = useParams();
  const [movie, setMovie] = useState(null);
const [formData, setFormData] = useState({
  name: "",
  vote: 0,
  text: ""
});


const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};


const handleSubmit = (e) => {
  e.preventDefault();
  
  fetch(`http://localhost:3000/movies/${id}/reviews`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((data) => {

      window.location.reload(); 
    })
    .catch((err) => console.error("Errore nell'invio:", err));
};

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
              <div className="card my-5 shadow-sm">
  <div className="card-body">
    <h4>Lascia una recensione</h4>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Nome</label>
        <input 
          type="text" 
          className="form-control" 
          name="name" 
          value={formData.name} 
          onChange={handleInputChange} 
          required 
        />
      </div>
      
      <div className="mb-3">
        <label className="form-label">Voto (da 1 a 5)</label>
        <select 
          className="form-select" 
          name="vote" 
          value={formData.vote} 
          onChange={handleInputChange} 
          required
        >
          <option value="">Scegli un voto...</option>
          <option value="1">1 ★</option>
          <option value="2">2 ★</option>
          <option value="3">3 ★</option>
          <option value="4">4 ★</option>
          <option value="5">5 ★</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Recensione</label>
        <textarea 
          className="form-control" 
          name="text" 
          rows="3" 
          value={formData.text} 
          onChange={handleInputChange} 
          required
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary">Invia Recensione</button>
    </form>
  </div>
</div>
              <table className="table table-striped table-hover mt-5">
  <thead>
    <tr>
      <th scope="col">Nome</th>
      <th scope="col">Voto</th>
      <th scope="col">Recensione</th>
      <th scope="col">Pubblicato il</th>
    </tr>
  </thead>
  <tbody>
    
    {movie.reviews ? (
      movie.reviews.map((review) => (
        <tr key={review.id}>
          <td><strong>{review.name}</strong></td>
          <td>
             
             {review.vote} <span style={{ color: "gold" }}>★</span>
          </td>
          <td>{review.text}</td>
          <td>
            
            {review.created_at ? new Date(review.created_at).toLocaleDateString() : "N/D"}
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="4" className="text-center text-muted">
          Nessuna recensione disponibile per questo film.
        </td>
      </tr>
    )}
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