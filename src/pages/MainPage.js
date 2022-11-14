import dark_hero_image from "../assets/images/bg-desktop-dark.jpg";
import desktop_light_hero_image from "../assets/images/bg-desktop-light.jpg";
import mobile_dark_hero_image from "../assets/images/bg-mobile-dark.jpg";
import mobile_light_hero_image from "../assets/images/bg-mobile-light.jpg";
import ToDo from "../components/ToDo";

import "../scss/components/_mainPage.scss";

function MainPage(props) {
  let theme = props.theme;
  return (
    <div className="main">
      <div className="main-hero">
        <div className="main-hero__desktop">
          <img
            src={
              props.theme == "dark" ? dark_hero_image : desktop_light_hero_image
            }
          ></img>
        </div>
        <div className="main-hero__mobile">
          <img
            src={
              props.theme == "dark"
                ? mobile_dark_hero_image
                : mobile_light_hero_image
            }
          ></img>
        </div>
      </div>
      <ToDo theme={theme} />
    </div>
  );
}
export default MainPage;
