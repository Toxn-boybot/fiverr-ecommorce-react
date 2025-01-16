import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext'; // Adjust the import path if necessary

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-header cartMenu">
        <h5 className="offcanvas-title cartMenu" id="offcanvasExampleLabel">
          Your Cart
        </h5>
        <button
          type="button"
          className="btn-close cartMenu"
          id="closer2"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body cartMenu">
        <table className="cart-table">
          <tbody>
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <tr key={index}>
                  <td className="title">
                    <span className="name">{item.title}</span>
                  </td>
                  <td className="price">${item.price}</td>
                  <td className="actions">
                    <a
                      href="#"
                      className="action-icon"
                      onClick={() => removeItemFromCart(index)}
                    >
                      <i className="ti ti-close"></i>
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">
                  Your cart is empty.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="cart-table-summary">
          <div className="row">
            <div className="text-right text-muted col-7">Products total:</div>
            <div className="col-5">
              <strong>
                $
                {cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2)}
              </strong>
            </div>
          </div>
          <div className="row">
            <div className="text-right text-muted col-7">Delivery:</div>
            <div className="col-5">
              <strong>$9.00</strong>
            </div>
          </div>
          <hr className="hr-sm" />
          <div className="row text-lg">
            <div className="text-right text-muted col-7">Total:</div>
            <div className="col-5">
              <strong>
                $
                {(
                  cart.reduce((total, item) => total + parseFloat(item.price), 0) + 9
                ).toFixed(2)}
              </strong>
            </div>
          </div>
        </div>
        <a href="#" id="checkout1" className="btn cartMenu" target="_self">
          <span>Go to checkout</span>
        </a>
      </div>
    </div>
  );
};

export default Cart;
