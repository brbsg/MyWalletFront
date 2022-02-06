import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function SignIn() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  function onEnterClick() {
    navigate("/home");
    axios
      .post("http://localhost:5000/sign-in", userData)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  }

  return (
    <Container>
      <Title>MyWallet</Title>

      <Input
        placeholder="E-mail"
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
      <Input
        placeholder="Senha"
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />

      <Enter onClick={onEnterClick}>Entrar</Enter>
      <Register onClick={() => navigate("/sign-up")}>
        Primeira vez? Cadastre-se!
      </Register>
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

  @media (max-width: 700px) {
    width: 100vw;
  }
`;

const Title = styled.div`
  font-family: Saira Stencil One;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 50px;

  color: #ffffff;
  font-size: 50px;
  margin: 25px;
`;

const Input = styled.input`
  border: 0;
  padding: 10px;
  width: 100%;
  height: 60px;
  border-radius: 5px;
  background-color: white;

  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;

  color: #000000;
`;

const Enter = styled.button`
  display: flex;
  border: 0;
  width: 100%;
  height: 46px;
  justify-content: center;
  align-items: center;
  background: #a328d6;
  border-radius: 5px;

  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;

  color: #ffffff;
`;

const Register = styled.button`
  border: 0;
  width: 100%;
  background-color: transparent;
  margin: 25px;

  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  color: #ffffff;
`;
