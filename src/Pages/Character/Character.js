import { useEffect, useState } from "react";
import {useParams, useNavigate} from "react-router-dom"
import { CharacterCard } from "../../Components/CharacterCard/CharacterCard";

export const Character = () => {
    const {CharacterId} =  useParams();
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${CharacterId}`)
        .then(res => res.json())
        .then(data => {
        // (() => {
        //   if(Array.isArray(data.results)){

        //   }
        // })()
            console.log(data); 
            setData(data);
            setLoading(false)
        })
        .catch(err => {
            setIsError(true);
            setLoading(false)
        })
    }, [CharacterId]);
    return <>
        <div className="container-costom">
            <button className="btn btn-info" type="button" onClick={() => navigate(-1)}>Back</button>

            {loading && <h2 className="loading-text">Loading . . .</h2>}
            {isError && <h2 className="loading-text">Error . . .</h2>}
    
            <div className='mb-0 list-unstyled'>
                <CharacterCard image = {data.image}
                name = {data.name}
                status = {data.status}
                species = {data.species}
                origin = {data.origin}
                location = {data.location}
                id={data.id} />
            </div>
        </div>
    </>
}