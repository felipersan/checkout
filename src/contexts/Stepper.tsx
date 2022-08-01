import React, { useState, createContext, Dispatch, SetStateAction } from "react";
import { ReactNode } from "react";

interface IChildren {
    children: ReactNode
} 

export interface SteeperContextType {
    stepLevel: number,
    setStepLevel: Dispatch<SetStateAction<number>>
}

export const StepperContext = createContext<any>(null)

export default function StepperProvider({children} : IChildren ) {
    const [stepLevel, setStepLevel] = useState(4);

    return(
        <StepperContext.Provider
            value = {{
                stepLevel: stepLevel as Number,
                setStepLevel: setStepLevel as Dispatch<SetStateAction<number>>
            }}
        >
            {children}
        </StepperContext.Provider>
    )
}