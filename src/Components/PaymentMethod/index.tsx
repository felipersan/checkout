import * as S from "./styles";
import { BsArrowRightShort } from "react-icons/bs";
import NortonIcon from "../../assets/NortonIcon.svg";
import VisaIcon from "../../assets/VisaIcon.svg";
import StripeIcon from "../../assets/StripeIcon.svg";
import MastercardIcon from "../../assets/MastercardIcon.svg";
import ApplePay from "../../assets/ApplePay.svg";
import PayPal from "../../assets/PayPal.svg";
import PadlockIcon from "../../assets/PadlockIcon.svg";
import { useContext, useState } from "react";
import { StepContext } from "../../Contexts/Steps";
import { Input } from "../Input/styles";
import { Formik, Form, ErrorMessage } from 'formik';
import { yupSchema } from "./yupSchema";
import { translateYupErrorMessage } from "../../utils/translateYupErrorMessage";

export const PaymentMethod = () => {
  const [radioSelected, setRadioSelected] = useState({
    creditCard: true,
    applePay: false,
    paypall: false,
  });

  const { setStepLevel } = useContext(StepContext);

  const submitFormFn = (values: any, actions: any) => {
    setStepLevel(3);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        expiry: "",
        cardNumber: "",
        cvv: "",
      }}
      validationSchema={yupSchema}
      onSubmit={submitFormFn}
    >
      {({ values, handleChange, touched, isValid }) => (
        <Form>
          <S.Container>
            <>
              <S.MethodContainer
                bg={radioSelected.creditCard ? "#EFF0F7" : "white"}
                p={radioSelected.creditCard ? "#020246" : "#667085"}
                onClick={() => {
                  if (radioSelected.creditCard) {
                    setRadioSelected({
                      ...radioSelected,
                      creditCard: false,
                      applePay: false,
                      paypall: false,
                    });
                  } else {
                    setRadioSelected({
                      ...radioSelected,
                      creditCard: true,
                      applePay: false,
                      paypall: false,
                    });
                  }
                }}
              >
                <input type="radio" checked={radioSelected.creditCard} />
                <div>
                  <S.FlexSpaceBetween>
                    <p>
                      <span>Pay with Credit Card</span>
                    </p>
                    <S.FlexGap>
                      <img src={VisaIcon} />
                      <img src={StripeIcon} />
                      <img src={MastercardIcon} />
                    </S.FlexGap>
                  </S.FlexSpaceBetween>
                  <S.GridTwoColumns>
                    <S.FlexColumn>
                      <label>Name on card</label>
                      <Input
                        boxShadow="0px 0.778215px 1.55643px rgba(16, 24, 40, 0.05)"
                        borderRadius="6.22572px"
                        border="0.778215px solid #D0D5DD"
                        width="100% !important"
                        height="2.16rem"
                        padding="0.5rem"
                        placeholder="Name"
                        value={values.name}
                        onChange={handleChange}
                        name="name"
                      />
                      <ErrorMessage
                        name="name"
                        render={(msg) => (
                          <div style={{ color: "red", fontSize: "0.8rem" }}>
                            {translateYupErrorMessage(msg, "Name")}
                          </div>
                        )}
                      />
                    </S.FlexColumn>
                    <S.FlexColumn>
                      <label>Expiry</label>
                      <Input
                        boxShadow="0px 0.778215px 1.55643px rgba(16, 24, 40, 0.05)"
                        borderRadius="6.22572px"
                        border="0.778215px solid #D0D5DD"
                        width="100% !important"
                        height="2.16rem"
                        padding="0.5rem"
                        placeholder="mm/yyyy"
                        value={values.expiry}
                        onChange={handleChange}
                        name="expiry"
                      />
                      <ErrorMessage
                        name="expiry"
                        render={(msg) => (
                          <div style={{ color: "red", fontSize: "0.8rem" }}>
                            {translateYupErrorMessage(msg, "Expiry")}
                          </div>
                        )}
                      />
                    </S.FlexColumn>
                  </S.GridTwoColumns>
                  <S.GridTwoColumns>
                    <S.FlexColumn>
                      <label>Card number</label>
                      <Input
                        boxShadow="0px 0.778215px 1.55643px rgba(16, 24, 40, 0.05)"
                        borderRadius="6.22572px"
                        border="0.778215px solid #D0D5DD"
                        width="100% !important"
                        height="2.16rem"
                        padding="0.5rem"
                        value={values.cardNumber}
                        onChange={handleChange}
                        name="cardNumber"
                      />
                      <ErrorMessage
                        name="cardNumber"
                        render={(msg) => (
                          <div style={{ color: "red", fontSize: "0.8rem" }}>
                            {translateYupErrorMessage(msg, "Card Number")}
                          </div>
                        )}
                      />
                    </S.FlexColumn>
                    <S.FlexColumn>
                      <label>CVV</label>
                      <Input
                        boxShadow="0px 0.778215px 1.55643px rgba(16, 24, 40, 0.05)"
                        borderRadius="6.22572px"
                        border="0.778215px solid #D0D5DD"
                        width="100% !important"
                        height="2.16rem"
                        padding="0.5rem"
                        type={"number"}
                        value={values.cvv}
                        onChange={handleChange}
                        name="cvv"
                      />
                      <ErrorMessage
                        name="cvv"
                        render={(msg) => (
                          <div style={{ color: "red", fontSize: "0.8rem" }}>
                            {translateYupErrorMessage(msg, "CVV")}
                          </div>
                        )}
                      />
                    </S.FlexColumn>
                  </S.GridTwoColumns>
                </div>
              </S.MethodContainer>
              <S.MethodContainer
                bg={radioSelected.applePay ? "#EFF0F7" : "white"}
                p={radioSelected.applePay ? "#020246" : "#667085"}
                onClick={() => {
                  if (radioSelected.applePay) {
                    setRadioSelected({
                      ...radioSelected,
                      creditCard: true,
                      applePay: false,
                      paypall: false,
                    });
                  } else {
                    setRadioSelected({
                      ...radioSelected,
                      creditCard: false,
                      applePay: true,
                      paypall: false,
                    });
                  }
                }}
              >
                <input type="radio" checked={radioSelected.applePay} />
                <div>
                  <S.FlexSpaceBetween>
                    <p>
                      <span>Apple Pay</span>
                    </p>
                    <S.FlexGap width="1.5rem !important">
                      <img src={ApplePay} />
                    </S.FlexGap>
                  </S.FlexSpaceBetween>
                  <p>Unlimited users and unlimited individual data.</p>
                </div>
              </S.MethodContainer>
              <S.MethodContainer
                bg={radioSelected.paypall ? "#EFF0F7" : "white"}
                p={radioSelected.paypall ? "#020246" : "#667085"}
                onClick={() => {
                  if (radioSelected.paypall) {
                    setRadioSelected({
                      ...radioSelected,
                      creditCard: false,
                      applePay: false,
                      paypall: false,
                    });
                  } else {
                    setRadioSelected({
                      ...radioSelected,
                      creditCard: false,
                      applePay: false,
                      paypall: true,
                    });
                  }
                }}
              >
                <input type="radio" checked={radioSelected.paypall} />
                <div>
                  <S.FlexSpaceBetween>
                    <p>
                      <span>Paypal</span>
                    </p>
                    <S.FlexGap width="1.5rem !important">
                      <img src={PayPal} />
                    </S.FlexGap>
                  </S.FlexSpaceBetween>
                  <p>
                    You will be redirected to the PayPal website after
                    submitting your order
                  </p>
                </div>
              </S.MethodContainer>
              <S.FlexSpaceEvenly>
                <img src={PadlockIcon} />
                <p>
                  We protect your payment information using encryption to
                  provide bank-level security.
                </p>
              </S.FlexSpaceEvenly>
              <S.NextContainer>
                <img src={NortonIcon} />
                <button
                  type="submit"
                  onClick={() => {
                    if (!radioSelected.creditCard) {
                      setStepLevel(3);
                    }
                  }}
                >
                  Next
                  <BsArrowRightShort />
                </button>
              </S.NextContainer>
            </>
          </S.Container>
        </Form>
      )}
    </Formik>
  );
};
