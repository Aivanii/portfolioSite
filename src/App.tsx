import { useEffect } from "react";
import { MainProfile } from "./index";
import { MySkills } from "./index";

//anims
import { ProfileToTheLeftAnim } from "./index";
import { FadeInAndOutSkillCard } from "./index";
function App() {
  ProfileToTheLeftAnim();
  FadeInAndOutSkillCard();
  useEffect(() => {
    window.addEventListener("scroll", ProfileToTheLeftAnim);
    window.addEventListener("scroll", FadeInAndOutSkillCard);
  }, []);
  return (
    <>
      <MainProfile />
      <MySkills />
    </>
  );
}
export default App;
