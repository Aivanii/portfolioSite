import { useEffect } from "react";
import { MainProfile } from "./index";
import { MySkills } from "./index";

//anims
import { ProfileToTheLeftAnim } from "./index";
function App() {
  ProfileToTheLeftAnim();
  useEffect(() => {
    window.addEventListener("scroll", ProfileToTheLeftAnim);
  }, []);
  return (
    <>
      <MainProfile />
      <MySkills />
    </>
  );
}
export default App;
