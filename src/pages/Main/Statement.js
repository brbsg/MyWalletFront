import React from "react";
import styled from "styled-components";
import { GrFormClose } from "react-icons/gr";
import axios from "axios";
import { useGeneral } from "../../context/General";
import { useNavigate } from "react-router-dom";

export default function Statement({
  render,
  setRender,
  id,
  description,
  value,
  date,
}) {
  const navigate = useNavigate();

  const { user, setStatementId } = useGeneral();

  function onDeleteClick() {
    const resultado = window.confirm("Deseja mesmo apagar?");

    if (!resultado) return;

    axios
      .delete(`http://localhost:5000/statements/${id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        setRender(!render);
      })
      .catch((error) => console.log(error));
  }

  function onDescriptionClick() {
    setStatementId(id);

    if (value >= 0) {
      navigate("/home/update-entries");
    } else {
      navigate("/home/update-exits");
    }
  }

  return (
    <Container>
      <span>{date}</span>
      <span onClick={onDescriptionClick}>{description}</span>
      <span style={{ color: value > 0 ? "#03AC00" : "#C70000" }}>{value}</span>
      <GrFormClose size={20} onClick={onDeleteClick} />
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
    width: 50px;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    padding-right: 5px;
  }
`;
