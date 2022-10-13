import * as S from "./styles";
import { Input } from "../Input/styles";
import { Select } from "../Select";
import NortonIcon from "../../assets/NortonIcon.svg";
import { BsArrowRightShort } from "react-icons/bs";
import { useContext } from "react";
import { StepContext } from "../../Contexts/Steps";
import { Formik, Form, ErrorMessage } from "formik";
import { yupSchema } from "./yupSchema";
import { translateYupErrorMessage } from "../../utils/translateYupErrorMessage";

export const BillingAdress = () => {
  const { setStepLevel } = useContext(StepContext);

  const submitFormFn = (values: any, actions: any) => {
    setStepLevel(1);
  };

  const handlePhone = (event: any) => {
    let input = event.target;
    input.value = phoneMask(input.value);
  };

  const phoneMask = (value: any) => {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        streetAdress: "",
        province: "",
        city: "",
        zip: "",
        phone: "",
      }}
      validationSchema={yupSchema}
      onSubmit={submitFormFn}
    >
      {({ values, handleChange, touched, isValid }) => (
        <Form>
          <S.Container>
            <h3>Billing Adress</h3>
            <S.GridName>
              <div>
                <label htmlFor="firstName">First Name</label>
                <Input
                  border={"0.775px solid #D0D5DD"}
                  boxShadow={"0px 0.775px 1.55px rgba(16, 24, 40, 0.05)"}
                  borderRadius={"6.2px"}
                  height={"2.156rem"}
                  padding={"8px 11px 8px 11px"}
                  value={values.firstName}
                  onChange={handleChange}
                  name="firstName"
                />
                {touched && (
                  <ErrorMessage
                    name="firstName"
                    render={(msg) => (
                      <div style={{ color: "red", fontSize: "0.8rem" }}>
                        {translateYupErrorMessage(msg, "First Name")}
                      </div>
                    )}
                  />
                )}
              </div>
              <div>
                <label>Last Name</label>
                <Input
                  border={"0.775px solid #D0D5DD"}
                  boxShadow={"0px 0.775px 1.55px rgba(16, 24, 40, 0.05)"}
                  borderRadius={"6.2px"}
                  height={"2.156rem"}
                  padding={"8px 11px 8px 11px"}
                  value={values.lastName}
                  onChange={handleChange}
                  name="lastName"
                />
                {touched && (
                  <ErrorMessage
                    name="lastName"
                    render={(msg) => (
                      <div style={{ color: "red", fontSize: "0.8rem" }}>
                        {translateYupErrorMessage(msg, "Last Name")}
                      </div>
                    )}
                  />
                )}
              </div>
            </S.GridName>
            <S.ContainerInput>
              <label>Email</label>
              <Input
                border={"0.775px solid #D0D5DD"}
                boxShadow={"0px 0.775px 1.55px rgba(16, 24, 40, 0.05)"}
                borderRadius={"6.2px"}
                height={"2.156rem"}
                padding={"8px 11px 8px 11px"}
                value={values.email}
                onChange={handleChange}
                name="email"
              />
              {touched && (
                <ErrorMessage
                  name="email"
                  render={(msg) => (
                    <div style={{ color: "red", fontSize: "0.8rem" }}>
                      {translateYupErrorMessage(msg, "E-mail")}
                    </div>
                  )}
                />
              )}
            </S.ContainerInput>
            <S.ContainerInput>
              <label>Street Adress</label>
              <Input
                border={"0.775px solid #D0D5DD"}
                boxShadow={"0px 0.775px 1.55px rgba(16, 24, 40, 0.05)"}
                borderRadius={"6.2px"}
                height={"2.156rem"}
                padding={"8px 11px 8px 11px"}
                value={values.streetAdress}
                onChange={handleChange}
                name="streetAdress"
              />
              {touched && (
                <ErrorMessage
                  name="streetAdress"
                  render={(msg) => (
                    <div style={{ color: "red", fontSize: "0.8rem" }}>
                      {translateYupErrorMessage(msg, "Street Adress")}
                    </div>
                  )}
                />
              )}
            </S.ContainerInput>
            <S.GridName>
              <div>
                <label>State/Province</label>
                <Select
                  border={"0.775px solid #D0D5DD"}
                  boxShadow={"0px 0.775px 1.55px rgba(16, 24, 40, 0.05)"}
                  borderRadius={"6.2px"}
                  height={"2.156rem"}
                  padding={"8px 11px 8px 11px"}
                  value={values.province}
                  onChange={handleChange}
                  name="province"
                >
                  <option value="">Select</option>
                  <option value="LA">Los Angeles</option>
                  <option value="NY">New York</option>
                </Select>
                {touched && (
                  <ErrorMessage
                    name="province"
                    render={(msg) => (
                      <div style={{ color: "red", fontSize: "0.8rem" }}>
                        {translateYupErrorMessage(msg, "State/Province")}
                      </div>
                    )}
                  />
                )}
              </div>
              <div>
                <label>City</label>
                <Select
                  border={"0.775px solid #D0D5DD"}
                  boxShadow={"0px 0.775px 1.55px rgba(16, 24, 40, 0.05)"}
                  borderRadius={"6.2px"}
                  height={"2.156rem"}
                  padding={"8px 11px 8px 11px"}
                  value={values.city}
                  onChange={handleChange}
                  name="city"
                >
                  <option value="">Select</option>
                  <option value="LA">Los Angeles</option>
                  <option value="NY">New York</option>
                </Select>
                <ErrorMessage
                  name="city"
                  render={(msg) => (
                    <div style={{ color: "red", fontSize: "0.8rem" }}>
                      {translateYupErrorMessage(msg, "City")}
                    </div>
                  )}
                />
              </div>
            </S.GridName>
            <S.GridName>
              <div>
                <label>Zip/ Postal Code</label>
                <Select
                  border={"0.775px solid #D0D5DD"}
                  boxShadow={"0px 0.775px 1.55px rgba(16, 24, 40, 0.05)"}
                  borderRadius={"6.2px"}
                  height={"2.156rem"}
                  padding={"8px 11px 8px 11px"}
                  value={values.zip}
                  onChange={handleChange}
                  name="zip"
                >
                  <option value="">Select</option>
                  <option value="LA">03687</option>
                  <option value="NY">08659</option>
                </Select>
                <ErrorMessage
                  name="zip"
                  render={(msg) => (
                    <div style={{ color: "red", fontSize: "0.8rem" }}>
                      {translateYupErrorMessage(msg, "Zip/Postal Code")}
                    </div>
                  )}
                />
              </div>
              <div>
                <label>Phone number</label>
                <Input
                  border={"0.775px solid #D0D5DD"}
                  boxShadow={"0px 0.775px 1.55px rgba(16, 24, 40, 0.05)"}
                  borderRadius={"6.2px"}
                  height={"2.156rem"}
                  padding={"8px 11px 8px 11px"}
                  value={values.phone}
                  onChange={handleChange}
                  name="phone"
                  type={"tel"}
                  onKeyUp={(event: any) => {
                    handlePhone(event);
                  }}
                />
                <ErrorMessage
                  name="phone"
                  render={(msg) => (
                    <div style={{ color: "red", fontSize: "0.8rem" }}>
                      {translateYupErrorMessage(msg, "Phone")}
                    </div>
                  )}
                />
              </div>
            </S.GridName>
            <S.ContainerCheckbox>
              <S.CheckboxContainer>
                <input type="checkbox" />
                <label>My billing and shipping adress are the same</label>
              </S.CheckboxContainer>
              <S.CheckboxContainer>
                <input type="checkbox" />
                <label>Create an account for 10% off this purchase</label>
              </S.CheckboxContainer>
            </S.ContainerCheckbox>
            <S.NextContainer>
              <img src={NortonIcon} />
              <button type="submit">
                Next
                <BsArrowRightShort />
              </button>
            </S.NextContainer>
          </S.Container>
        </Form>
      )}
    </Formik>
  );
};
