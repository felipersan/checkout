import React, { useState, createContext, Dispatch, SetStateAction } from "react";
import { ReactNode } from "react";

interface IChildren {
    children: ReactNode
} 

export interface SteeperContextType {
    stepLevel: any,
    setStepLevel: Dispatch<SetStateAction<any>>,
    numberSteps: any,
    setNumberSteps: Dispatch<SetStateAction<any>>
}

export const StepperContext = createContext<any>(null)

export default function StepperProvider({children} : IChildren ) {
    const [stepLevel, setStepLevel] = useState(1);
    const [numberSteps, setNumberSteps] = useState()

    return(
        <StepperContext.Provider
            value = {{
                stepLevel: stepLevel as Number,
                setStepLevel: setStepLevel as Dispatch<SetStateAction<number>>,
                numberSteps: numberSteps as any,
                setNumberSteps: setNumberSteps as Dispatch<SetStateAction<any>>
            }}
        >
            {children}
        </StepperContext.Provider>
    )
}