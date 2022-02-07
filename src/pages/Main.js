import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useGeneral } from "../context/General";

export default function Home() {
  const { user, setUser } = useGeneral();

  const navigate = useNavigate();

  const [statements, setStatements] = useState([]);

  console.log(user.id);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/entries/${user.id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((res) => console.log(res));
  }, []);

  return (
    <Container>
      <Header>Olá, Pênis</Header>

      <Main>
        {statements.length === 0 && (
          <span>Não há registros de entrada ou saída</span>
        )}
      </Main>

      <div
        style={{
          display: "flex",
          width: "95%",
          justifyContent: "space-between",
        }}
      >
        <Button onClick={() => navigate("new-entry")}>Nova entrada</Button>
        <Button onClick={() => navigate("new-exit")}>Nova saída</Button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: 100vh;
  gap: 10px;
  padding: 5%;

  @media (max-width: 800px) {
    width: 100vw;
  }
`;

const Header = styled.header`
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;

  color: #ffffff;
`;

const Main = styled.main`
  display: flex;
  margin: 0;
  height: 70vh;
  width: 95%;
  border-radius: 5px;
  background-color: white;
  align-items: center;
  justify-content: center;
  span {
    display: block;
    margin: 0;
    width: 70%;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    color: #868686;
  }
`;

const Button = styled.main`
  margin: 0;
  width: 48%;
  height: 114px;
  border-radius: 5px;
  background-color: #a328d6;
  padding: 5px;

  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  color: #ffffff;
`;
