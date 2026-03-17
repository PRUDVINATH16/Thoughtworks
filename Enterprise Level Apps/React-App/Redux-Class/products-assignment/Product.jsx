import { connect } from 'react-redux';
import products from './products.json'

function Product({ reducer: { cart }, dispatch }) {

  function getQuantity(id) {
    let item = cart.find(item => item.id == id)
    return item?.quantity;
  }

  function isProductInCart(id, title, price) {
    let item = cart.some(item => item.id == id);
    if (item) {
      return <div className='quantity-btns'>
        <button onClick={() => {
          let quan = getQuantity(id);
          if (quan >= 2) {
            dispatch({ type: 'DECREMENT_QUANTITY', payload: id })
          } else {
            dispatch({ type: 'DELETE_CART_ITEM', payload: id })
          }
        }}
        >-</button>
        <span>{getQuantity(id)}</span>
        <button
          onClick={() => {
            dispatch({ type: 'INCREMENT_QUANTITY', payload: id })
          }}
        >+</button>
      </div>
    } else {
      return <button
        id={id}
        className='add-btn'
        onClick={() => {
          dispatch({
            type: 'ADD_TO_CART', payload: {id: id, title: title, price: price}
          })
        }}>+ Add to Cart</button>
    }
  }

  return (
    <div className='products-container'>
      {products.products.map(product => {
        return <div className='product-card' key={product.id}>
          <div className="image-container">
            <img src={product.thumbnail} alt={product.title} />
          </div>
          <h2>{product.title}</h2>
          <div className="price-section">
            <h2>{product.price}</h2>
            {product.discountPercentage > 0 && <h3>{product.discountPercentage}</h3>}
          </div>
          <div className="buttons-section">
            {
              isProductInCart(product.id, product.title, product.price)
            }
          </div>
        </div>
      })}
    </div>
  )
}

export default connect(store => store)(Product)