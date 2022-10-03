function Card({ name, link, desc }) {
  return (
    <a
      href={link}
      target="_blank"
      className="card__link"
    >
      <div className="card">
        <h4 className="card_title">{name}</h4>
        <p className="card_text">
          {desc}
        </p>
      </div>
    </a>
  );
}

export default Card;
