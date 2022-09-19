import * as S from './styles'
import { Input } from '../Input/styles';

export const BillingAdress = () => {
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
          <Input
            border={"0.775px solid #D0D5DD"}
            boxShadow={"0px 0.775px 1.55px rgba(16, 24, 40, 0.05)"}
            borderRadius={"6.2px"}
            height={"2.156rem"}
            padding={"8px 11px 8px 11px"}
          />
        </div>
        <div>
          <label>City</label>
          <Input
            border={"0.775px solid #D0D5DD"}
            boxShadow={"0px 0.775px 1.55px rgba(16, 24, 40, 0.05)"}
            borderRadius={"6.2px"}
            height={"2.156rem"}
            padding={"8px 11px 8px 11px"}
          />
        </div>
      </S.GridName>
      <S.GridName>
        <div>
          <label>Zip/ Postal Code</label>
          <Input
            border={"0.775px solid #D0D5DD"}
            boxShadow={"0px 0.775px 1.55px rgba(16, 24, 40, 0.05)"}
            borderRadius={"6.2px"}
            height={"2.156rem"}
            padding={"8px 11px 8px 11px"}
          />
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
    </S.Container>
  );
}