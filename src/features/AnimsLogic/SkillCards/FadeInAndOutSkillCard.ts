const FadeInAndOutSkillCard = () => {
  const cardsElems = document.querySelectorAll(".card");
  const cardsContainer = document.querySelector(".mySkills-container");
  const profileContainer = document.querySelector(
    ".profile-container"
  ) as HTMLElement;

  if (!cardsElems || !cardsContainer) return;

  const heightOfParentContainers =
    cardsContainer.clientHeight + profileContainer.clientHeight;

  if (window.scrollY - profileContainer.clientHeight < 0) return;

  const scrolledHeightOfDocument = heightOfParentContainers - window.scrollY;

  //0-100%
  const percentageOfScrolledOfSkillCardsContainer = Number(
    (
      100 -
      ((scrolledHeightOfDocument - profileContainer.clientHeight) /
        (heightOfParentContainers - profileContainer.clientHeight) +
        0.4) *
        100
    ).toFixed(2)
  );

  const intervalBetweenCards = 45 / cardsElems.length;

  if (percentageOfScrolledOfSkillCardsContainer < 70) {
    cardsElems.forEach((card, index) => {
      card.style.opacity =
        (percentageOfScrolledOfSkillCardsContainer -
          intervalBetweenCards * index) /
        intervalBetweenCards;
    });
  } else {
    cardsElems.forEach((card) => {
      card.style.opacity = 1 - (percentageOfScrolledOfSkillCardsContainer  / 80);
    });
  }
  console.log(percentageOfScrolledOfSkillCardsContainer);
};

export default FadeInAndOutSkillCard;
