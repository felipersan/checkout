import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import { CardProducts } from "./../CardProducts/index";
import { FC } from 'react'
import * as S from './styles'

interface IProps {
  products: {
    name: string;
    price: string;
    image: any;
  }[];
  totalValueProducts: string;
}

export const AccordionOrderReview: FC<IProps> = ({ products, totalValueProducts }) => {
  return (
    <Accordion
      sx={{
        border: "0.383033px solid #B2BCCA",
        boxShadow: "none",
        borderRadius: "18.3856px !important",
      }}
    >
      <AccordionSummary
        expandIcon={<IoIosArrowDown />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>
          <S.FlexColumn>
            <h3>Order Review</h3>
            <p>2 items in cart ({totalValueProducts})</p>
          </S.FlexColumn>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <S.Cardsontainer>
            {products.map((element: any, index: number) => {
              return <CardProducts element={element} key={index} />;
            })}
          </S.Cardsontainer>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
