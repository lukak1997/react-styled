import styled from "styled-components";
import { useState } from "react";
import allert from "./assets/images/icon-error.svg";

const WhiteCard = () => {
  const [errorMessage, setErorMessage] = useState<formData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [formData, setFormData] = useState<formData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  interface formData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setErorMessage(validate(formData));
  };
  const handleChange = (e: any) => {
    if (e.target.name === "firstName" || e.target.name === "lastName") {
      const regex = /^[a-zA-Z]*$/;
      if (regex.test(e.target.value)) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  const validate = (values: any) => {
    const errors = { firstName: "", lastName: "", email: "", password: "" };
    const regex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g;
    const passRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (values.firstName === "") {
      errors.firstName = "Firstname is requred";
    } else if (values.firstName.length < 3) {
      errors.firstName = "Firstname is too short";
    } else if (values.firstName.length > 10) {
      errors.firstName = "Firstname is too long";
    }

    if (values.lastName === "") {
      errors.lastName = "Lastname is requred";
    } else if (values.lastName.length <= 3) {
      errors.lastName = "Lastname is too short";
    } else if (values.lastName.length > 10) {
      errors.lastName = "Lastname is too long";
    }

    if (values.email === "") {
      errors.email = "Email is requred";
    } else if (!regex.test(values.email)) {
      errors.email = "Email is not valid";
    }
    if (values.password === "") {
      errors.password = "Password is requred";
    } else if (!passRegex.test(values.password)) {
      errors.password =
        "Minimum eight characters, at least one uppercase and  lowercase letter and one number";
    }
    return errors;
  };

  console.log(errorMessage);
  console.log(formData);

  return (
    <WhiteCards>
      <InformationWraper onSubmit={handleSubmit}>
        <InputComponent
          type="text"
          pattern="^[a-zA-Z0-9@]+$"
          errorMessage={errorMessage.firstName}
          placeholder={"First Name"}
          value={formData.firstName}
          name="firstName"
          onChange={handleChange}
        />

        <Errors>{errorMessage.firstName}</Errors>
        <InputComponent
          type="text"
          errorMessage={errorMessage.lastName}
          placeholder={"Last Name"}
          value={formData.lastName}
          name="lastName"
          onChange={handleChange}
        />
        <Errors>{errorMessage.lastName}</Errors>
        <InputComponent
          errorMessage={errorMessage.email}
          placeholder={"Email Address"}
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
        <Errors>{errorMessage.email}</Errors>
        <InputComponent
          type="password"
          errorMessage={errorMessage.password}
          placeholder={"Password"}
          value={formData.password}
          name="password"
          onChange={handleChange}
        />
        <Errors>{errorMessage.password}</Errors>
        <ButtonComponent>CLAIM YOUR FREE TRIAL</ButtonComponent>
      </InformationWraper>
      <ButtonInf>By clicking the button, you are agreeing to our </ButtonInf>
    </WhiteCards>
  );
};
const WhiteCards = styled.div`
  background-color: ${(props) => props.theme.colors.White};
  width: 100%;
  height: 442px;
  border-radius: 10px;
  margin-top: 24px;
  padding: 24px;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);

  @media screen and (min-width: 1024px) {
    height: 562px;
    width: 540px;
    padding: 40px;
    margin-bottom: 121px;
  }
`;
const InformationWraper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 1024px) {
    gap: 0;
  }
`;
const ButtonInf = styled.h3`
  margin-top: 8px;
  color: ${(props) => props.theme.colors.LightBlue};

  font-family: Poppins;
  font-size: 11px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: center;
  height: 42px;
  width: 249px;

  ::after {
    content: "Terms and Services";
    font-family: Poppins;
    font-size: 11px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0px;
    text-align: center;
    color: ${(props) => props.theme.colors.Red};
  }
  @media screen and (min-width: 1024px) {
    height: 26px;
    width: 100%;
    text-align: center;
  }
`;

const InputComponent = styled.input<{ errorMessage: string }>`
  height: 56px;
  width: 279px;
  border-radius: 5px;
  outline: none;
  border: 1px solid
    ${(props) =>
      props.errorMessage
        ? props.theme.colors.Red
        : props.theme.colors.WhiteGray};
  padding-left: 19.41px;
  ::placeholder {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 0.25px;
    color: ${(props) => props.theme.colors.Dark};
    opacity: 0.75;
  }
  @media screen and (min-width: 1024px) {
    height: 56px;
    width: 460px;
    background-image: ${(props) =>
      props.errorMessage ? `url(${allert})` : null};
    background-repeat: no-repeat;
    background-position: center right 17px;
  }
`;

const Errors = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    font-family: Poppins;
    font-size: 11px;
    font-style: italic;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0px;
    text-align: right;
    color: ${(props) => props.theme.colors.Red};
    width: 100%;
    height: 25px;
    margin-bottom: 13px;
    margin-top: 4px;
    display: inline-block;
  }
`;

const ButtonComponent = styled.button`
  width: 100%;
  height: 56px;
  border: none;
  background-color: ${(props) => props.theme.colors.Green};
  color: ${(props) => props.theme.colors.White};
  border-radius: 5px;
  font-family: Poppins;
  font-size: 15px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0px;
  text-align: center;

  font-family: Poppins;
  font-size: 15px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0px;
  text-align: center;
`;

export default WhiteCard;
