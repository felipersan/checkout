import * as S from './styles'
import Check from '../../assets/Check.svg'
import IndustrialTable from "../../assets/IndustrialTable.jpg";
import IndustrialSofaTable from "../../assets/IndustrialSofaTable.jpg";
import { AccordionOrderReview } from '../AccordionOrderReview';
import { FC, useContext } from "react";
import { StepContext } from "../../Contexts/Steps";

const products = [
  {
    name: "Industrial Table",
    price: "$15,00",
    image: IndustrialTable,
  },
  {
    name: "Industrial Sofa Table",
    price: "$15,00",
    image: IndustrialSofaTable,
  },
];

interface IProps {
  totalOrder: string;
}

export const ThanksPage: FC<IProps> = ({ totalOrder }) => {
  const { setStepLevel } = useContext(StepContext);

  return (
    <S.Container>
      <img src={Check} />
      <h2>Thanks a lot for putting up this order</h2>
      <p>
        Your Mailto order <span>ASK123456</span> has successfully been placed.
        You’ll fin all the details about your order below, and we’ll send you a
        shipping confrimation email as soon as your order ships. In the
        meantime, you can share Mailto and earn store credit.
      </p>
      <p>
        Questions? Suggestions? insightful showe thoughts?{" "}
        <span>Shoot us an email</span>.
      </p>
      <AccordionOrderReview
        totalValueProducts={totalOrder}
        products={products}
      />
      <button
        onClick={() => {
          setStepLevel(0);
        }}
      >
        Back to shop
      </button>
    </S.Container>
  );
};