import React, { useState, useCallback } from 'react';
//import NewsList from './components/NewsList';
//import Categories from './components/Categories';

import { Router } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

function App() {
  //const [category, setCategory] = useState('all');
  //const onSelect = useCallback((category) => {
  //  setCategory(category);
  //}, []);
  /*
    const [data, setData] = useState(null);
    const onClick = async () => {
      try {
        const response = await axios.get(
          'http://newsapi.org/v2/top-headlines?country=kr&apiKey=5fe4fd42578f48fb81f582d604533832',
        );
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    <div>
      <div>
        <button onClick={onClick}>블러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
    </div>

    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  */
  return <Router path="/:category?" component={NewsPage} />;
}

export default App;
