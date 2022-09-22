import * as S from './styles'
import { useState, useContext } from "react";
import NortonIcon from "../../assets/NortonIcon.svg";
import { StepContext } from '../../Contexts/Steps';
import { BsArrowRightShort } from 'react-icons/bs';

export const ShippingMethod = () => {

  const [radioSelected, setRadioSelected] = useState({ cheap: true, expensive: false })
  
  const { setStepLevel } = useContext(StepContext);

  return (
    <S.Container>
      <h3>Shipping method</h3>
      <S.MethodContainer
        bg={radioSelected.cheap ? "#EFF0F7" : "white"}
        p={radioSelected.cheap ? "#020246" : "#667085"}
        onClick={() => {
          if (radioSelected.cheap) {
            setRadioSelected({ cheap: false, expensive: true });
          } else {
            setRadioSelected({ cheap: true, expensive: false });
          }
        }}
      >
        <input type="radio" checked={radioSelected.cheap} />
        <div>
          <p>
            <span>€3.99</span> UPS
          </p>
          <p>USPS 1st Class With Tracking</p>
          <p>(5 - 13 days)</p>
        </div>
      </S.MethodContainer>
      <S.MethodContainer
        bg={radioSelected.expensive ? "#EFF0F7" : "white"}
        p={radioSelected.expensive ? "#020246" : "#667085"}
        onClick={() => {
          if (radioSelected.expensive) {
            setRadioSelected({ cheap: true, expensive: false });
          } else {
            setRadioSelected({ cheap: false, expensive: true });
          }
        }}
      >
        <input type="radio" checked={radioSelected.expensive} />
        <div>
          <p>
            <span>€4.99</span> DHL
          </p>
          <p>Business Parcell with Tracking</p>
          <p>(1-3 days)</p>
        </div>
      </S.MethodContainer>
      <S.NextContainer>
        <img src={NortonIcon} />
        <button
          onClick={() => {
            setStepLevel(2);
          }}
        >
          Next
          <BsArrowRightShort />
        </button>
      </S.NextContainer>
    </S.Container>
  );
}