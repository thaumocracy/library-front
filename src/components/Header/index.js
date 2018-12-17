import React , { Component }from 'react';
import './header.css'

class Header extends Component {
    render() {
        return (
            <header className="main__header">
                <nav className="main__nav">
                    <ul className="main__nav__list">
                        <li className="main__nav__item"><a href="/please" className="main__nav__link">Link text</a></li>
                        <li className="main__nav__item"><a href="/stop" className="main__nav__link">Link text</a></li>
                        <li className="main__nav__item"><a href="/warning" className="main__nav__link">Link text</a></li>
                        <li className="main__nav__item"><a href="/me" className="main__nav__link">Link text</a></li>
                        <li className="main__nav__item"><a href="/bloody" className="main__nav__link">Link text</a></li>
                        <li className="main__nav__item"><a href="/webpack" className="main__nav__link">Link text</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}


export default Header;