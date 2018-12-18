import React from 'react';
import Item from '../Item';
import Books from '../../../books.json'
import "./category.css"


const Category = (props) => {
    const { search } = props;
    const booksOnDisplay = Books.filter((item) => item.title.includes(search) || item.author.includes(search))
    return (
        <section className="category__content">
            {booksOnDisplay.map((item => <Item key={item.id} package = {item}/>))}
        </section>
    )
}

export default Category;