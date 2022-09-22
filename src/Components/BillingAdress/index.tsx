import * as S from './styles'
import { Input } from '../Input/styles';
import { Select } from '../Select';
import NortonIcon from '../../assets/NortonIcon.svg'
import { BsArrowRightShort } from "react-icons/bs";
import { useContext } from 'react';
import { StepContext } from '../../Contexts/Steps';

export const BillingAdress = () => {

  const { setStepLevel } = useContext(StepContext);
  return (
    <S.Container>
      <h3>Billing Adress</h3>
      <S.GridName>
        <div>
          <label>First Name</label>
          <Input
            border={"0.775px solid #D0D5DD"}
            boxShadow={"0px 0.775px 1.55px rgba(16, 24, 40, 0.05)"}
            borderRadius={"6.2px"}
            height={"2.156rem"}
            padding={"8px 11px 8px 11px"}
          />
        </div>
        <div>
          <label>Last Name</label>
          <Input
            border={"0.775px solid #D0D5DD"}
            boxShadow={"0px 0.775px 1.55px rgba(16, 24, 40, 0.05)"}
            borderRadius={"6.2px"}
            height={"2.156rem"}
            padding={"8px 11px 8px 11px"}
          />
        </div>
      </S.GridName>
      <S.ContainerInput>
        <label>Email</label>
        <Input
          border={"0.775px solid #D0D5DD"}
          boxShadow={"0px 0.775px 1.55px rgba(16, 24, 40, 0.05)"}
          borderRadius={"6.2px"}
          height={"2.156rem"}
          padding={"8px 11px 8px 11px"}
        />
      </S.ContainerInput>
      <S.ContainerInput>
        <label>Street Adress</label>
        <Input
          border={"0.775px solid #D0D5DD"}
          boxShadow={"0px 0.775px 1.55px rgba(16, 24, 40, 0.05)"}
          borderRadius={"6.2px"}
          height={"2.156rem"}
          padding={"8px 11px 8px 11px"}
        />
      </S.ContainerInput>
      <S.GridName>
        <div>
          <label>State/Province</label>
          <Select
            border={"0.775px solid #D0D5DD"}
            boxShadow={"0px 0.775px 1.55px rgba(16, 24, 40, 0.05)"}
            borderRadius={"6.2px"}
            height={"2.156rem"}
            padding={"8px 11px 8px 11px"}
          >
            <option value="LA">Los Angeles</option>
            <option value="NY">New York</option>
          </Select>
        </div>
        <div>
          <label>City</label>
          <Select
            border={"0.775px solid #D0D5DD"}
            boxShadow={"0px 0.775px 1.55px rgba(16, 24, 40, 0.05)"}
            borderRadius={"6.2px"}
            height={"2.156rem"}
            padding={"8px 11px 8px 11px"}
          >
            <option value="LA">Los Angeles</option>
            <option value="NY">New York</option>
          </Select>
        </div>
      </S.GridName>
      <S.GridName>
        <div>
          <label>Zip/ Postal Code</label>
          <Select
            border={"0.775px solid #D0D5DD"}
            boxShadow={"0px 0.775px 1.55px rgba(16, 24, 40, 0.05)"}
            borderRadius={"6.2px"}
            height={"2.156rem"}
            padding={"8px 11px 8px 11px"}
          >
            <option value="LA">03687</option>
            <option value="NY">08659</option>
          </Select>
        </div>
        <div>
          <label>Phone number</label>
          <Input
            border={"0.775px solid #D0D5DD"}
            boxShadow={"0px 0.775px 1.55px rgba(16, 24, 40, 0.05)"}
            borderRadius={"6.2px"}
            height={"2.156rem"}
            padding={"8px 11px 8px 11px"}
          />
        </div>
      </S.GridName>
      <S.ContainerCheckbox>
        <S.CheckboxContainer>
          <input type="checkbox" />
          <label>My billing and shipping adress are the same</label>
        </S.CheckboxContainer>
        <S.CheckboxContainer>
          <input type="checkbox" />
          <label>Create an account for 10% off this purchase</label>
        </S.CheckboxContainer>
      </S.ContainerCheckbox>
      <S.NextContainer>
        <img src={NortonIcon} />
        <button onClick={() => {setStepLevel(1)}}>Next<BsArrowRightShort/></button>
      </S.NextContainer>
    </S.Container>
  );
}