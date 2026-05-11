import { useState } from "react";
import { useEffect } from "react";
import Card from "./components/Card";
import "./App.css";
import Filter from './components/Filter';

function App() {
  const API_ACTRESSES = "https://lanciweb.github.io/demo/api/actresses/";
  const API_ACTORS = "https://lanciweb.github.io/demo/api/actors/";
  const [actors, setActors] = useState([])
  const [filter, setFilter] = useState("all")
  useEffect(() => {
    if (filter === "actresses") {
      fetch(API_ACTRESSES)
        .then(response => response.json())
        .then(data => setActors(data))
        .catch(error => console.error("Error fetching actresses", error));
    }

    else if (filter === "actors") {
      fetch(API_ACTORS)
        .then(response => response.json())
        .then(data => setActors(data))
        .catch(error => console.error("Error fetching actors", error));
    }

    else {
      Promise.all([
        fetch(API_ACTORS).then(response => response.json()),
        fetch(API_ACTRESSES).then(response => response.json())
      ])
        .then(([men, women]) => {
          setActors([...men, ...women]);
        })
        .catch(error => console.error("Error fetching both lists", error));
    }
  }, [filter]);

  return (
    <div className="background">
      <div className=" p-2 pt-5">
        <Filter filter={filter} 
          setFilter={setFilter} />
      </div>
      <div className="d-flex flex-wrap gap-4 text-center justify-content-around p-2  pt-5">
        {actors.map((actor, index) => (
          <Card
            key={index}
            name={actor.name}
            image={actor.image}
            birth={actor.birth_year}
            nationality={actor.nationality}
            bio={actor.biography}
            awards={actor.awards}
          />
        ))}
      </div>
    </div>
  );

}
export default App