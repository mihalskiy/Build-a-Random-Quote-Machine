import React, { Component } from 'react';
import axios from 'axios';
import './article.css';

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

    onReload () {
        window.location.reload()
    }

    render() {
        const { error, isLoaded, random } = this.state;
        const colors = [
            '#16a085',
            '#27ae60',
            '#2c3e50',
            '#f39c12',
            '#e74c3c',
            '#9b59b6',
            '#FB6964',
            '#342224',
            "#472E32",
            "#BDBB99",
            "#77B1A9",
            "#73A857"
        ];
        const rand = Math.floor(Math.random() * colors.length);
        const randomColor = {
            background: colors[rand],
        };
        console.log(colors[rand]);
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="article" style={randomColor}>
                        <section className="articleList" >
                            <p className="articleTitle">{random.elementPureHtml}</p>
                            <a href={random.site} target="_blank"><span className="articleAuthor">{random.desc}</span></a>
                            <button onClick={this.onReload}>Новая цитата</button>
                        </section>
                </div>
            );
        }
    }
}

export  default ArticleList