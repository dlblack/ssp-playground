class DockableItemManager {
  constructor() {
    this.items = [];
    this.logItemCount();
  }

  addItem(content) {
    const id = this.generateId();
    this.items.push({ id, content });
    this.logItemCount();
    return id;
  }

  removeItem(id) {
    this.items = this.items.filter((item) => item.id !== id);
    this.logItemCount();
  }

  getItems() {
    return this.items;
  }

  generateId() {
    return this.items.length + 1;
  }

  logItemCount() {
    console.log(`Number of items managed: ${this.items.length}`);
  }
}

export default DockableItemManager;
