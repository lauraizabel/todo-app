import styled from "styled-components";

export const ContainerTitles = styled.div`
  text-align: center;
  color: #fff;
  width: 85%;
  text-shadow: 2px 1px 10px rgba(0, 0, 0, 0.48);
  h1 {
    letter-spacing: 1.5px;
  }
  h2 {
    margin-top: 9px;
    font-size: 18px;
  }
`;

export const ContainerForm = styled.div`
  margin: 36px 0;
  width: 85%;
`;

export const NoAccount = styled.div`
  width: 85%;
  color: #fff;
  text-align: center;
  p {
    margin-bottom: 12px;
  }
  a {
    margin-top: 24px;
    color: #f29849;
    text-decoration: none;
  }
  a:hover {
    color: #b5753c;
    transition: 0.2s ease-in-out;
  }
`;
