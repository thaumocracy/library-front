import React , { Component }from 'react';
import './header.css'

class Header extends Component {
    render() {
        return (
            <header className="main__header">
                <nav className="main__nav">
                    <ul className="main__nav__list">
                        <li className="main__nav__item"><a href="#" className="main__nav__link">Link text</a></li>
                        <li className="main__nav__item"><a href="#" className="main__nav__link">Link text</a></li>
                        <li className="main__nav__item"><a href="#" className="main__nav__link">Link text</a></li>
                        <li className="main__nav__item"><a href="#" className="main__nav__link">Link text</a></li>
                        <li className="main__nav__item"><a href="#" className="main__nav__link">Link text</a></li>
                        <li className="main__nav__item"><a href="#" className="main__nav__link">Link text</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}


export default Header;