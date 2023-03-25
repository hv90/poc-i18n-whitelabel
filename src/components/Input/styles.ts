import styled from "styled-components";

export const InputBox = styled.input`
  border-radius: 0 3px 3px 0;
  border-style: hidden;
  background: white;
  width: 100%;
  height: 20px;
  margin-left: 16px;
  outline: none;
  border: 0px;

  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  #icon {
    position: absolute;
    height: 100%;
    border-radius: 3px 0 0 3px;
    background: white;
  }

  .placeholder.focused {
    transition: 0.3s;
    bottom: 0;
    margin-left: 0;
    color: #5aaaf8;
  }

  input.filled:invalid {
    border: 1px solid red;
  }
`;

export const Placeholder = styled.h6`
  position: absolute;
  margin-left: 17px;
  color: rgba(0, 0, 0, 0.5);
`;
