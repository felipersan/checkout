import styled from "styled-components";

interface IProps {
  width?: string;
  boxShadow?: string;
  border?: string;
  borderRadius?: string;
  height?: string;
  padding?: string;
}

export const Select = styled.select<IProps>`
  width: ${({ width }) => width ? width : '100%'};
  box-shadow: ${({ boxShadow }) => boxShadow && boxShadow};
  border: ${({ border }) => border && border};
  border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
  height: ${({ height }) => height && height};
  padding: ${({ padding }) => padding && padding};
`