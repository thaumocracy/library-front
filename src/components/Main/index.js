import React , { Component }from 'react';
import Category from './Category'
import Advisor from './Advisor'
import Books from '../../books.json'
import './main.css'


class Main extends Component {
    render() {
        return (
            <main className="main__content">
                <Category search={this.props.search} books={Books}/>
                <Advisor />
            </main>
        )
    }
}


export default Main;