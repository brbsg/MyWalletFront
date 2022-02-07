import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useGeneral } from "../context/General";

export default function UpdateEntries() {
  const { user, statementId } = useGeneral();

  const navigate = useNavigate();

  const [entryData, setEntryData] = useState({
    value: "",
    description: "",
  });

  function sendNewEntry() {
    if (!entryData.value || !entryData.description) {
      alert("Preencha todos os campos");
      return;
    }

    axios
      .put(
        `http://localhost:5000/statements/${statementId}`,
        { value: entryData.value, description: entryData.description },
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      )
      .then((res) => {
        navigate("/home");
      })
      .catch((error) => console.log(error));
  }

  return (
    <Container>
      <Header>Editar entrada</Header>

      <Input
        placeholder="Valor"
        value={entryData.value}
        onChange={(e) => {
          if (!isNaN(e.target.value)) {
            setEntryData({ ...entryData, value: e.target.value });
          }
        }}
      />

      <Input
        placeholder="Descrição"
        onChange={(e) =>
          setEntryData({ ...entryData, description: e.target.value })
        }
      />

      <SaveButton onClick={sendNewEntry}>Atualizar entrada</SaveButton>
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
