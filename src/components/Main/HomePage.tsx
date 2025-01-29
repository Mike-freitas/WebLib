// HomePage.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import "../cards/Cards.css";
import { Theme } from "../hooks/useTheme";

interface CardData {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
  previewUrl?: string;
}

interface HomePageProps {
  filter: string;
  theme: Theme;
  cards: CardData[];
}

const HomePage: React.FC<HomePageProps> = ({ filter, theme, cards }) => {
  const [activePreview, setActivePreview] = useState<string | null>(null);
  console.log('Main component rendered with theme:', theme, 'and filter:', filter);

  useEffect(() => {
    AOS.init();
    return () => AOS.refreshHard();
  }, []);

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(filter.toLowerCase()) ||
    card.description.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredCards.length === 0) {
    return <div>No cards matched the filter.</div>;
  }

  return (
    <section className="cards-container">
      {filteredCards.map((card) => (
        <div key={card.id} className="card-container">
          <div className="preview">
            {activePreview === card.link ? (
              <iframe
                src={card.previewUrl}
                title="Preview"
                className="preview-frame"
              />
            ) : (
              <div className="preview-placeholder">
                Passe o mouse sobre o card para ver o preview
              </div>
            )}
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
      ))}
    </section>
  );
};

export default HomePage;