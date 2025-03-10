import { useEffect } from "react";

const MySkills = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".skillCard");
    const container = document.querySelector(".skillCardMainContainer");
    const startOffset = container.offsetTop;
    const animationRange = container.offsetHeight;

    function updateCards() {
      const scrollPosition = window.pageYOffset - startOffset;
      const progress = Math.min(scrollPosition / animationRange, 1);

      cards.forEach((card, index) => {
        const cardProgress = Math.min(progress * 2 - index * 0.2, 1);
        const opacity = Math.max(0, cardProgress);

        card.style.opacity = opacity;
        card.style.transform = `translateY(${50 * (1 - opacity)}px)`;
      });
    }

    window.addEventListener("scroll", updateCards);
    updateCards();
  }, []);
  return (
    <div className="skillCardMainContainer">
      <div className="skillCardsHolder">
        <h3>My skills</h3>
        <div></div>
        <div className="skillCard">React</div>
        <div className="skillCard">TypeScript</div>
        <div className="skillCard">Vite</div>
        <div className="skillCard">Webpack</div>
        <div className="skillCard">Tailwind</div>
        <div className="skillCard">SCSS</div>
      </div>
    </div>
  );
};

export default MySkills;
