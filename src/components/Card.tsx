import { Char } from "../types/customTypes"

interface CardProps {
    character: Char
}

const Card = (props: CardProps ) => {
    return(
        <div className="card-container">
            <div className="card-name-container">
                <h3>{props.character.name}</h3>
            </div>
            <div className="card-picture-container">
                <img src={props.character.picture} alt={props.character.name}/>
            </div>
        </div>
    )
}

export default Card