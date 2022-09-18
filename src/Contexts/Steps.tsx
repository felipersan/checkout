import { createContext, FC, ReactNode, useState } from "react";

interface IProps {
  children: ReactNode;
}

export const StepContext = createContext<any>({});

export const StepProvider: FC<IProps> = ({ children }) => {
  const [stepLevel, setStepLevel] = useState(0);

  return (
    <StepContext.Provider
      value={{
        stepLevel,
        setStepLevel
      }}
    >
      {children}
    </StepContext.Provider>
  );
};
