import { FC } from 'react';
import * as S from './styles'

interface IProps {
  title: string;
  subtitle?: string;
}

export const Title : FC<IProps> = ({ title, subtitle}) => {
  return (
    <S.Container>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </S.Container>
  );
}