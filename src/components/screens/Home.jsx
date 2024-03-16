import React, { useEffect, useState } from "react";
import Header from "./Header";
import "../../App.css";
import Category from "./Category";
import api from "../../api";
import Card from "./Card";
import styled from "styled-components";

const Home = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("11");
  const [filterData, setFilterData] = useState({});
  const [isActive, setActive] = useState(true);

  const fetchCategoryDetails = () => {
    api
      .get("db0018c8-5982-4d89-a54f-f51fe14d3c89")
      .then((res) => {
        setCategoryData(res.data[0].table_menu_list);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCategoryDetails();
  }, []);

  useEffect(() => {
    if (categoryData.length > 0) {
      const new_data = categoryData.filter(
        (category) => category.menu_category_id === selectedCategory
      )[0];
      setFilterData(new_data);
    }
  }, [selectedCategory, categoryData]);

  return (
    <div className="w-full h-screen bg-black">
      <Header />
      <CategoryScrollView>
        <Category
          categoryData={categoryData}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setActive={setActive}
          isActive={isActive}
        />
      </CategoryScrollView>
      <ScrollView>
        {filterData?.category_dishes?.map((item, index) => (
          <Card key={index} datas={item} />
        ))}
      </ScrollView>
    </div>
  );
};

export default Home;

const ScrollView = styled.div`
  max-height: 80vh;
  overflow-y: scroll;
`;
const CategoryScrollView = styled.div`
  max-width: 1080px;
  overflow-x: scroll;
`;
