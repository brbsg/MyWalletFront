import React from "react";
import styled from "styled-components";

export default function Statement({ description, value, date }) {
  return (
    <Container>
      <span>{date}</span>
      <span>{description}</span>
      <span style={{ color: value > 0 ? "#03AC00" : "#C70000" }}>{value}</span>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  padding: 8px;

  span:nth-child(1) {
    width: fit-content;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: #c6c6c6;
  }

  span:nth-child(2) {
    display: flex;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: #000000;
    padding: 0 8px;
  }

  span:nth-child(3) {
    width: fit-content;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
  }
`;
