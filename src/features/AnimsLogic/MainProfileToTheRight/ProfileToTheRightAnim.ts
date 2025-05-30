const ProfileToTheRight = () => {
  const profileContainer = document.querySelector(
    ".profile-container"
  ) as HTMLElement;
  const SpaceElem = document.querySelector(".SpaceToTheRight") as HTMLElement;
  const ProfileElem = document.querySelector(".wrap") as HTMLElement;
  const cardsContainer = document.querySelector(".mySkills-container");

  if (!profileContainer || !SpaceElem || !ProfileElem || !cardsContainer)
    return;

  const heightOfParentContainers =
    cardsContainer.clientHeight +
    profileContainer.clientHeight +
    SpaceElem.clientWidth;

  if (
    window.scrollY <
    cardsContainer.clientHeight + profileContainer.clientHeight
  )
    return;
  if (window.scrollY > heightOfParentContainers) return;

  const percentageOfScrolledOfSkillCardsContainer = Number(
    100 *
      ((window.scrollY - heightOfParentContainers + SpaceElem.clientHeight) /
        SpaceElem.clientHeight) +
      66
  );
  const leftPxCount =
    (window.innerWidth / 100) * percentageOfScrolledOfSkillCardsContainer -
      320 >
    window.innerWidth - 320
      ? window.innerWidth - 320
      : (window.innerWidth / 100) * percentageOfScrolledOfSkillCardsContainer -
        320;
  ProfileElem.style.left = `${leftPxCount}px`;
};

export default ProfileToTheRight;
