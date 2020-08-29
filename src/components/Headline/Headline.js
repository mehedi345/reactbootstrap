import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Headline = () => {
    const [articles, setArticles] = useState([]);
    useEffect(()=> {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=1d610fee21674e3098406e5fd39d4c5a')
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    },[])
    return (
        <div>
            <h1>top-headlines: {articles.length}</h1>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default Headline;