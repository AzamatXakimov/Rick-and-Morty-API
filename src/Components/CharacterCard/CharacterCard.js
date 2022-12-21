import { Link } from "react-router-dom";
// import "./";


export const CharacterCard = ({image, name, status, species, origin,  location, id}) => {
    const lifeCharacters = new Map()
    lifeCharacters.set("Alive", <p className="card-life-info card-life-info-alive">{status} - {species}</p>)
    lifeCharacters.set("Dead", <p className="card-life-info card-life-info-dead">{status} - {species}</p>)
    lifeCharacters.set("unknown" , <p className="card-life-info card-life-info-unknown">{status} - {species}</p>)


    return <>
        <div className="d-flex justify-content-center align-items-center">
            <div className="card-inner rounded-2 p-4">
                <img className="mb-3" src={image} width={230} height={220} alt={name} />
                <div className="py-3 pe-3 ps-2">
                    <h2 className="card-name mb-2">
                        {name}
                    </h2>
                    {lifeCharacters.get(status)}

                    <p className="card-desc mb-1">Last known location:</p>
                    <a className="card-last-location d-inline-block mb-3" href={location?.url} target="blank">{location?.name}</a>

                    <p className="card-desc mb-1">First seen in:</p>
                    <a className="card-last-location " href={origin?.url} target="blank">{origin?.name}</a>
                </div>
            </div>
        </div>
    </>
}