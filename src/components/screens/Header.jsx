import React from "react";
import styled from "styled-components";

import { connect, useSelector } from "react-redux";

const Header = () => {
  const { totalItems } = useSelector((state) => state);
  return (
    <HeaderConatiner>
      <Wrapper>
        <MainContainer>
          <LogoContainer>
            <h2>Artisan Resto Cafe</h2>
          </LogoContainer>
          <RightContainer>
            <h3>My orders</h3>
            <i class="ri-shopping-cart-2-line"></i>
            <CartContainer>
              <CartNumberContainer>{totalItems}</CartNumberContainer>
            </CartContainer>
          </RightContainer>
        </MainContainer>
      </Wrapper>
    </HeaderConatiner>
  );
};

const mapStateToProps = (state) => {
  return {
    totalCount: state.totalItems,
  };
};

export default connect(mapStateToProps)(Header);

const HeaderConatiner = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoContainer = styled.div`
  h2 {
    color: #fff;
    font-weight: 700;
  }
`;
const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
`;
const CartNumberContainer = styled.div`
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  font-size: 8px;
  border-radius: 50%;
  color: #fff;
  position: relative;
`;
const CartContainer = styled.div`
  position: absolute;
  right: 9.5%;
  top: 3%;

  @media all and (max-width: 1024px) {
    top: 7%;
    right: 9%;
  }
  @media all and (max-width: 768px) {
    top: 3%;
  }
`;
