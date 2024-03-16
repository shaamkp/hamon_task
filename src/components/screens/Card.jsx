import React, { useState } from "react";

import Yes from "../../assets/images/home/yes.png";
import No from "../../assets/images/home/no.png";
import Dish from "../../assets/images/home/dish.jpg";
import styled from "styled-components";

import { connect, useDispatch } from "react-redux";
import { increment, decrement } from "../../store/Actions";

const Card = ({ datas }) => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const increaseValue = () => {
    setValue((prevValue) => prevValue + 1);
    dispatch(increment());
  };

  const decreaseValue = () => {
    if (value > 0) {
      setValue((prevValue) => prevValue - 1);
      dispatch(decrement());
    }
  };
  return (
    <MainContainer>
      <Wrapper>
        <CardConatiner>
          <LeftConatiner>
            <CardMainLeftContainer>
              <NameContainer>
                {datas?.dish_Type === 1 ? (
                  <AvailableContainer>
                    <img src={Yes} alt="Image" />
                  </AvailableContainer>
                ) : (
                  <AvailableContainer>
                    <img src={No} alt="Image" />
                  </AvailableContainer>
                )}

                <h2>{datas?.dish_name}</h2>
              </NameContainer>
              <NameContainer>
                <h4>
                  {datas?.dish_currency} {datas.dish_price}
                </h4>
              </NameContainer>
              <NameContainer>
                <p>{datas?.dish_description}</p>
              </NameContainer>

              <NameContainer>
                <Form>
                  <DecreaseButton onClick={decreaseValue}>-</DecreaseButton>
                  <Input type="number" value={value} readOnly />
                  <IncreaseButton onClick={increaseValue}>+</IncreaseButton>
                </Form>
              </NameContainer>
              {datas?.addonCat?.length === 0 ? null : (
                <NameContainer>
                  <Para>Customizations available</Para>
                </NameContainer>
              )}
              {datas?.dish_Availability ? null : (
                <NameContainer>
                  <Para>Not Available</Para>
                </NameContainer>
              )}
            </CardMainLeftContainer>
            <CardRightMainContainer>
              {datas?.dish_calories} Calories
            </CardRightMainContainer>
          </LeftConatiner>
          <RightConatiner>
            <DishImageContainer>
              <img src={datas?.dish_image} alt="Image" />
            </DishImageContainer>
          </RightConatiner>
        </CardConatiner>
      </Wrapper>
    </MainContainer>
  );
};

const mapDispatchToProps = {
  increaseValue: increment,
  decreaseValue: decrement,
};

export default connect(null, mapDispatchToProps)(Card);

const MainContainer = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const CardConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 25px;
  border-bottom: 1px solid #f1f7ff36;

  @media all and (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

const LeftConatiner = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;

  @media all and (max-width: 480px) {
    flex-wrap: wrap;
    width: 100%;
    flex-direction: column-reverse !important;
  }
`;
const NameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  h2 {
    color: #fff;
    font-weight: 700;
    text-transform: capitalize;
  }
  h4 {
    font-weight: 600;
    color: #fff;
    margin-top: 10px;
  }
  p {
    color: #f1f7ff7a;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
const AvailableContainer = styled.div`
  width: 5%;
  img {
    display: block;
    width: 100%;
  }
  @media all and (max-width: 768px) {
    width: 10%;
  }
`;
const RightConatiner = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 20px;
  width: 20%;
  @media all and (max-width: 480px) {
    width: 100%;
  }
`;
const DishImageContainer = styled.div`
  width: 100%;
  img {
    display: block;
    width: 100%;
    height: 200px;
    overflow: hidden;
    object-fit: cover;
    border-radius: 8px;
  }
`;
const Form = styled.form`
  width: 200px;
  display: flex;
  text-align: center;
  color: #fff;
`;

const ValueButton = styled.div`
  display: inline-block;
  margin: 0px;
  width: 40px;
  height: 27px;
  text-align: center;
  /* vertical-align: middle; */
  background-color: #18a046;
  /* padding: 11px 0; */
  cursor: pointer;
`;

const DecreaseButton = styled(ValueButton)`
  margin-right: -4px;
  border-radius: 8px 0 0 8px;
`;

const IncreaseButton = styled(ValueButton)`
  margin-left: -4px;
  border-radius: 0 8px 8px 0;
`;

const Input = styled.input`
  text-align: center;
  background-color: #18a046;
  border: none;
  margin: 0px;
  width: 60px;
  height: 27px;
  padding-left: 10px;
`;
const CardMainLeftContainer = styled.div`
  width: 50%;
  @media all and (max-width: 480px) {
    width: 100%;
  }
`;
const CardRightMainContainer = styled.div`
  width: 30%;
  display: flex;
  color: #fff;
  justify-content: end;
  align-items: center;
  color: #f1f7ff7a;
  margin-right: 10px !important;
  @media all and (max-width: 480px) {
    justify-content: start;
    margin-bottom: 10px;
  }
`;
const Para = styled.p`
  font-style: italic;
  color: #ff0000ab !important;
`;
