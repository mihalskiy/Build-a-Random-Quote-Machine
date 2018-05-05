import React, { Component } from 'react';
import axios from 'axios';
import './article.css';

//import Article from './Article';

class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            random: true
        };
    }

    componentDidMount() {
        axios.get("https://api.myjson.com/bins/1c5so2")
            .then(result => {
                const items = result.data;
                const random = items[Math.floor(Math.random()*items.length)];
                    console.log(random);
                    this.setState({
                        isLoaded: true,
                        items,
                        random,
                    });

                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    onSort () {
        console.log('sorted')
        //state.items.sort();
    }

    render() {
        const { error, isLoaded, random } = this.state;
        //const rand = Math.floor(Math.random() * items.length);
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="article">
                        <section className="articleList">
                            <p className="articleTitle">{random.elementPureHtml}</p>
                            <a href={random.site} target="_blank"><span className="articleAuthor">{random.desc}</span></a>
                            <button onClick={this.onSort}>Новая цитата</button>
                        </section>
                </div>
            );
        }
    }
}

export  default ArticleList