import styled from "styled-components";

import bg from "../../assets/images/background.jpg";

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const ContainerBackground = styled.div`
  min-height: 100vh;
  width: 100%;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ContainerLogin = styled.div`
  min-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2e038c;
`;

export const ContainerTitles = styled.div`
  text-align: center;
  color: #fff;
  text-shadow: 2px 1px 10px rgba(0, 0, 0, 0.48);
  h1 {
    letter-spacing: 1.5px;
  }
  h2 {
    margin-top: 9px;
    font-size: 18px;
  }
`;
