import React, { Component } from "react";
import DockableItemManager from "./dockable-item-manager";

const dockableItemManager = new DockableItemManager();

class DockableItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      content: props.content,
    };
  }

  componentDidMount() {
    // When mounted, add the item to the DockableItemManager
    const id = dockableItemManager.addItem(this.state.content);
    this.setState({
      id,
    });
  }

  componentWillUnmount() {
    // When unmounted, remove the item from the DockableItemManager
    dockableItemManager.removeItem(this.state.id);
  }

  render() {
    return (
      <div key={this.state.id}>
        <span className="text">{this.state.content}</span>
      </div>
    );
  }
}

export default DockableItem;
