import { useContext } from "react";
import { StepContext } from "../../Contexts/Steps";
import * as S from "./styles";
import { FaCheck } from "react-icons/fa";

export const Stepper = () => {
  const { stepLevel } = useContext(StepContext);
  return (
    <S.Container>
      {stepLevel < 1 ? (
        <S.Container>
          <div className="step">
            <div className="circle">
              <div className="level"></div>
            </div>
          </div>
          <div className="line"></div>
        </S.Container>
      ) : (
        <S.Container>
          <div className="stepIn">
            <FaCheck />
          </div>
          <div className="lineIn"></div>
        </S.Container>
      )}
      {stepLevel < 2 ? (
        <S.Container>
          <div className="step">
            <div className="circle">
              <div className="level"></div>
            </div>
          </div>
          <div className="line"></div>
        </S.Container>
      ) : (
        <S.Container>
          <div className="stepIn">
            <FaCheck />
          </div>
          <div className="lineIn"></div>
        </S.Container>
      )}
      {stepLevel < 3 ? (
        <S.Container>
          <div className="step">
            <div className="circle">
              <div className="level"></div>
            </div>
          </div>
          <div className="line"></div>
        </S.Container>
      ) : (
        <S.Container>
          <div className="stepIn">
            <FaCheck />
          </div>
          <div className="lineIn"></div>
        </S.Container>
      )}
      {stepLevel < 4 ? (
        <S.Container>
          <div className="step">
            <div className="circle">
              <div className="level"></div>
            </div>
          </div>
        </S.Container>
      ) : (
        <S.Container>
          <div className="stepIn">
            <FaCheck />
          </div>
        </S.Container>
      )}
    </S.Container>
  );
};
