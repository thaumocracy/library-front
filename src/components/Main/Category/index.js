import React from 'react';
import Item from '../Item';
import Books from '../../../books.json'
import "./category.css"


const Category = (props) => {
    return (
        <section className="category__content">
            {Books.map((item => <Item key={item.id} package = {item}/>))}
        </section>
    )
}

export default Category;