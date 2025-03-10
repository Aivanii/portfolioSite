interface InterfaceProperties {
  scrollTop: number;
  containerScrollThreshold: number;
  ProfileElem: HTMLElement;
  containerHeight: number;
}
const ProfileToTheLeftAnim = () => {
  const profileContainer = document.querySelector(
    ".profile-container"
  ) as HTMLElement;
  const ProfileElem = document.querySelector(".wrap") as HTMLElement;
  if (!profileContainer || !ProfileElem) return;

  const containerHeight = profileContainer.offsetHeight;
  if (!containerHeight) return;
  const scrollTop = window.scrollY;

  const containerScrollThreshold = containerHeight * 0.5;

  setLeft({
    scrollTop: scrollTop,
    containerScrollThreshold: containerScrollThreshold,
    ProfileElem: ProfileElem,
    containerHeight: containerHeight,
  });
  setWidth({
    scrollTop: scrollTop,
    containerScrollThreshold: containerScrollThreshold,
    ProfileElem: ProfileElem,
    containerHeight: containerHeight,
  });
  setHeight({
    scrollTop: scrollTop,
    containerScrollThreshold: containerScrollThreshold,
    ProfileElem: ProfileElem,
    containerHeight: containerHeight,
  });
};

const setHeight = ({
  scrollTop,
  containerScrollThreshold,
  ProfileElem,
  containerHeight,
}: InterfaceProperties): void => {
  if (scrollTop < containerScrollThreshold) {
    ProfileElem.style.height = "60vh";
  } else if (
    scrollTop >= containerScrollThreshold &&
    scrollTop <= containerHeight
  ) {
    const newHeight = 120 * (scrollTop / containerHeight);
    if (newHeight < 60) {
      ProfileElem.style.height = "60vh";
    } else if (newHeight > 100) {
      ProfileElem.style.height = "100vh";
    } else {
      ProfileElem.style.height = `${newHeight}vh`;
    }
  } else {
    ProfileElem.style.height = "100vh";
  }
};

const setWidth = ({
  scrollTop,
  containerScrollThreshold,
  ProfileElem,
  containerHeight,
}: InterfaceProperties): void => {
  const elemStandartWidth = window.innerWidth * 0.5;
  // Если прокрутка меньше 25% высоты контейнера, устанавливаем width на стандартное значение
  if (scrollTop < containerScrollThreshold) {
    ProfileElem.style.width =
      elemStandartWidth> 320 ? `${elemStandartWidth}px` : "320px";
  }
  // Если прокрутка находится между 25% и полной высотой контейнера
  else if (
    scrollTop >= containerScrollThreshold &&
    scrollTop <= containerHeight
  ) {
    // Вычисляем новое значение width
    const newWidth =
      elemStandartWidth -
      ((scrollTop - containerScrollThreshold) /
        (containerHeight - containerScrollThreshold)) *
        400 * 0.8 ;
    ProfileElem.style.width = newWidth > 320 ? `${newWidth}px` : "320px";
  }
  // Если прокрутка превышает высоту контейнера, устанавливаем left на 0%
  else {
    ProfileElem.style.width = "320px";
  }
};

const setLeft = ({
  scrollTop,
  containerScrollThreshold,
  ProfileElem,
  containerHeight,
}: InterfaceProperties): void => {
  // Если прокрутка меньше 25% высоты контейнера, устанавливаем left на 25%
  if (scrollTop < containerScrollThreshold) {
    ProfileElem.style.left = "25%";
  }
  // Если прокрутка находится между 25% и полной высотой контейнера
  else if (
    scrollTop >= containerScrollThreshold &&
    scrollTop <= containerHeight
  ) {
    // Вычисляем новое значение left от 25% до 0%
    const leftPosition =
      25 -
      ((scrollTop - containerScrollThreshold) /
        (containerHeight - containerScrollThreshold)) *
        50;
    ProfileElem.style.left = leftPosition <= 0 ? "0%" : `${leftPosition}%`;
  }
  // Если прокрутка превышает высоту контейнера, устанавливаем left на 0%
  else {
    ProfileElem.style.left = "0%";
  }
};

export default ProfileToTheLeftAnim;
