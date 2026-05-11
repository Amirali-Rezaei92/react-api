import { useState } from "react";
import { useEffect } from "react";
import Card from "./components/Card";
import "./App.css";
function App() {
  const API = "https://lanciweb.github.io/demo/api/actresses/";
  const [actors, setActors] = useState([])
  useEffect(() => {
    fetch(API)
      .then(Response => Response.json())
      .then(data => {
        setActors(data);
        console.log(data);
      }
      )
      .catch(error => console.error("Error fatching data", error));
  }, [])

  return (
    <div className="d-flex flex-wrap gap-4 text-center justify-content-around p-2 background pt-5">
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
  );

}
export default App