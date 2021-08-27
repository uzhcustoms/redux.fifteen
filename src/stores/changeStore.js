import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";

// const cellSize = 100;

const empty = {
  color: '',
  value: 0,
  top: 0,
  left: 0
};

export const cells = [];
cells.push(empty);

let counter = 0;
const numbers = [...Array(15).keys()]
  .sort(() => Math.random() - 0.5);
// console.log(numbers);
// console.log(empty);

           

class ChangeStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  getCounter() {
    return counter;
  }

  getArrayNumbers() {
    return numbers;
  }

  setArrayCell() {
    for (let i = 1; i <= 15; i++) {
     
      const value = numbers[i - 1] + 1
      const left = i % 4;
      const top = (i - left) / 4;
   
      cells.push({
        value: value,
        left: left,
        top: top
      
      });
    }
    return cells
  }

  getEmpty() {
    return empty
  }

  // move(index) {
  //   const emptyLeft = empty.left;
  //   const emptyTop = empty.top;

  //   empty.left = cells[index].left;
  //   empty.top = cells[index].top;
  //   cells[index].left = emptyLeft;
  //   cells[index].top = emptyTop;
  // }
}
 


const changeStore = new ChangeStore();
 console.log(changeStore.setArrayCell());

dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.CHANGE_BLOCK:
      counter++;
      changeStore.emitChange();
      break;
    
    default:
  }
});

export default changeStore;