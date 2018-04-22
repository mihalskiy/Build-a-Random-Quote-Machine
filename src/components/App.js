import React from 'react';
//import Article from './Article';
import ArticleList from './ArticleList';
import articles from '../fixtures';

function App () {

    return (
        <div>
            <h1>app name</h1>
            {/*<Article article={articles[0]} flag foo="bar"/>*/}
            <ArticleList articles={articles}/>
        </div>
    )
}

export default App;