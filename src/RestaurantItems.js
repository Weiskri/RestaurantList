import React, { Component } from "react";

class RestaurantItems extends Component {
  createRestaurants(item) {
    return <li key={item.key}>{item.text}</li>
  }

  render() {
    var restaurantEntries = this.props.entries;
    var listItems = restaurantEntries.map(this.createRestaurants);

    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};

export default RestaurantItems;
