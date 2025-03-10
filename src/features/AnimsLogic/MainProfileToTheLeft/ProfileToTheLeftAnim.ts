const ProfileToTheLeftAnim = () => {
  // Получаем высоту видимой части окна
  const windowHeight = window.innerHeight;

  const profileContainer = document.querySelector(".profile-container");
  const ProfileElem = document.querySelector(".wrap");
  if (!profileContainer || !ProfileElem) return;

  // Получаем высоту элемента profile-container
  const containerHeight = profileContainer.offsetHeight;
  // Получаем текущую позицию прокрутки
  const scrollTop = window.scrollY;

  // Вычисляем, когда прокрутка достигает 50% высоты profile-container
  const containerScrollThreshold = containerHeight * 0.5;

  //LEFT
  setLeft(scrollTop, containerScrollThreshold, ProfileElem, containerHeight);
  //WIDTH
  setWidth(scrollTop, containerScrollThreshold, ProfileElem, containerHeight);
  //HEIGHT
  setHeight(scrollTop, containerScrollThreshold, ProfileElem, containerHeight);
};

const setHeight = (
  scrollTop,
  containerScrollThreshold,
  ProfileElem,
  containerHeight
) => {
  if (scrollTop < containerScrollThreshold) {
    ProfileElem.style.height = "60vh";
  } else if (
    scrollTop >= containerScrollThreshold &&
    scrollTop <= containerHeight
  ) {
    const newHeight = 100 * (scrollTop / containerHeight);
    console.log(`
  scrollTop: ${scrollTop},
  containerScrollThreshold: ${containerScrollThreshold},
  ProfileElem: ${ProfileElem},
  containerHeight: ${containerHeight}
        `);
    ProfileElem.style.height = newHeight < 60 ? "60vh" : `${newHeight}vh`;
    console.log("newHeight:", newHeight, "%");
  } else {
    ProfileElem.style.height = "100vh";
  }
};

const setWidth = (
  scrollTop,
  containerScrollThreshold,
  ProfileElem,
  containerHeight
) => {
  const elemStandartWidth = window.innerWidth * 0.5;
  // Если прокрутка меньше 25% высоты контейнера, устанавливаем width на стандартное значение
  if (scrollTop < containerScrollThreshold) {
    ProfileElem.style.width =
      elemStandartWidth > 320 ? `${elemStandartWidth}px` : "320px";
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
        400;
    ProfileElem.style.width = newWidth > 320 ? `${newWidth}px` : "320px";
  }
  // Если прокрутка превышает высоту контейнера, устанавливаем left на 0%
  else {
    ProfileElem.style.width = "320px";
  }
};

const setLeft = (
  scrollTop,
  containerScrollThreshold,
  ProfileElem,
  containerHeight
) => {
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
