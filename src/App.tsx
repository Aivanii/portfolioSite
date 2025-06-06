import { useEffect } from "react";
import { MainProfile } from "./index";
import { MySkills } from "./index";
import { SpaceForFadeMainProfileToTheRight } from "./index";
import { MyProjects } from "./index";

//anims
import { ProfileToTheLeftAnim } from "./index";
import { FadeInAndOutSkillCard } from "./index";
import { ProfileToTheRight } from "./index";
function App() {
  useEffect(() => {
    const handleScrollProfile = () => {
      ProfileToTheLeftAnim();
      ProfileToTheRight();
    };

    const handleScrollFade = () => {
      FadeInAndOutSkillCard();
    };

    window.addEventListener("scroll", handleScrollProfile);
    window.addEventListener("scroll", handleScrollFade);

    return () => {
      window.removeEventListener("scroll", handleScrollProfile);
      window.removeEventListener("scroll", handleScrollFade);
    };
  }, []);
  return (
    <>
      <MainProfile />
      <MySkills />
      <SpaceForFadeMainProfileToTheRight />
      <MyProjects />
    </>
  );
}
export default App;
