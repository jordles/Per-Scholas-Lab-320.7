import { useState, useEffect } from "react";
import "./App.css";

// Import our components
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

function App() {
  // Constant with your API Key
  const apiKey = "aec385e";

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to get movies
  const getMovie = async(searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data); // this will update the movie state
    } catch(e) {
      console.error(e)
    }
  };

  // This will run on the first render but not on subsequent renders
  useEffect(() => {
    getMovie("Clueless"); 
  }, []); //since getMovie already updates the movie state, we don't need to pass it as a dependency because this will cause a infinite loop

  // We pass the getMovie function as a prop called moviesearch
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;