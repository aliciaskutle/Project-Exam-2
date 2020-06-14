import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { postEstablishment } from "./postEstablishment";
import StyledLink from "../common/StyledLink";
import Button from "../common/Button";

//Validation
const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Minimum 2 characters"),
  email: yup
    .string()
    .email("Unvalid email address")
    .required("Email address is required"),
  image: yup.string().required("Image URL is required"),
});

//Styles
const Wrap = styled.div`
  width: 95%;
  margin: 50px auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  @media (min-width: 767px) {
    margin: 100px auto;
  }
  @media (min-width: 1023px) {
    width: 80%;
  }
`;

const H1 = styled.h1`
  font-size: 1.5rem;
`;
const AdminHead = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 80px auto 40px;
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
  margin: 1rem;
  padding: 2rem;
`;

const AdminLeft = styled.div`
  border-bottom: 1px solid black;
  flex: 2;
  margin: 1rem;
  padding: 2rem;
  @media (min-width: 767px) {
    border: none;
    border-right: 1px solid black;
  }
`;
const AdminText = styled.p`
  color: black;
  font-size: 1.2rem;
`;

const Link = styled(StyledLink)`
  width: 160px;
  margin: 0;
  margin-top: 1rem;
  font-size: 15px;
  @media (min-width: 767px) {
    width: 180px;
    margin: 1rem;
  }
`;

const Wrap2 = styled.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;
`;

const ContactForm = styled.form`
  width: 100%;
  height: 100%;
  padding: 1rem 0;
  box-shadow: 1px 1px 10px 1px lightgrey;
  background-color: white;
  @media (min-width: 620px) {
    width: 600px;
    padding: 1rem;
    margin: 0 auto;
  }
`;

const H2 = styled.h2`
  margin: 2rem;
`;

const InputLine = styled.li`
  list-style: none;
  margin: 1rem;
  @media (min-width: 620px) {
    margin: 1rem;
  }
`;

const InputField = styled.input`
  font-family: "Rubik", sans-serif;
  padding: 0.8rem;
  width: 100%;
  font-size: 18px;
  box-sizing: border-box;
  border: none;
  border: 1px solid #d8d8d8;
  &:focus {
    outline: none;
  }
  @media (min-width: 450px) {
    min-width: 400px;
    padding: 1rem;
  }
  @media (min-width: 620px) {
    width: 500px;
  }
`;

const StyledButton = styled(Button)`
  margin: 2rem 0 1rem 0;
`;

function NewEstablishment() {
  const [status, setStatus] = useState("idle");

  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  function onSubmit(data) {
    const newEstablishment = {
      name: data.name,
      email: data.email,
      image: data.image,
    };
    postEstablishment(newEstablishment)
      .then(() => {
        setStatus("success");
      })
      .catch((error) => {
        setStatus("error");
      });
    console.log("data", newEstablishment);
  }

  return (
    <Wrap>
      <AdminHead>
        <AdminLeft>
          <H1>New Establishment</H1>
          <AdminText>
            Create and add a new establishment to the list here.
          </AdminText>
        </AdminLeft>
        <AdminRight>
          <Link to="/establishments">Establishments</Link>
          <Link to="/login">Back to Dashboard</Link>
        </AdminRight>
      </AdminHead>
      <Wrap2>
        <ContactForm onSubmit={handleSubmit(onSubmit)}>
          {status === "success" && (
            <p>The new establishment has been added to the list!</p>
          )}
          {status === "error" && <p>Something went wrong. Please try again!</p>}
          <H2>New Establishment</H2>
          <InputLine>
            {" "}
            <InputField
              type="text"
              placeholder="Name of establishment"
              name="name"
              ref={register}
            />
            {errors.firstname && <p>{errors.name.message}</p>}
          </InputLine>

          <InputLine>
            <InputField
              type="email"
              placeholder="Email address"
              name="email"
              ref={register}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </InputLine>
          <InputLine>
            <InputField
              type="text"
              placeholder="Image URL"
              name="image"
              ref={register}
            />
            {errors.image && <p>{errors.image.message}</p>}
          </InputLine>
          <InputLine>
            <StyledButton type="submit">Submit</StyledButton>
          </InputLine>
        </ContactForm>
      </Wrap2>
    </Wrap>
  );
}

export default NewEstablishment;
