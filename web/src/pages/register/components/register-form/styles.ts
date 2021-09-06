import styled from "styled-components";

export const Container = styled.form``;

export const ContainerFields = styled.div`
  margin-top: 12px;
`;

export const ContainerDoubleFields = styled.div`
  margin-top: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  .error {
    margin: 8px 0 16px;
    color: red;
    text-align: center;
  }
`;

export const HaveAccount = styled.span`
  h5 {
    margin: 40px 0 12px;
    font-size: 20px;
    font-weight: 500;
  }

  text-align: center;
  color: #fff !important;
  width: 100%;
  text-shadow: 2px 1px 10px rgba(0, 0, 0, 0.48);
  a {
    margin-top: 18px;
    color: #f29849;
    text-decoration: none;
  }
  a:hover {
    color: #b5753c;
    transition: 0.2s ease-in-out;
  }
`;
