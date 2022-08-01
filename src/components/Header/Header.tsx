import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";
import {
  ButtonContainerStyled,
  TextsContainerStyled,
  TextStyled,
  TitleImageStyled,
  TitleStyled,
  TitleTextStyled,
  TitleTextWordStyled,
} from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <>
      <div className="header-container">
        <TitleStyled className="header-container__title-container">
          <TitleImageStyled
            src="img/logo.png"
            alt="Awesome meme generator logo, it's a frog"
            className="header-container__title-image"
          />
          <TitleTextStyled className="header-container__title">
            AWESOME <TitleTextWordStyled>MEME</TitleTextWordStyled> GENERATOR
          </TitleTextStyled>
        </TitleStyled>
        <section className="header-container__section-container">
          <TextsContainerStyled className="header-container__texts-container">
            <TextStyled className="header-container__text">
              Click the “Generate meme” button to get a random meme, if you like
              a meme you can click the{" "}
              <FontAwesomeIcon
                icon={faStar}
                className="header-container__text-icon"
              />{" "}
              button to move it into your favourite pages.
            </TextStyled>
            <TextStyled className="header-container__text">
              In your favourite pages you can unlike a meme, edit it and also
              create your own meme.
            </TextStyled>
          </TextsContainerStyled>
          <ButtonContainerStyled className="header-container__buttons-container">
            <Button actionOnClick={() => {}} text="Generate Meme" />
            <Button actionOnClick={() => {}} text="My Favorites" />
          </ButtonContainerStyled>
        </section>
      </div>
    </>
  );
};
export default Header;
