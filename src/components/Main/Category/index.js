import React from 'react';
import Item from '../Item';
import "./category.css"


const Category = (props) => {
    const { search , books} = props;
    const booksOnDisplay = books.filter((item) => item.title.includes(search) || item.author.includes(search))
    return (
        <section className="category__content">
            {booksOnDisplay.map((item => <Item key={item.id} package = {item}/>))}
        </section>
    )
}

export default Category;