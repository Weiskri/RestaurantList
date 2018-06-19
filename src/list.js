import React, { Component } from "react";
import RestaurantItems from "./RestaurantItems.js";
import "./RestaurantList.css"

class RestaurantList extends Component {
constructor(props) {
  super(props);

  this.state = {
    items: []
  };

  this.addItem = this.addItem.bind(this);
}

addItem(e) {
  if (this._inputElement.value !== "") {
    var newRestaurant = {
      text: this._inputElement.value,
      key: Date.now()
    };

    this.setState((prevState) => {
      return {
        items: prevState.items.concat(newRestaurant)
      };
    });

    this._inputElement.value = "";
  }
console.log(this.state.items);

e.preventDefault();

}


  render() {
    return (
      <div className="ListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
            placeholder="Enter a restaurant">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <RestaurantItems entries = {this.state.items}/>
      </div>
    );
  }
}

export default RestaurantList;
