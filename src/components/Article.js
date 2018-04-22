import React from 'react';

function Article (props) {
    const {article} = props;
    const body = <section>{article.title}</section>;
    //const date = new Date().toDateString();
    return (
        <div>
            <h1>{article.title}</h1>
            {body}
            <h3>creation date: {article.date}</h3>
        </div>
    )
}

export default Article;