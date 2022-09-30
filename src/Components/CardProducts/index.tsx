import { FC } from 'react';
import * as S from './styles'

interface IProps {
  element: any;
}

export const CardProducts: FC<IProps> = ({ element }) => {
  return (
    <S.Container>
      <img src={element.image} />
      <S.FlexColumn>
        <h4>{element.name}</h4>
        <p>{element.price}</p>
      </S.FlexColumn>
    </S.Container>
  )
};