import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 8em;
  display: flex;
  justify-content: space-between;
`;

export const LeftContent = styled.div`
  width: 25%;
  margin-right: 5%;
  height: 60vh;
  background-color: #260273;
  border-radius: 10px;
`;

export const RightContent = styled.div`
  width: 70%;
  background-color: #f5f5f5;
  border-radius: 10px;
  height: 60vh;
`;
