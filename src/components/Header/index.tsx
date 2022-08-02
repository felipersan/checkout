import React, { useContext, useEffect } from "react";

import * as S from "./styles";
import { StepperContext, SteeperContextType } from "../../contexts/Stepper";
import Stepper from "../Stepper";


export default function Header() {
  const { setStepLevel, stepLevel, setNumberSteps } = useContext<SteeperContextType>(StepperContext);

  return (
    <>
      <S.Container>
        {stepLevel == 1 && <h1>Where should we sent the order?</h1>}
        {stepLevel == 2 && <h1>How would you like to sent this order?</h1>}
        {stepLevel == 3 && <h1>How would you like to pay?</h1>}
        {stepLevel == 4 && <h1>Confirm and enjoy your order 🎉</h1>}
        {stepLevel == 5 && <h1>Thanks a lot for putting up this order</h1>}
        {stepLevel == 5 ? (
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
      </S.Container>
      <S.StepperStyle>
        <Stepper 
          steps={[0,1,2,3]}
          labels={['Adress', 'Shipping','Payment','Order']}
        />
      </S.StepperStyle>
      
        
    </>
  );
}
