import React , { Component }from 'react';
import Category from './Category'
import Advisor from './Advisor'
import Books from '../../books.json'
import './main.css'


class Main extends Component {

    state = {
        advisor : true,
        books : Books
    }

    adviseBook = () =>{
        const adviceArray = this.state.books.filter(book => book.finished !== true);
        const adviceItem = Math.floor(Math.random() * adviceArray.length);
        const advice = adviceArray[adviceItem];
        return advice;
    }

    handleClose = () => {
        console.log(this.state)
        const show = this.state.advisor
        this.setState({advisor:!show})
    }

    render() {
        return (
            <main className="main__content">
                <Category 
                    search={this.props.search} 
                    books={this.state.books}/>
                <Advisor 
                    show={this.state.advisor}
                    advice={this.adviseBook()} 
                    handleClose={this.handleClose}
                />
            </main>
        )
    }
}


export default Main;