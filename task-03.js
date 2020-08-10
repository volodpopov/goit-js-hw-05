'use strict';

class Storage {
  constructor(arr) {
    this.arr = arr;
  }
  getItems() {
    return this.arr;
  }
  addItem(item) {
    this.arr.push(item);
  }
  removeItem(item) {
    if (this.arr.includes(item)) {
      const itemIndex = this.arr.indexOf(item);
      this.arr.splice(itemIndex, 1);
    }
  }
}


const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items);

storage.addItem('Дроид');
console.table(storage.items);

storage.removeItem('Пролонгер');
console.table(storage.items);
