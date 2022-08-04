import React from "react";
import styled from "styled-components";
import { Spacing } from "shared/styles/styles";

interface Props {
  padding?: string;
  children: React.ReactNode;
}

export const CenteredContainer = ({ padding = "60px", children }: Props) => (
  <S.Container>
    <S.Centered padding={padding}>{children}</S.Centered>
  </S.Container>
);

const S = {
  Container: styled.div`
    display: flex;
  `,
  Centered: styled.div<{ padding: string }>`
    width: 100%;
    margin: ${Spacing.u4} 0;
    padding: ${({ padding }) => padding};
    text-align: center;
  `,
};
