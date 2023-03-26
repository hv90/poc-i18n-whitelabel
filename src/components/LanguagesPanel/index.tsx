import axios from "axios";
import { useEffect, useState } from "react";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { Container, DropdownContainer, LanguagesContainer } from "./style";

interface IProps {
  languages: string[];
  selectorGreeting: string;
  onSelectLanguage: () => void;
}

const LanguagesPanel: React.FC<IProps> = ({
  languages,
  onSelectLanguage,
  selectorGreeting,
}: IProps) => {
  const [shouldShowLanguages, setShouldShowLanguages] = useState(false);

  const navigateTo = useNavigate();

  return (
    <Container
      onClick={() => {
        if (shouldShowLanguages) setShouldShowLanguages(false);
      }}
    >
      <DropdownContainer>
        <button
          id="main-btn"
          type="button"
          onClick={() => {
            setShouldShowLanguages((before) => !before);
          }}
        >
          {selectorGreeting}
          {shouldShowLanguages ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {shouldShowLanguages && (
          <LanguagesContainer>
            {languages.map((language, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  onSelectLanguage();
                  navigateTo(`/${language}/login/`);
                }}
              >
                {language}
              </button>
            ))}
          </LanguagesContainer>
        )}
      </DropdownContainer>
    </Container>
  );
};

export default LanguagesPanel;
