import { useEffect, useRef, useState } from "react";
import { TbWorld } from "react-icons/tb";
import { GiHouse } from "react-icons/gi";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../components/Input";
import {
  Container,
  FooterContainer,
  LangsButtonContainer,
  SignupContainer,
  SubtitleContainer,
  TitleContainer,
} from "./login/styles";
import { languages } from "../routes/router";

export interface IError404Translation {
  title: string;
  subtitle: string;
  linkTitle: string;
}

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const [translation, setTranslation] = useState<IError404Translation>({
    title: "",
    subtitle: "",
    linkTitle: "",
  });

  let language = "";

  useEffect(() => {
    const location = window.location.pathname.match(/.*?\/(\w+-\w+)\//);
    if (location) {
      language = location[1];
    }

    if (
      language &&
      languages.filter((lang) => {
        return lang === language;
      }).length === 0
    ) {
      navigate(`/${language}/404/`);
    }
  }, []);

  useEffect(() => {
    switch (language) {
      default:
      case "en-us":
        import("../i18n/locales/en-us.json").then(({ translations }) => {
          setTranslation(translations.error[404]);
        });
        break;

      case "pt-br":
        import("../i18n/locales/pt-br.json").then(({ translations }) => {
          setTranslation(translations.error[404]);
        });
        break;
    }
  }, [language]);
  return (
    <Container>
      <TitleContainer>
        <h1>POC-React-App.</h1>
      </TitleContainer>
      <SubtitleContainer>
        <div id="sign-in">
          <h2>{translation.title}</h2>
          <h3>{translation.subtitle}</h3>
          <button
            type="button"
            onClick={() => {
              navigate(language ? `/${language}/` : `/`);
            }}
          >
            <GiHouse />
            {translation.linkTitle}
          </button>
        </div>
        <div className="thin-line" />
      </SubtitleContainer>
      <div style={{ visibility: "hidden" }}>
        <Input type="Email" inputName="" />
        <Input type="Password" inputName="" />
        <button type="button" id="login-button">
          &nbsp;
        </button>
        <FooterContainer>
          <SignupContainer>
            <div className="thin-line" />
            <div id="sign-up">
              <h3>&nbsp;</h3>
            </div>
          </SignupContainer>
          <LangsButtonContainer>
            <h6>&nbsp;&nbsp;</h6>
            <button type="button">
              <TbWorld id="langs-icon" />
            </button>
          </LangsButtonContainer>
        </FooterContainer>
      </div>
    </Container>
  );
};

export default NotFound;
