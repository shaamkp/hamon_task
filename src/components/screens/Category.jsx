import React from "react";
import styled from "styled-components";

const Category = ({
  categoryData,
  setSelectedCategory,
  selectedCategory,
  setActive,
  isActive,
}) => {
  return (
    <MainContainer>
      <Wrapper>
        <SliderContainer>
          {categoryData.map((item) => (
            <CategoryDiv
              className={selectedCategory === item.menu_category_id && "active"}
              onClick={() => {
                setSelectedCategory(item.menu_category_id);
                setActive(true);
              }}
            >
              <h3>{item.menu_category}</h3>
              {}
              {isActive && (
                <UnderLineDiv
                  className={
                    selectedCategory === item.menu_category_id && "active"
                  }
                ></UnderLineDiv>
              )}
              {/* <UnderLineDiv></UnderLineDiv> */}
            </CategoryDiv>
          ))}
        </SliderContainer>
      </Wrapper>
    </MainContainer>
  );
};

export default Category;

const MainContainer = styled.div`
  width: 100%;
  height: 80px;
`;
const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const SliderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  overflow-x: scroll;

  @media all and (max-width: 640px) {
    width: 1000px;
  }
`;
const CategoryDiv = styled.div`
  height: 42px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  color: #fff;
  cursor: pointer;
  &.active {
    color: red;
  }
  @media all and (max-width: 768px) {
    font-size: 12px;
  }
`;
const UnderLineDiv = styled.div`
  width: 100%;
  height: 1px;
  &.active {
    background-color: red;
  }
`;
