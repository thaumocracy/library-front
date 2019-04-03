import React , { Component }from 'react';
import Category from './Category'
import Advisor from './Advisor'
import './main.css'


class Main extends Component {

    state = {
        advisor : true,
        books : []
    }

    componentDidMount(){
        fetch('http://127.0.0.1:3005/')
        .then(data => data.json())
        .then(books => {
            console.log(books)
            this.setState({books:books})}
            )
    }

    // adviseBook = () =>{
    //     const adviceArray = this.state.books.filter(book => book.finished !== true);
    //     const adviceItem = Math.floor(Math.random() * adviceArray.length);
    //     const advice = adviceArray[adviceItem];
    //     return advice;
    // }

    handleClose = () => {
        console.log(this.state)
        const show = this.state.advisor
        this.setState({advisor:!show})
    }


    render() {
        const { books } = this.state
        return (
            <main className="main__content">
                <Category 
                    search={this.props.search} 
                    books={books}/>
                {/* <Advisor 
                    show={this.state.advisor}
                    advice={this.adviseBook()} 
                    handleClose={this.handleClose}
                /> */}
            </main>
        )
    }
}


export default Main;