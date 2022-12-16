import './App.css';
import { useState ,useEffect } from "react"
import {Card} from "./Components/Card/Card"


function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?page=1")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setData(data.results);
      setLoading(false)
    })
    .catch(err => {
      setIsError(true);
      setLoading(false)
    })
  }, []);

  return (
    <>
      <div className='container-costom'>
        <h1 className="rick-and-morty-title mt-5 text-center">The Rick adn Morty</h1>

        {loading && <h2 className="loading-text">Loading . . .</h2>}
        {isError && <h2 className="loading-text">Error . . .</h2>}

        {data.length !== 0 && (
          <ul className='row gy-4 mb-0 list-unstyled'>
            {data.map(item => (
              <Card image = {item.image}
              name = {item.name}
              status = {item.status}
              species = {item.species}
              origin = {item.origin}
              location = {item.location} />
            ))}
          </ul>
        )}
      </div>
    </>

  )
}

export default App;
