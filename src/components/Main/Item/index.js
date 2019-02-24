import React from 'react';
import './item.css'



const Item = (props) => {
    const { title , author , image , finished } = props.package;
    let style = {}
    if(finished){
        style = {"color":"green"}
    } 
    return (
        <div className="item">
            <h3 className="item__title" >{author}</h3>
            <h3 className="item__title" style={style}>{title}</h3>
            <div className="item__inner">
                <img src={image} alt="Item" className='item__image item__left'/>
            </div>
        </div>
    )
}

export default Item;