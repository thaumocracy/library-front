import React , { Component }from 'react';
import Category from './Category'
import './main.css'


class Main extends Component {
    render() {
        return (
            <main className="main__content">
                <Category />
            </main>
        )
    }
}


export default Main;