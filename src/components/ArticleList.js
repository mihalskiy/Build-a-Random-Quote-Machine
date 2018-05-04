import React, { Component } from 'react';
import axios from 'axios';

//import Article from './Article';

class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        axios.get("https://api.myjson.com/bins/1c5so2")
            //.then(res => res.json())
            .then(result => {
                const items = result.data;
                console.log(items);
                    this.setState({
                        isLoaded: true,
                        items
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li>
                            {item.name} {item.link} {item.elementPureHtml}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export  default ArticleList