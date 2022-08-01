import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
// import { createTheme } from '@material-ui/core/styles';

import * as S from "./styles";
import { StepperContext, SteeperContextType } from "../../contexts/Stepper";
import { createTheme } from "@mui/material";

export default function Header() {
  const { setStepLevel, stepLevel } = useContext<SteeperContextType>(StepperContext);

  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
        }
    }
  })



  const steps = ["Welcome", "Adress", "Payment", "Order"];

  return (
    <S.Container>
      {stepLevel == 1 && <h1>Where should we sent the order?</h1>}
      {stepLevel == 2 && <h1>How would you like to pay?</h1>}
      {stepLevel == 3 && <h1>Confirm and enjoy your order 🎉</h1>}
      {stepLevel == 4 && <h1>Thanks a lot for putting up this order</h1>}
      {stepLevel == 4 ? (
        <>
          <p>
            Your Mailto order ASK123456 has successfully been placed. You'll fin
            all the details about your order below, and we'll send you a
            shipping confrimation email as soon as your order ships. In the
            meantime, you can share Mailto and earn store credit.
          </p>
          <p>
            Questions? Suggestions? insightful showe thoughts?{" "}
            <a>Shoot us an email</a>.
          </p>
        </>
      ) : (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
      )}
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={stepLevel} alternativeLabel>
          {steps.map((label: any) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </S.Container>
  );
}
