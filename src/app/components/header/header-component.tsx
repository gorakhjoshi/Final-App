import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <S.HeaderElement>
      <S.HeaderItems>
        <NavItem to="home">Home</NavItem>
        <NavItem to="activity">Activity</NavItem>
        <NavItem to="services">Services</NavItem>
      </S.HeaderItems>
    </S.HeaderElement>
  );
};

function NavItem({ to, children }: any) {
  return <NavLink to={to}>{children}</NavLink>;
}

const S = {
  HeaderElement: styled.div`
    display: flex;
    justify-content: center;
  `,
  HeaderItems: styled.div`
    color: red;
  `,
};
