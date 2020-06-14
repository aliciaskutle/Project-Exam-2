import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../common/Button";
import { BsPerson, BsEnvelope, BsCalendar } from "react-icons/bs";
import { FaBed } from "react-icons/fa";

const Wrap = styled.div`
  display: flex;
  width: 95%;
  margin: 100px auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 1023px) {
    width: 80%;
  }
`;
const Wrap2 = styled.div`
  height: 100vh;
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const LoginForm = styled.form`
  width: 300px;
  height: 400px;
  box-shadow: 1px 1px 10px 1px lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  @media (min-width: 620px) {
    width: 400px;
    height: 400px;
  }
`;
const H1 = styled.h1`
  font-size: 1.5rem;
`;
const InputField = styled.input`
  font-family: "Rubik", sans-serif;
  padding: 0.8rem;
  width: 250px;
  font-size: 18px;
  box-sizing: border-box;
  margin: 1rem;
  border: 1px solid #d8d8d8;
  &:focus {
    outline: none;
  }
  @media (min-width: 620px) {
    width: 300px;
  }
`;
const StyledButton = styled(Button)`
  margin: 1.5rem;
`;
const AdminHead = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 80px auto;
  min-height: 200px;
  background-color: white;
  box-shadow: 1px 1px 10px 1px lightgrey;
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
const AdminRight = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  align-items: center;
  border-top: 1px solid black;
  margin: 1rem;
  padding: 2rem;
  @media (min-width: 767px) {
    border: none;
    border-left: 1px solid black;
  }
`;
const AdminLeft = styled.div`
  flex: 2;
  margin: 1rem;
  padding: 2rem;
`;
const AdminText = styled.p`
  color: black;
  font-size: 1.2rem;
`;
const AdminTasks = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: flex-start;
  flex-wrap: wrap;
`;
const Task = styled(Link)`
  width: 170px;
  height: 170px;
  padding: 1.5rem;
  margin: 1rem;
  text-decoration: none;
  background-color: white;
  box-shadow: 1px 1px 10px 1px lightgrey;
  &:hover {
    outline: 2px solid black;
  }
  @media (min-width: 767px) {
    width: 150px;
    height: 150px;
  }
  @media (min-width: 1023px) {
    width: 170px;
    height: 170px;
    padding: 2rem;
  }
  @media (min-width: 1300px) {
    width: 200px;
    height: 200px;
  }
`;
const H2 = styled.h2`
  text-transform: uppercase;
  color: black;
  font-size: 15px;
  @media (min-width: 767px) {
    font-size: 15px;
  }
  @media (min-width: 1300px) {
    font-size: 20px;
  }
`;
const TaskText = styled.p`
  color: black;
  font-size: 1rem;
`;

function Login(props) {
  function handleLogin() {
    props.setLoggedIn(true);
  }
  function handleLogout() {
    props.setLoggedIn(false);
  }

  if (props.loggedIn === "true") {
    return (
      <Wrap>
        <AdminHead>
          <AdminLeft>
            <H1>Admin dashboard</H1>
            <AdminText>
              Here you see new messages, enquiries and add new establishments to
              the list.
            </AdminText>
          </AdminLeft>
          <AdminRight>
            <BsPerson size="80" fill="black" />
            <Button type="button" onClick={handleLogout}>
              Logout
            </Button>
          </AdminRight>
        </AdminHead>
        <AdminTasks>
          <Task to="/messages">
            <BsEnvelope size="50" fill="black" />
            <H2>Messages</H2>
            <TaskText>New messages sent from contact form</TaskText>
          </Task>
          <Task to="/enquiries">
            <BsCalendar size="50" fill="black" />
            <H2>Enquiries</H2>
            <TaskText>New enquiries sent from enquiry form</TaskText>
          </Task>
          <Task to="/establishments">
            <FaBed size="50" fill="black" />
            <H2>Establishments</H2>
            <TaskText>See list of, edit or add new establishments</TaskText>
          </Task>
        </AdminTasks>
      </Wrap>
    );
  }

  return (
    <Wrap2>
      <LoginForm>
        <BsPerson size="40" fill="black" />
        <H1>Admin</H1>
        <InputField type="text" placeholder="Username" />
        <InputField type="text" placeholder="Password" />
        <StyledButton type="button" onClick={handleLogin}>
          Login
        </StyledButton>
      </LoginForm>
    </Wrap2>
  );
}

export default Login;
