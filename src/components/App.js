import React from 'react';
//import Article from './Article';
import ArticleList from './ArticleList';
import articles from '../fixtures';
import '../index.css';

function App () {

    return (
        <div>
            {/*<Article article={articles[0]} flag foo="bar"/>*/}
            <ArticleList articles={articles}/>
        </div>
    )
}

export default App;