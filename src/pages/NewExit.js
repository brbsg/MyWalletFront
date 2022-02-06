import React from "react";
import styled from "styled-components";

export default function NewExit() {
  return (
    <Container>
      <Header>Nova saída</Header>

      <Input placeholder="Valor" />
      <Input placeholder="Descrição" />

      <SaveButton>Salvar saída</SaveButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 20px;

  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;

  color: #ffffff;
`;

const Input = styled.input`
  border: 0;
  width: 326px;
  height: 58px;
  background: #ffffff;
  border-radius: 5px;
  padding: 8px;

  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;

  color: #000000;
`;

const SaveButton = styled.button`
  border: 0;
  width: 326px;
  height: 60px;
  background: #a328d6;
  border-radius: 5px;

  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;

  color: #ffffff;
`;
