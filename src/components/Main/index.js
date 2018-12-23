import React , { Component }from 'react';
import Category from './Category'
import Advisor from './Advisor'
import Books from '../../books.json'
import './main.css'


class Main extends Component {
    adviseBook(){
        const adviceArray = Books.filter(book => book.finished !== true);
        const adviceItem = Math.floor(Math.random() * adviceArray.length);
        const advice = adviceArray[adviceItem];
    }
    render() {
        return (
            <main className="main__content">
                <Category search={this.props.search} books={Books}/>
                <Advisor advice={this.adviseBook()}/>
            </main>
        )
    }
}


export default Main;