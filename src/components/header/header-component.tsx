import styled from "styled-components";

export const Header = () => {
  return (
    <S.HeaderElement>
      <S.HeaderItems>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </S.HeaderItems>
    </S.HeaderElement>
  );
};

const S = {
  HeaderElement: styled.div`
    display: flex;
    justify-content: center;
  `,
  HeaderItems: styled.div`
    color: red;
  `,
};
