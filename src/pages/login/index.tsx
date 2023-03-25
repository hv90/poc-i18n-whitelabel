import { useEffect, useState } from "react";
import { TbWorld } from "react-icons/tb";
import { useParams } from "react-router-dom";

import Input from "../../components/Input";
import LanguagesPanel from "../../components/LanguagesPanel";
import {
  Container,
  SignupContainer,
  LangsButtonContainer,
  SubtitleContainer,
  TitleContainer,
  FooterContainer,
} from "./styles";

export interface ILoginTranslation {
  title: string;
  email: string;
  password: string;
  login: string;
  signup: string;
  wrongLanguage: string;
  selectorGreeting: string;
}

const Login: React.FC = () => {
  const languages = ["en-us", "pt-br"];
  const [shouldShowLangsPanel, setShouldShowLangsPanel] = useState(false);
  const { language } = useParams();
  const [translation, setTranslation] = useState<ILoginTranslation>({
    title: "",
    email: "",
    password: "",
    login: "",
    signup: "",
    wrongLanguage: "",
    selectorGreeting: "",
  });

  useEffect(() => {
    switch (language) {
      default:
      case "en-us":
        import("../../i18n/locales/en-us.json").then(({ translations }) => {
          setTranslation(translations.login);
        });
        break;

      case "pt-br":
        import("../../i18n/locales/pt-br.json").then(({ translations }) => {
          setTranslation(translations.login);
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
          <h3>{translation.title}</h3>
        </div>
        <div className="thin-line" />
      </SubtitleContainer>
      <Input type="Email" inputName={translation.email} />
      <Input type="Password" inputName={translation.password} />
      <button type="button" id="login-button">
        {translation.login}
      </button>
      <FooterContainer>
        <SignupContainer>
          <div className="thin-line" />
          <div id="sign-up">
            <h3>{translation.signup}</h3>
          </div>
        </SignupContainer>
        <LangsButtonContainer>
          <h6>{translation.wrongLanguage}&nbsp;&nbsp;</h6>
          <button
            type="button"
            onClick={() => {
              setShouldShowLangsPanel((before) => !before);
            }}
          >
            <TbWorld id="langs-icon" />
          </button>
        </LangsButtonContainer>
      </FooterContainer>
      {shouldShowLangsPanel && (
        <LanguagesPanel
          languages={languages}
          onSelectLanguage={() => {
            setShouldShowLangsPanel(false);
          }}
          selectorGreeting={translation.selectorGreeting}
        />
      )}
    </Container>
  );
};

export default Login;
