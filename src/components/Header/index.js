import React , { Component }from 'react';
import './header.css'

class Header extends Component {
    render() {
        return (
            <header className="main__header">
                <nav className="main__nav">
                    <ul className="main__nav__list">
                        <li className="main__nav__item link"><a href="/please" className="main__nav__link">Home</a></li>
                        <li className="main__nav__item search">
                        <input 
                            onChange={(event) => this.props.handleSearch(event)} 
                            type="search" 
                            className="main__nav__link search"
                            placeholder="Search"
                        />
                        </li>
                        <li className="main__nav__item link"><a href="/some" className="main__nav__link"><img src="../../assets/background.jpg" alt="img"/></a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}


export default Header;