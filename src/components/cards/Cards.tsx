import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import "../cards/Cards.css";
import { cardsData } from "./cardsData";


interface CardsProps {
  filter: string;
}

const Cards: React.FC<CardsProps> = ({ filter }) => {
  const [activePreview, setActivePreview] = useState<string | null>(null);
 

  useEffect(() => {
    AOS.init();
  }, []);
  const card = cardsData.find((card) => card.title.toLowerCase() === filter.toLowerCase());

  if (!card) {
    return <div>No cards matched the filter.</div>;
  }

  return (
    <section className="cards-container">
      <div key={card.id} className="card-container">
        <div className="preview">
          {activePreview === card.link ? (
            <iframe
              src={card.link}
              title="Preview"
              className="preview-frame"
            ></iframe>
          ) : null}
        </div>

        <div
          className="card"
          data-aos="fade-up"
          onMouseEnter={() => setActivePreview(card.link)}
          onMouseLeave={() => setActivePreview(null)}
        >
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <Link to={card.link} aria-label={`Navigate to ${card.title}`}>
            <button>Preview</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cards;