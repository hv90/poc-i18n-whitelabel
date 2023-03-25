import { useEffect, useState } from "react";

import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLock } from "react-icons/ai";

import { Container, InputBox, Placeholder } from "./styles";

interface Props {
  type: "Email" | "Password" | "";
  inputName: string;
}

const Input: React.FC<Props> = ({ type, inputName }: Props) => {
  const Icon = type === "Email" ? HiOutlineMail : AiOutlineLock;
  const [placeholder, setPlaceholder] = useState(inputName);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setPlaceholder(inputName);
  }, [inputName]);

  return (
    <Container>
      <Icon id="icon" />
      <Placeholder id={type} className="placeholder">
        {placeholder}
      </Placeholder>
      <InputBox
        id={`input-${type}`}
        required
        type={type.toLowerCase()}
        onChange={(event) => {
          setTimeout(() => {
            setInputValue(event.target.value);
          }, 1000);
        }}
        onBlur={() => {
          if (inputValue.length > 0)
            document.querySelector(`#input-${type}`)?.classList.add("filled");
        }}
        onFocus={() => {
          document.querySelector(`#${type}`)?.classList.add("focused");
        }}
      />
    </Container>
  );
};

export default Input;
