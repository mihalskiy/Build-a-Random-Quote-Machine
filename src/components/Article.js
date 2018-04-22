import React, {Component} from 'react';

class Article extends Component{

/*    constructor(props) {
        super(props)

        this.state = {
            isOpen: true
        };

        this.hendleClose = hendleClose.bind(this);
    }*/

    state = {
        isOpen: true
    };


    render() {

        const {article} = this.props;
        const body = this.state.isOpen && <section>{article.text}</section>;
        //const date = new Date().toDateString();
        console.log(this.props);
        return (
            <div>
                <h1>{article.title}</h1>
                <button onClick={this.hendleClose}>{this.state.isOpen ? 'Close':'Open'}</button>
                {body}
                <h3>creation date: {article.date}</h3>
            </div>
        )
    }

    hendleClose =  () => {
        console.log('_____');
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}

export default Article;