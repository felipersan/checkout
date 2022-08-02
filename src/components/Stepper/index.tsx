import React, { useContext } from "react"

import * as S from './styles'
import { StepperContext, SteeperContextType } from "../../contexts/Stepper";

interface IStep{
    steps: number[],
    labels: any[],
}

export default function Stepper({steps, labels}:IStep){
    
    const { numberSteps, setNumberSteps, stepLevel } = useContext<SteeperContextType>(StepperContext);

    setNumberSteps(steps)

    return(
        <>
            {numberSteps?.map((e: any)=>{
                return(
                    <S.Container key={e} >
                        <S.Circle>
                            {stepLevel > e+1 ? (
                                <S.Finished><p>✔</p></S.Finished>
                            ) : (
                                <S.Opened></S.Opened>
                            )}
                        </S.Circle>
                        <p>{labels[e]}</p>
                    </S.Container>
                    
                )
                
            })}
           
        </>
    )
}