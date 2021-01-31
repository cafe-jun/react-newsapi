import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = ({ match }) => {
  // 카테고리가 선택 되지 않았으면 기본 값으로 all 허용
  const category = match.params.category || 'all';
  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
