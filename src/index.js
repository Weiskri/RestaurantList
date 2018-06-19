import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RestaurantList from "./list.js"

var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <RestaurantList/>
    </div>,
    destination
);
