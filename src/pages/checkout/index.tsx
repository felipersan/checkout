import React, {useContext} from "react"

import Header from "../../components/Header"
import FormAdress from "../../components/FormAdress"
import { StepperContext, SteeperContextType } from "../../contexts/Stepper";

export default function Checkout(){
    const { stepLevel } = useContext<SteeperContextType>(StepperContext);

    return(
        <>
            <Header/>
            {stepLevel == 1 && <FormAdress/>}
            {stepLevel == 2 && <h1>How would you like to sent this order?</h1>}
            {stepLevel == 3 && <h1>How would you like to pay?</h1>}
            {stepLevel == 4 && <h1>Confirm and enjoy your order 🎉</h1>}
            {stepLevel == 5 && <h1>Thanks a lot for putting up this order</h1>}
        </>
    )
}