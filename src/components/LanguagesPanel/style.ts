import styled from "styled-components";

export const Container = styled.div`
  width: 160px;
  border-radius: 15px;
  height: 420px;
  background: #eff1ee;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  position: absolute;
  left: calc(100% + 10px);

  h6 {
    color: black;
    margin: 0px;
    font-size: 12px;
    font-weight: 400;
  }

  .thin-line {
    height: 1px;
    background: black;
    width: 100%;
  }

  #main-btn {
    justify-content: space-evenly;
    display: flex;
    width: 90%;
    font-size: 14px;
    font-weight: 400;
    margin: 0px;
    align-self: center;
  }

  #main-btn:focus {
    outline: rgba(90, 170, 248) solid 2px;
  }

  svg {
    align-self: center;
  }
`;

export const LanguagesContainer = styled.div`
  margin-top: 5px;
  width: 90%;
  overflow-y: scroll;
  background: white;
  border-radius: 5px;
  align-self: center;

  button {
    width: 100%;
    margin: 0;
    font-size: 12px;
    font-weight: 400;

    display: flex;
    justify-content: space-evenly;
  }

  svg {
    width: 20px;
  }

  button:focus {
    border: rgba(90, 170, 248) solid 1px;
    outline: 0;
  }
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
`;
