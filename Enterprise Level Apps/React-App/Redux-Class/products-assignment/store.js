import { combineReducers, createStore } from "redux";

const init_state = {
  cart: []
}

const reducer = (state = init_state, action) => {
  switch(action.type) {
    case 'ADD_TO_CART': return {
      cart: [...state.cart, {id: action.payload.id, title: action.payload.title, quantity: 1, price: action.payload.price}]
    }
    case 'INCREMENT_QUANTITY': return {
      cart: state.cart.map( item => item.id == action.payload ? {...item, quantity: item.quantity+1} : item )
    }
    case 'DECREMENT_QUANTITY': return {
      cart: state.cart.map( item => item.id == action.payload ? {...item, quantity: item.quantity-1} : item )
    }
    case 'DELETE_CART_ITEM': return {
      cart: state.cart.filter( item => item.id != action.payload )
    }
    default:
      return state;
  }
}


export const store = createStore(combineReducers({reducer}));