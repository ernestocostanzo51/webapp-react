export default function Movies(){
    const [books, setBooks] = useState([]);

  useEffect(() => {
    
    fetch("http://localhost:3000/movies") 
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      })
      .catch((err) => console.error("Errore nel recupero film:", err));
  }, []);
    return(
      
    )
}