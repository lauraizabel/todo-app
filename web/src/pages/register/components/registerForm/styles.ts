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
`;

export const HaveAccount = styled.span`
  text-align: center;
  color: #373f51;
  h5 {
    margin: 40px 0 20px;
    font-size: 20px;
  }
`;
