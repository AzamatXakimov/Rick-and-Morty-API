import "./Card.css";

export const Card = ({image, name, status, species, origin,  location }) => {
    const lifeCharacters = new Map()
    lifeCharacters.set("Alive", <p className="card-life-info card-life-info-alive">{status} - {species}</p>)
    lifeCharacters.set("Dead", <p className="card-life-info card-life-info-dead">{status} - {species}</p>)
    lifeCharacters.set("unknown" , <p className="card-life-info card-life-info-unknown">{status} - {species}</p>)


    return <>
        <li className="col-6">
            <div className="card-inner d-flex rounded-2">
                <img className="me-3" src={image} width={230} height={220} alt={name} />
                <div className="py-3 pe-3 ps-2">
                    <h2 className="card-name mb-2">
                        {name}
                    </h2>
                    {lifeCharacters.get(status)}

                    <p className="card-desc mb-1">Last known location:</p>
                    <a className="card-last-location d-inline-block mb-3" href={location?.url} target="blank">{location?.name}</a>

                    <p className="card-desc mb-1">First seen in:</p>
                    <a className="card-last-location" href={origin?.url} target="blank">{origin?.name}</a>
                </div>
            </div>
        </li>
    </>
}