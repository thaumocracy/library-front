import React from 'react';
import Item from '../Item';
import Test from '../../../test.json'
import "./category.css"

const Category = (props) => {
    return (
        <section className="category__content">
            {Test.map((item => <Item key={item.id} package = {item}/>))}
        </section>
    )
}

export default Category;