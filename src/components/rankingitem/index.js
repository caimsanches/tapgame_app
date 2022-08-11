import React, { useEffect } from 'react';
import './style.css';

function RankingItem(props) {
<<<<<<< HEAD
    useEffect(() => {
=======
    useEffect(()=> {
>>>>>>> ec6cd92be863b1b69b38e0230955b4bf2567dd26
        console.log(props.item);
    })
    return (
        <div class="ranking-item">
<<<<<<< HEAD
            <div class="item-avatar">
                <div class="item-ranking">{`#${props.item.ranking}`}</div>
=======

            <div class="item-avatar">
                <img src={`${props.item.avatar}`} alt="" />
>>>>>>> ec6cd92be863b1b69b38e0230955b4bf2567dd26
            </div>
            <div class="item-content">
                <div class="item-score">{props.item.score}</div>
                <div class="item-conquistas">
<<<<<<< HEAD
                    <div class="item-score">{props.item.nick}</div>
                    {/*
                        props.item.conquistas &&
                        props.item.conquistas.map((item, index) => (
                            <img src={require(`../../assets/images/icons/${item.img_url}.png`) } alt=""/>
                        ))
                    */}
=======
                {
                    props.item.conquistas &&
                    props.item.conquistas.map((item, index) => (
                        <img src={require(`../../assets/images/icons/${item.img_url}.png`) } alt=""/>
                    ))
                }
>>>>>>> ec6cd92be863b1b69b38e0230955b4bf2567dd26
                </div>
            </div>
        </div>
    );
}

export default RankingItem;