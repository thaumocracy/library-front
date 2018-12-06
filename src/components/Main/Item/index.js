import React from 'react';
import './item.css'



const Item = (props) => {

    const link = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Louis_Fran%C3%A7ais-Dant%C3%A8s_sur_son_rocher.jpg/220px-Louis_Fran%C3%A7ais-Dant%C3%A8s_sur_son_rocher.jpg'
    return (
        <div className="item">
            <img src={link} alt="Item"/>
            <h3 className="item__title">Dumas - Count of Monte Cristo</h3>
            <p className="item__description">
                fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32.
            </p>
        </div>
    )
}

export default Item;