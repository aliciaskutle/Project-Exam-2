import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../common/Button";
import StyledLink from "../common/StyledLink";
import { postContact } from "./postContact";
import { FaPhoneAlt } from "react-icons/fa";

//Validation
const schema = yup.object().shape({
  firstname: yup
    .string()
    .required("First name is required")
    .min(2, "Minimum 2 characters"),
  lastname: yup
    .string()
    .required("Last name is required")
    .min(2, "Minimum 2 characters"),
  email: yup
    .string()
    .email("Unvalid email address")
    .required("Email address is required"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must have at least 10 characters"),
});

//Styles
const Wrap = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: 1300px) {
    justify-content: space-evenly;
  }
`;

const FormWrap = styled.div`
  flex: 1;
  display: flex;
  @media (min-width: 620px) {
    justify-content: center;
    padding: 2rem;
    width: 100%;
  }
  @media (min-width: 1300px) {
    justify-content: flex-end;
  }
`;
const Form = styled.form`
  width: 100%;
  height: 100%;
  box-shadow: 1px 1px 10px 1px lightgrey;
  background-color: white;
  @media (min-width: 620px) {
    width: 600px;
    padding: 1rem;
  }
`;

const InfoWrap = styled.div`
  flex: 1;
  display: flex;
  @media (min-width: 620px) {
    justify-content: center;
  }
  @media (min-width: 1300px) {
    padding: 2rem;
    width: 600px;
    justify-content: flex-start;
  }
`;
const Info = styled.div`
  width: 100%;
  height: 100%;
  text-align: left;
  padding: 1rem;
  @media (min-width: 620px) {
    width: 500px;
    padding: 2rem;
  }
`;

const FormH2 = styled.h2`
  font-size: 25px;
  color: black;
  @media (min-width: 620px) {
    font-size: 30px;
  }
`;

const InputLine = styled.li`
  list-style: none;
  margin: 1rem;
  @media (min-width: 620px) {
    margin: 1rem;
  }
`;

const InputField = styled.input`
  color: black;
  font-family: "Rubik", sans-serif;
  padding: 0.8rem;
  width: 100%;
  font-size: 18px;
  box-sizing: border-box;
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

const InputMessage = styled.textarea`
  font-family: "Rubik", sans-serif;
  padding: 0.8rem;
  width: 100%;
  height: 150px;
  font-size: 18px;
  border: 1px solid #d8d8d8;
  box-sizing: border-box;
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
  margin-left: 0;
`;

const InfoH2 = styled.h2`
  font-size: 30px;
  color: black;
`;
const InfoH3 = styled.h3`
  font-size: 25px;
  color: black;
  margin: 40px 0 0 0;
`;

const InfoText = styled.p``;

const InfoPhone = styled.p`
  color: black;
`;
const Link = styled(StyledLink)`
  margin: 0;
`;

const Errors = styled.p`
  color: red;
  float: left;
  margin: 1rem 3rem;
`;
const Status = styled.p`
  margin: 2rem;
  font-size: 20px;
  color: rgba(255, 112, 0);
`;

function ContactForm() {
  const [status, setStatus] = useState("idle");

  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  function onSubmit(data) {
    const contact = {
      email: data.email,
      message: data.message,
      name: data.firstname + " " + data.lastname,
    };
    postContact(contact)
      .then(() => {
        setStatus("success");
      })
      .catch((error) => {
        setStatus("error");
      });
    console.log("data", contact);
  }

  return (
    <Wrap>
      <FormWrap>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {status === "success" && (
            <Status>Your message has been sent. Thank you!</Status>
          )}
          {status === "error" && (
            <Status>Something went wrong. Please try again!</Status>
          )}
          <FormH2>Contact Form</FormH2>
          <InputLine>
            {" "}
            <InputField
              type="text"
              placeholder="First name"
              name="firstname"
              ref={register}
            />
            {errors.firstname && <Errors>{errors.firstname.message}</Errors>}
          </InputLine>
          <InputLine>
            <InputField
              type="text"
              placeholder="Last name"
              name="lastname"
              ref={register}
            />
            {errors.lastname && <Errors>{errors.lastname.message}</Errors>}
          </InputLine>
          <InputLine>
            <InputField
              type="email"
              placeholder="Email address"
              name="email"
              ref={register}
            />
            {errors.email && <Errors>{errors.email.message}</Errors>}
          </InputLine>
          <InputLine>
            <InputMessage
              name="message"
              placeholder="Write your message here..."
              ref={register}
            />
            {errors.message && <Errors>{errors.message.message}</Errors>}
          </InputLine>
          <InputLine>
            <StyledButton type="submit">Submit</StyledButton>
          </InputLine>
        </Form>
      </FormWrap>
      <InfoWrap>
        <Info>
          <InfoH2>Need a quick response?</InfoH2>
          <InfoText>
            Our support team is always just one quick call away! And if the
            matter is not urgent - please fill out our contact form and we will
            get back to you as soon as possible!{" "}
          </InfoText>
          <InfoPhone>
            <FaPhoneAlt /> +47 123 45 678
          </InfoPhone>

          <InfoH3>New enquiry</InfoH3>
          <InfoText>To make a new enquiry fill out this form.</InfoText>
          <Link to="/enquiry">New Enquiry</Link>
        </Info>
      </InfoWrap>
    </Wrap>
  );
}

export default ContactForm;
