import styled from "styled-components";

export const Container = styled.li`
  color: #fff;
  cursor: pointer;
  padding: 8px;
  list-style: none;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
  }

  svg {
    margin-right: 12px;
  }

  span {
    font-size: 16px;
  }

  margin-bottom: 12px;

  a:hover {
    color: #f2e8d5;
    transition: 0.2s;
  }
  .active {
    color: #f2e8d5;
  }
`;
