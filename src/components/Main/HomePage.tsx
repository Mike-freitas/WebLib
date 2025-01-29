import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "../cards/Cards.css";
import "./HomePage.css";
import { Theme } from "../hooks/useTheme";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
  const sliderRef = React.useRef<Slider | null>(null);

  console.log('Cards component rendered with theme:', theme, 'and filter:', filter);

  useEffect(() => {
    AOS.init();
    return () => AOS.refreshHard();
  }, []);

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
  }, [theme]);

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(filter.toLowerCase()) ||
    card.description.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredCards.length === 0) {
    return <div>No cards matched the filter.</div>;
  }

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <>
      <div className="carousel-container">
        <button className="carousel-btn left" onClick={() => sliderRef.current?.slickPrev()}>
          <FaChevronLeft />
        </button>
        <Slider ref={sliderRef} {...carouselSettings} className="banner slick-slider">
          {cards.slice(0, 5).map((card) => (
            <div key={card.id} className="banner-slide">
              <img src={card.image} alt={card.title} className="carousel-image" />
              <h1>{card.title}</h1>
              <p>{card.description}</p>
            </div>
          ))}
        </Slider>
        <button className="carousel-btn right " onClick={() => sliderRef.current?.slickNext()}>
          <FaChevronRight />
        </button>
      </div>
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
              <button className="card-button"
                onClick={(e) => {
                  e.preventDefault();
                }}
                aria-label={`Navigate to ${card.title}`}
              >
                Preview
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default HomePage;
