import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import NavigateNext from 'material-ui/svg-icons/image/navigate-next';
import RemoveShoppingCart from '@material-ui/icons/RemoveShoppingCart';
import Dialog from 'material-ui/Dialog';
import Snackbar from 'material-ui/Snackbar';
import { editCart, deleteCart } from '@api/cart';
import { createOrder } from '@api/order';
import CheckoutModal from '../CheckoutModal';
import OrderSuccessModal from '../OrderSuccessModal';
import { ICart } from '@typings/state/index';
import { modal } from '@typings/modal';
import '@styles/Cart.css';

export interface Props {
  cart: ICart;
  getCart: () => ICart;
}

const Cart = ({ cart, getCart }: Props) => {
  const [activeModal, setActiveModal] = useState<modal>(null);

  const removeItem = async (itemId: string) => {
    await editCart({
      cartId: cart._id,
      itemId: itemId
    });

    getCart();

    setActiveModal('snackbar');
    setTimeout(() => {
      setActiveModal(null);
    }, 4000);
  }

  const emptyCart = async () => {
    await deleteCart({ id: cart._id })
    await setActiveModal(null);
    await getCart();
  }

  const makeOrder = async () => {
    const order = cart.items.map((item) => {
      let order = {
        name: item.product.info.name,
        price: item.product.info.price,
        quantity: item.quantity,
        dateCreated: Date.now()
      };
      return order;
    });

    await createOrder({ order })
    await emptyCart();
    
    setActiveModal('orderSuccess');
  }

  useEffect(() => {
    getCart();
  }, []);

  const cartExists = cart.isLoaded && !cart.error && cart.items.length;

  return (
    <div className="cart-container">
      <h1> Сіздің тапсырысыңыз</h1>
      <div className="cart">
        <div className="cart-info">
          <div className="info">
            <p>
              <b>Себеттегі саны </b>
              {cartExists ? cart.items.reduce((acc, item) => acc += item.quantity!, 0) : 0}
            </p>
            <p>
              <b>Қорытынды: </b>
              <span className="total">
                {cartExists ? numeral(cart.items.reduce((acc, item) => acc += item.product.info.price *450* item.quantity!, 0)).format('0,0 ')+'₸' : numeral(0).format('0,0 ')+'₸'}
              </span>
            </p>
          </div>
          <div className="btns">
            <RaisedButton
              onClick={() => setActiveModal('checkout')}
              className="btn"
              label="Төлеу"
              labelPosition="before"
              icon={<NavigateNext />}
              primary={true}
              disabled={!cartExists}
            />
            <RaisedButton
              onClick={() => setActiveModal('dialog')}
              className="btn"
              label="Себетті тазалаңыз"
              labelPosition="before"
              icon={<RemoveShoppingCart />}
              secondary={true}
              disabled={!cartExists}
            />
          </div>
          <CheckoutModal
            isOpen={activeModal === 'checkout'}
            onRequestClose={() => setActiveModal}
            setActiveModal={setActiveModal}
            makeOrder={makeOrder}
          />
          <OrderSuccessModal
            isOpen={activeModal === 'orderSuccess'}
            setActiveModal={setActiveModal}
            onRequestClose={() => {}}
          />
          <Dialog
            title="Сіз себетті тазалағыңыз келетініне сенімдісіз бе?"
            actions={[
              <FlatButton
                label="Бас тарту"
                primary={true}
                onClick={() => setActiveModal(null)}
              />,
              <FlatButton
                label="Растау"
                primary={true}
                onClick={emptyCart}
              />,
            ]}
            modal={true}
            open={activeModal === 'dialog'}
          >
            Барлық тауарлар жойылады
          </Dialog>
        </div>
        <div className="cart-items">
          {cartExists ?
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Атауы</th>
                  <th>Бағасы</th>
                  <th>Саны</th>
                  <th>Қорытынды</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.items.map((item) => (
                  <tr key={item.product.info.name} >
                    <td><img src={item.product.info.photo} /></td>
                    <td><Link to={`/product/${item.product._id}`}>{item.product.info.name}</Link></td>
                    <td>{numeral(item.product.info.price*450).format('0,0 ')+'₸'}</td>
                    <td>{item.quantity}</td>
                    <td>{numeral(item.product.info.price*460 * item.quantity!).format('0,0 ')+'₸'}</td>
                    <td><button title="Өнімді алып тастаңыз " onClick={() => removeItem(item._id)}>X</button></td>
                  </tr>
                ))}
              </tbody>
            </table> :
            <h1>Себетте тауарлар жоқ</h1>
          }
          <Snackbar
            open={activeModal === 'snackbar'}
            message="Өнім жойылды"
            bodyStyle={{ 'textAlign': 'center' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
