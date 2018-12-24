import React from 'react';
import "./advisor.css"


const Advisor = (props) => {
    const { advice , handleClose , show} = props;
    if(show){
        return (
            <aside className="advisor__container">
                <h2 className="advisor__item">{`Позвольте сегодня предложить вамъ чудесную книгу '${advice.title}' за авторствомъ ${advice.author} `}</h2>
                <button className="advisor__close" onClick={() => handleClose()}>Сгинь къ дьяволу </button>
            </aside>
    
        )
    } else {
        return null
    }

}


export default Advisor;