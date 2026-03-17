import { connect } from "react-redux"


function Cart({ reducer: { cart }, dispatch }) {

  function getTotal() {
    let total = cart.reduce( (acc, item) => {
      return acc + item.price * item.quantity
    }, 0)
    return total.toFixed(2);
  }

  return (
    <div className='cart-container'>
      <h2>CART</h2>
      <div className="items-container">
        {
          cart.map(item => <div className="cart-item" key={item.id}>
            <div className="cart-item-info">
              <span>{item.title}</span>
              <h2>{item.price}</h2>
            </div>
            <button className="del-btn" onClick={() => {
              dispatch({ type: 'DELETE_CART_ITEM', payload: item.id })
            }}>Remove</button>
          </div>)
        }
      </div>
      <div className="payment-price">
        <p><span>{getTotal()}</span></p>
      </div>
      <button className="gen-in-btn">Generate Invoice</button>
    </div>
  )
}

export default connect(store => store)(Cart)