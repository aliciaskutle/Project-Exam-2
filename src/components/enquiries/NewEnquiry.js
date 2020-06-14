import React, { useState, useReducer } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../common/Button";
import StyledLink from "../common/StyledLink";
import { postEnquiry } from "../enquiries/postEnquiry";
import { DateRangeInput } from "@datepicker-react/styled";
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
  establishmentId: yup
    .string()
    .required("Establishment ID is required")
    .min(4, "Minimum 4 characters"),
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
const H2 = styled.h2`
  font-size: 25px;
  color: black;
  @media (min-width: 620px) {
    font-size: 30px;
  }
`;
const FormWrap = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  @media (min-width: 620px) {
    justify-content: center;
    padding: 2rem;
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
const InputLine = styled.li`
  list-style: none;
  margin: 1rem;
  @media (min-width: 620px) {
    margin: 1rem;
  }
`;
const DateLine = styled.li`
  list-style: none;
  margin: 1rem;
  text-align: center;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
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
const StyledButton = styled(Button)`
  margin-left: 0;
`;
const DateRange = styled(DateRangeInput)`
  z-index: 2;
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

const initialState = {
  startDate: null,
  endDate: null,
  focusedInput: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "focusChange":
      return { ...state, focusedInput: action.payload };
    case "dateChange":
      return action.payload;
    default:
      throw new Error();
  }
}

function NewEnquiry() {
  const [status, setStatus] = useState("idle");
  const [state, dispatch] = useReducer(reducer, initialState);

  const { register, handleSubmit, errors, setValue } = useForm({
    validationSchema: schema,
  });

  function onSubmit(data) {
    console.log("formData: ", data);
    const enquiry = {
      name: data.firstname + " " + data.lastname,
      email: data.email,
      establishmentId: data.establishmentId,
      checkIn: data.checkIn,
      checkOut: data.checkOut,
    };
    postEnquiry(enquiry)
      .then(() => {
        setStatus("success");
      })
      .catch((error) => {
        setStatus("error");
      });
  }

  return (
    <Wrap>
      <FormWrap>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {status === "success" && (
            <Status>Your enquiry has been sent. Thank you!</Status>
          )}
          {status === "error" && (
            <Status>Something went wrong. Please try again!</Status>
          )}
          <H2>New Enquiry</H2>
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
            <InputField
              type="text"
              placeholder="Establishment Name"
              name="establishmentId"
              ref={register}
            />
            {errors.establishmentId && (
              <Errors>{errors.establishmentId.message}</Errors>
            )}
          </InputLine>
          <DateLine>
            <DateRange
              onDatesChange={(data) => {
                dispatch({ type: "dateChange", payload: data });
                setValue("checkIn", data.startDate);
                setValue("checkOut", data.endDate);
              }}
              onFocusChange={(focusedInput) =>
                dispatch({ type: "focusChange", payload: focusedInput })
              }
              startDate={state.startDate} // Date or null
              endDate={state.endDate} // Date or null
              focusedInput={state.focusedInput} // START_DATE, END_DATE or null
            />
            <input type="hidden" ref={register} name="checkIn" />
            <input type="hidden" ref={register} name="checkOut" />
          </DateLine>
          <InputLine>
            <StyledButton type="submit">Submit</StyledButton>
          </InputLine>
        </Form>
      </FormWrap>
      <InfoWrap>
        <Info>
          <InfoH2>Questions about your booking?</InfoH2>
          <InfoText>
            Our support team is always just one quick call away!{" "}
          </InfoText>
          <InfoPhone>
            <FaPhoneAlt /> +47 123 45 678
          </InfoPhone>

          <InfoH3>Contact us</InfoH3>
          <InfoText>
            {" "}
            If the matter is not urgent - please make use of the contact form.
          </InfoText>
          <StyledLink to="/contact">Contact Form</StyledLink>
        </Info>
      </InfoWrap>
    </Wrap>
  );
}

export default NewEnquiry;
