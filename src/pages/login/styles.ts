import styled from "styled-components";

export const Container = styled.div`
  width: 220px;
  padding: 0 40px;
  border-radius: 15px;
  height: 420px;
  background: #eff1ee;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  position: relative;

  h3 {
    font-size: 16px;
    font-weight: 400;
    margin: 0;
  }

  #login-button {
    width: 100%;
    background: #5aaaf8;
    color: #eff1ee;
    border-radius: 5px;
  }

  #login-button:focus {
    outline: rgba(90, 170, 248, 0.6) solid 2px;
  }

  .thin-line {
    height: 1px;
    background: black;
    width: 100%;
  }

  a {
    color: #2086ea;
    text-decoration: none;
  }
`;

export const TitleContainer = styled.div`
  h1 {
    font-size: 28px;
    color: #5aaaf8;
    font-weight: 400;
  }
`;

export const SubtitleContainer = styled.div`
  position: relative;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  #sign-in {
    position: absolute;
    z-index: 1;
    background: #eff1ee;
    padding: 0 15px;
  }
`;

export const SignupContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
  height: 30px;

  #sign-up {
    position: absolute;
    z-index: 1;
    margin-top: 10px;
    margin-right: 10px;
    color: #5aaaf8;
  }
`;

export const LangsButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;

  #langs-icon {
    color: black;
    font-size: 20px;
  }

  button {
    padding: 1px 5px;
    border-radius: 3px;
  }

  button:focus {
    outline: rgba(90, 170, 248) solid 2px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
