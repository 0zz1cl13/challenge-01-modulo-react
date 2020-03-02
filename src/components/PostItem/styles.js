import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;

  div {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    font-size: 11px;
    color: #9a9a9a;
    line-height: 14px;
  }

  & span:first-child {
    font-size: 14px;
    color: #4a4a4a;
    font-weight: bold;
    margin-bottom: 3px;
  }

  img {
    min-height: 32px;
    min-width: 32px;
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }
`;

export const Post = styled.div`
  margin-top: 20px;
  border-radius: 8px;
  background: white;
  padding: 20px;
  color: #3e3e3e;
  line-height: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Content = styled.p`
  margin-top: 15px;
  font-size: 14px;
  margin-bottom: 15px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #eeeeee;
`;

export const Comments = styled.div`
  margin-top: 20px;

  div {
    margin-top: 15px;
    display: flex;
  }

  p {
    border-radius: 20px;
    background: #eeeeee;
    margin-left: 10px;
    padding: 15px;
    font-size: 13px;

    span {
      font-weight: bold;
      margin-right: 6px;
    }
  }

  img {
    min-height: 32px;
    min-width: 32px;
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }
`;
