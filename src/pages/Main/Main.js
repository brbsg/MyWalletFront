import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useGeneral } from "../../context/General";
import Statement from "./Statement";

export default function Home() {
  const { user } = useGeneral();

  const [render, setRender] = useState(false);

  const navigate = useNavigate();

  const [statements, setStatements] = useState([]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    axios
      .get(`https://barbosa-wallet.herokuapp.com/statements/${user.id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        setStatements(res.data);
        console.log(res);
      });
  }, [user, render]);

  useEffect(() => {
    let auxCount = 0;

    for (let e of statements) {
      auxCount += Number(e.value);
    }

    setBalance(auxCount);
  }, [statements]);

  return (
    <Container>
      <Header>Olá, {user.name}</Header>

      <Main
        style={{
          justifyContent: statements.length === 0 ? "center" : "space-between",
        }}
      >
        {statements.length === 0 && (
          <span>Não há registros de entrada ou saída</span>
        )}

        {statements.length !== 0 && (
          <>
            <div style={{ width: "100%" }}>
              {statements.map((e) => {
                return (
                  <Statement
                    key={e._id}
                    id={e._id}
                    date={e.date}
                    description={e.description}
                    value={e.value}
                    render={render}
                    setRender={setRender}
                  />
                );
              })}
            </div>

            <Balance>
              <span>SALDO</span>
              <span style={{ color: balance >= 0 ? "#03AC00" : "#C70000" }}>
                {balance}
              </span>
            </Balance>
          </>
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

  @media (max-width: 1000px) {
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
  flex-direction: column;
  margin: 0;
  height: 70vh;
  width: 95%;
  border-radius: 5px;
  background-color: white;
  align-items: center;
  padding: 5px 0;

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

const Balance = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8px;

  span:nth-child(1) {
    width: fit-content;

    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    /* identical to box height */

    color: #000000;
  }
  span:nth-child(2) {
    width: fit-content;

    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 20px;
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
