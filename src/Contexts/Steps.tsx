import { createContext, FC, useState } from "react";

interface IProps {
  children: any;
}

export const StepContext = createContext({});

export const StepProvider: FC<IProps> = ({ children }) => {
  const [stepLevel, setStepLevel] = useState(0);

  return (
    <StepContext.Provider value={{ stepLevel, setStepLevel }}>
      {children}
    </StepContext.Provider>
  );
};
