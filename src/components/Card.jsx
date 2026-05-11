import "./Card.css";

function Card({ name, image, birth, nationality, bio, awards }) {
    return (
        <div className="card1">
            <img src={image} alt={name} className="card1-img" />

            <h2>{name}</h2>

            <p className="meta">
                {birth} • {nationality}
            </p>

            <p className="bio">{bio}</p>

            <p><strong>Awards:</strong><br /> {awards}</p>
        </div>
    );
}

export default Card;
