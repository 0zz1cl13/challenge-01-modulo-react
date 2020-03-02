import styled from "styled-components";
import { AccountCircle } from "styled-icons/material/AccountCircle";

export const Container = styled.header`
  background: #4a90e2;
  display: flex;
  justify-content: center;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    padding: 0 42px;
    color: #fff;
    min-width: 980px;
    font-size: 14;

    img {
      height: 24px;
    }

    div {
      display: flex;
      align-items: center;

      span {
        font-size: 14px;
        font-weight: 600;
      }
    }
  }
`;

export const Icon = styled(AccountCircle)`
  color: #fff;
  margin-left: 8px;
  height: 26px;
`;
