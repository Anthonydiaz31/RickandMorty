import React, { useEffect, useState } from "react";
import "./App.css";
import Characters from "./components/Characters";
 import Episodes from './components/Episodes';
import Footer from "./components/Footer";
import Location from "./components/Location";
import { BrowserRouter as Router, Routes,Route,} from "react-router-dom";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";


function App() {
  return(
    <Router>
       <Navbar />
       <Routes>
         <Route path="/" element={<HomePage />}/>
          <Route path="/episode" element={<Episodes />}/>
          <Route path="/location" element={<Location />} />
       </Routes>
    </Router>
  )
}

const HomePage = () => {
  
    // Control the state of our Searchbar,Footer,and Cards
    const [page, setPage] = useState(0);
    const [characters, setCharacters] = useState([]);
    const [filter, setFilter] = useState("");
    const [pageCount, setPageCount] = useState(0);
  
    //GET the character data from api and render it using useEffect
  
    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${page}&name=${filter}`
        );
        const data = await res.json();
        setCharacters(data.results);
        setPageCount(data.info.pages);
        
      };
      fetchData();
    }, [filter, page]);
  
    
    //Render content and pass over props from API
  
    return (
      <div>
        <Searchbar setFilter={setFilter} 
        setPageCount={setPageCount}
        setPage={setPage}
        />
      
        {characters  ? (      
          <>
            {characters.map((character) => {
              return (
                <Characters
                  key={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  img={character.image}
                />
              );
            })}
          </>
        ) : (
          <>
            <h2>Sorry no matches found. Please try again!</h2>
          </>
        )}

        <Footer setPage={setPage} page={page} pageCount={pageCount} />
      </div>
      
    );
  }




export default App;
