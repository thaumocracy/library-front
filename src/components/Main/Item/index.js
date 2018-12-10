import React from 'react';
import './item.css'



const Item = (props) => {
    const { title , author , image , description , finished } = props.package;
    let style = {}
    if(finished){
        style = {"color":"green"}
    } 
    return (
        <div className="item">
            <h3 className="item__title" style={style}>{title}</h3>
            <h3 className="item__title" >{author}</h3>
            <div className="item__inner">
                <img src={image} alt="Item" className='item__image item__left'/>
                <p className="item__description item__right">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Item;